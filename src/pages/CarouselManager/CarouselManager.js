import React, { useState, useEffect, useCallback } from 'react';
import { FaPlus, FaFilter, FaEye, FaEyeSlash, FaEdit, FaTrash, FaArrowUp, FaArrowDown, FaUndo } from 'react-icons/fa';
import { uploadImage, deleteImage } from '../../services/appwriteService';
import './CarouselManager.css';

const CarouselManager = () => {
  const [slides, setSlides] = useState([]);
  const [deletedSlides, setDeletedSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingSlide, setEditingSlide] = useState(null);
  const [newSlide, setNewSlide] = useState({
    title: '',
    description: '',
    buttonText: '',
    buttonLink: '',
    isActive: true,
    imageFile: null,
    imagePreview: ''
  });

  const fetchSlides = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/api/carousel');
      if (!response.ok) {
        throw new Error('Failed to fetch slides');
      }
      const data = await response.json();
      setSlides(data.filter(slide => !slide.isDeleted));
      setDeletedSlides(data.filter(slide => slide.isDeleted));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [setSlides, setDeletedSlides, setError, setIsLoading]);

  useEffect(() => {
    fetchSlides();
  }, [fetchSlides]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select an image file');
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('Image size should be less than 10MB');
        return;
      }

      console.log('Selected file:', {
        name: file.name,
        type: file.type,
        size: file.size
      });

      // Create a preview URL for the UI
      const previewUrl = URL.createObjectURL(file);
      setNewSlide(prev => ({
        ...prev,
        imageFile: file,
        imagePreview: previewUrl
      }));
    } catch (err) {
      console.error('Error handling image:', err);
      setError('Failed to process image');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      let imageData = null;
      if (newSlide.imageFile) {
        console.log('Uploading image to Appwrite...');
        imageData = await uploadImage(newSlide.imageFile);
        console.log('Image upload response:', imageData);
      }

      const slideData = {
        title: newSlide.title,
        description: newSlide.description,
        buttonText: newSlide.buttonText,
        buttonLink: newSlide.buttonLink,
        isActive: newSlide.isActive,
        imageId: imageData?.id || (editingSlide?.imageId || null),
        imageUrl: imageData?.url || (editingSlide?.imageUrl || null)
      };

      console.log('Saving slide data:', slideData);

      const response = await fetch('http://localhost:5000/api/carousel', {
        method: editingSlide ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingSlide ? { ...slideData, id: editingSlide.id } : slideData)
      });

      if (!response.ok) {
        throw new Error('Failed to save slide');
      }

      await fetchSlides();
      setShowAddModal(false);
      resetForm();
    } catch (err) {
      console.error('Error in handleSubmit:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (slide) => {
    if (!window.confirm('Are you sure you want to delete this slide?')) return;
    
    setIsLoading(true);
    try {
      // Delete image from Appwrite if it exists
      if (slide.imageId) {
        await deleteImage(slide.imageId);
      }

      const response = await fetch(`http://localhost:5000/api/carousel/${slide.id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete slide');
      
      fetchSlides();
    } catch (err) {
      setError(err.message);
      console.error('Error deleting slide:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestore = async (slide) => {
    try {
      const response = await fetch(`http://localhost:5000/api/carousel/${slide.id}/restore`, {
        method: 'PUT'
      });

      if (!response.ok) throw new Error('Failed to restore slide');
      
      fetchSlides();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleToggleActive = async (slide) => {
    try {
      const response = await fetch(`http://localhost:5000/api/carousel/${slide.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...slide, isActive: !slide.isActive })
      });

      if (!response.ok) throw new Error('Failed to update slide status');
      
      fetchSlides();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleReorder = async (slide, direction) => {
    const newSlides = [...slides];
    const index = newSlides.indexOf(slide);
    const newIndex = direction === 'up' ? index - 1 : index + 1;

    if (newIndex < 0 || newIndex >= newSlides.length) return;

    [newSlides[index], newSlides[newIndex]] = [newSlides[newIndex], newSlides[index]];

    try {
      const response = await fetch('http://localhost:5000/api/carousel/reorder', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slideIds: newSlides.map(s => s.id) })
      });

      if (!response.ok) throw new Error('Failed to reorder slides');
      
      setSlides(newSlides);
    } catch (err) {
      setError(err.message);
    }
  };

  const resetForm = () => {
    setNewSlide({
      title: '',
      description: '',
      buttonText: '',
      buttonLink: '',
      isActive: true,
      imageFile: null,
      imagePreview: ''
    });
    setEditingSlide(null);
  };

  const filteredSlides = slides.filter(slide => {
    const matchesSearch = slide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         slide.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && slide.isActive) ||
                         (statusFilter === 'inactive' && !slide.isActive);
    return matchesSearch && matchesStatus;
  });

  if (isLoading) {
    return <div className="cm-loading">Loading...</div>;
  }

  return (
    <div className="cm-container">
      <div className="cm-header">
        <div className="cm-title-section">
          <h1>Carousel Manager</h1>
          <p>Manage your homepage carousel slides</p>
        </div>
        <div className="cm-header-actions">
          <button className="cm-filter-button" onClick={() => setShowFilters(!showFilters)}>
            <FaFilter /> Filters
          </button>
          <button className="cm-add-button" onClick={() => setShowAddModal(true)}>
            <FaPlus /> Add Slide
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="cm-filters">
          <div className="cm-filter-group">
            <input
              type="text"
              className="cm-search-input"
              placeholder="Search slides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="cm-filter-group">
            <select
              className="cm-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      )}

      <div className="cm-slides-grid">
        {filteredSlides.map((slide, index) => (
          <div key={slide.id} className={`cm-slide-card ${!slide.isActive ? 'cm-inactive' : ''}`}>
            <div className="cm-slide-image">
              <img src={slide.imageUrl} alt={slide.title} />
              <div className="cm-slide-overlay">
                <button
                  className="cm-toggle-button"
                  onClick={() => handleToggleActive(slide)}
                  title={slide.isActive ? 'Deactivate' : 'Activate'}
                >
                  {slide.isActive ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <div className="cm-slide-content">
              <div className="cm-slide-header">
                <h3>{slide.title}</h3>
                <span className={`cm-status ${slide.isActive ? 'cm-active' : 'cm-inactive'}`}>
                  {slide.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
              <p>{slide.description}</p>
              <button className="cm-slide-button">
                {slide.buttonText}
              </button>
            </div>
            <div className="cm-slide-actions">
              <button
                onClick={() => handleReorder(slide, 'up')}
                disabled={index === 0}
              >
                <FaArrowUp />
              </button>
              <button
                onClick={() => handleReorder(slide, 'down')}
                disabled={index === slides.length - 1}
              >
                <FaArrowDown />
              </button>
              <button onClick={() => {
                setEditingSlide(slide);
                setNewSlide({
                  ...slide,
                  imageFile: null,
                  imagePreview: slide.imageUrl
                });
                setShowAddModal(true);
              }}>
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(slide)}>
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {deletedSlides.length > 0 && (
        <div className="cm-deleted-section">
          <h2>Recently Deleted</h2>
          <div className="cm-deleted-slides">
            {deletedSlides.map(slide => (
              <div key={slide.id} className="cm-deleted-slide">
                <img src={slide.imageUrl} alt={slide.title} />
                <div className="cm-deleted-content">
                  <h4>{slide.title}</h4>
                  <button onClick={() => handleRestore(slide)}>
                    <FaUndo /> Restore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="cm-modal-overlay">
          <div className="cm-modal">
            <h2>{editingSlide ? 'Edit Slide' : 'Add New Slide'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="cm-form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={newSlide.title}
                  onChange={(e) => setNewSlide(prev => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>
              <div className="cm-form-group">
                <label>Description</label>
                <textarea
                  value={newSlide.description}
                  onChange={(e) => setNewSlide(prev => ({ ...prev, description: e.target.value }))}
                  required
                />
              </div>
              <div className="cm-form-group">
                <label>Button Text</label>
                <input
                  type="text"
                  value={newSlide.buttonText}
                  onChange={(e) => setNewSlide(prev => ({ ...prev, buttonText: e.target.value }))}
                  required
                />
              </div>
              <div className="cm-form-group">
                <label>Button Link</label>
                <input
                  type="text"
                  value={newSlide.buttonLink}
                  onChange={(e) => setNewSlide(prev => ({ ...prev, buttonLink: e.target.value }))}
                  required
                />
              </div>
              <div className="cm-form-group">
                <label>Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required={!editingSlide}
                />
                {newSlide.imagePreview && (
                  <img
                    src={newSlide.imagePreview}
                    alt="Preview"
                    className="cm-image-preview"
                  />
                )}
              </div>
              <div className="cm-form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={newSlide.isActive}
                    onChange={(e) => setNewSlide(prev => ({ ...prev, isActive: e.target.checked }))}
                  />
                  Active
                </label>
              </div>
              <div className="cm-modal-actions">
                <button type="button" onClick={() => {
                  setShowAddModal(false);
                  resetForm();
                }}>
                  Cancel
                </button>
                <button type="submit">
                  {editingSlide ? 'Save Changes' : 'Add Slide'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselManager;
