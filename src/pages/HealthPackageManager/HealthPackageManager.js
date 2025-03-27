import React, { useState, useEffect, useCallback } from 'react';
import { FaPlus, FaFilter, FaStar, FaRegStar, FaEdit, FaTrash } from 'react-icons/fa';
import { uploadImage, deleteImage } from '../../services/appwriteService';
import './HealthPackageManager.css';

const HealthPackageManager = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [newPackage, setNewPackage] = useState({
    name: '',
    description: '',
    price: '',
    discountedPrice: '',
    category: '',
    tests: [],
    isFeatured: false,
    imageFile: null,
    imagePreview: ''
  });

  const fetchPackages = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/packages');
      if (!response.ok) {
        throw new Error('Failed to fetch packages');
      }
      const data = await response.json();
      setPackages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []); // No dependencies needed as it only uses setState functions

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      // Create a preview URL for the UI
      const previewUrl = URL.createObjectURL(file);
      setNewPackage(prev => ({
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
    try {
      let imageData = null;
      if (newPackage.imageFile) {
        imageData = await uploadImage(newPackage.imageFile);
      }

      const packageData = {
        name: newPackage.name,
        description: newPackage.description,
        price: parseFloat(newPackage.price),
        discountedPrice: parseFloat(newPackage.discountedPrice) || null,
        category: newPackage.category,
        tests: newPackage.tests,
        isFeatured: newPackage.isFeatured,
        imageId: imageData?.id,
        imageUrl: imageData?.url
      };

      const response = await fetch('/api/packages', {
        method: editingPackage ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingPackage ? { ...packageData, id: editingPackage.id } : packageData)
      });

      if (!response.ok) throw new Error('Failed to save package');
      
      fetchPackages();
      setShowAddModal(false);
      resetForm();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (pkg) => {
    if (!window.confirm('Are you sure you want to delete this package?')) return;
    
    try {
      if (pkg.imageId) {
        await deleteImage(pkg.imageId);
      }

      const response = await fetch(`/api/packages/${pkg.id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete package');
      
      fetchPackages();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleToggleFeatured = async (pkg) => {
    try {
      const response = await fetch(`/api/packages/${pkg.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...pkg, isFeatured: !pkg.isFeatured })
      });

      if (!response.ok) throw new Error('Failed to update package status');
      
      fetchPackages();
    } catch (err) {
      setError(err.message);
    }
  };

  const resetForm = () => {
    setNewPackage({
      name: '',
      description: '',
      price: '',
      discountedPrice: '',
      category: '',
      tests: [],
      isFeatured: false,
      imageFile: null,
      imagePreview: ''
    });
    setEditingPackage(null);
  };

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || pkg.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(packages.map(pkg => pkg.category))];

  if (isLoading) {
    return <div className="hpm-loading">Loading...</div>;
  }

  return (
    <div className="hpm-container">
      <div className="hpm-header">
        <div className="hpm-title-section">
          <h1>Health Package Manager</h1>
          <p>Manage your health packages</p>
        </div>
        <div className="hpm-header-actions">
          <button className="hpm-filter-button" onClick={() => setShowFilters(!showFilters)}>
            <FaFilter /> Filters
          </button>
          <button className="hpm-add-button" onClick={() => setShowAddModal(true)}>
            <FaPlus /> Add Package
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="hpm-filters">
          <div className="hpm-filter-group">
            <input
              type="text"
              className="hpm-search-input"
              placeholder="Search packages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="hpm-filter-group">
            <select
              className="hpm-select"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="hpm-packages-grid">
        {filteredPackages.map(pkg => (
          <div key={pkg.id} className="hpm-package-card">
            <div className="hpm-package-image">
              <img src={pkg.imageUrl} alt={pkg.name} />
              <div className="hpm-package-overlay">
                <button
                  className="hpm-toggle-button"
                  onClick={() => handleToggleFeatured(pkg)}
                  title={pkg.isFeatured ? 'Remove from Featured' : 'Mark as Featured'}
                >
                  {pkg.isFeatured ? <FaStar /> : <FaRegStar />}
                </button>
              </div>
            </div>
            <div className="hpm-package-content">
              <div className="hpm-package-header">
                <h3>{pkg.name}</h3>
                <span className="hpm-category">{pkg.category}</span>
              </div>
              <p>{pkg.description}</p>
              <div className="hpm-price-section">
                <span className="hpm-price">₹{pkg.price}</span>
                {pkg.discountedPrice && (
                  <span className="hpm-discounted-price">₹{pkg.discountedPrice}</span>
                )}
              </div>
              <div className="hpm-tests-list">
                <strong>Tests Included:</strong>
                <ul>
                  {pkg.tests.map((test, index) => (
                    <li key={index}>{test}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hpm-package-actions">
              <button onClick={() => {
                setEditingPackage(pkg);
                setNewPackage({
                  ...pkg,
                  imageFile: null,
                  imagePreview: pkg.imageUrl
                });
                setShowAddModal(true);
              }}>
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(pkg)}>
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="hpm-modal-overlay">
          <div className="hpm-modal">
            <h2>{editingPackage ? 'Edit Package' : 'Add New Package'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="hpm-form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={newPackage.name}
                  onChange={(e) => setNewPackage(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="hpm-form-group">
                <label>Description</label>
                <textarea
                  value={newPackage.description}
                  onChange={(e) => setNewPackage(prev => ({ ...prev, description: e.target.value }))}
                  required
                />
              </div>
              <div className="hpm-form-group">
                <label>Category</label>
                <input
                  type="text"
                  value={newPackage.category}
                  onChange={(e) => setNewPackage(prev => ({ ...prev, category: e.target.value }))}
                  required
                />
              </div>
              <div className="hpm-form-row">
                <div className="hpm-form-group">
                  <label>Price (₹)</label>
                  <input
                    type="number"
                    value={newPackage.price}
                    onChange={(e) => setNewPackage(prev => ({ ...prev, price: e.target.value }))}
                    required
                  />
                </div>
                <div className="hpm-form-group">
                  <label>Discounted Price (₹)</label>
                  <input
                    type="number"
                    value={newPackage.discountedPrice}
                    onChange={(e) => setNewPackage(prev => ({ ...prev, discountedPrice: e.target.value }))}
                  />
                </div>
              </div>
              <div className="hpm-form-group">
                <label>Tests (one per line)</label>
                <textarea
                  value={newPackage.tests.join('\n')}
                  onChange={(e) => setNewPackage(prev => ({ ...prev, tests: e.target.value.split('\n').filter(test => test.trim()) }))}
                  required
                />
              </div>
              <div className="hpm-form-group">
                <label>Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required={!editingPackage}
                />
                {newPackage.imagePreview && (
                  <img
                    src={newPackage.imagePreview}
                    alt="Preview"
                    className="hpm-image-preview"
                  />
                )}
              </div>
              <div className="hpm-form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={newPackage.isFeatured}
                    onChange={(e) => setNewPackage(prev => ({ ...prev, isFeatured: e.target.checked }))}
                  />
                  Featured Package
                </label>
              </div>
              <div className="hpm-modal-actions">
                <button type="button" onClick={() => {
                  setShowAddModal(false);
                  resetForm();
                }}>
                  Cancel
                </button>
                <button type="submit">
                  {editingPackage ? 'Save Changes' : 'Add Package'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthPackageManager;
