const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getActiveSlides = async () => {
  try {
    const response = await fetch(`${BASE_URL}/carousel/active`);
    if (!response.ok) throw new Error('Failed to fetch slides');
    return await response.json();
  } catch (error) {
    console.error('Error fetching slides:', error);
    return [];
  }
};

export const getAllSlides = async () => {
  try {
    const response = await fetch(`${BASE_URL}/carousel`);
    if (!response.ok) throw new Error('Failed to fetch slides');
    return await response.json();
  } catch (error) {
    console.error('Error fetching slides:', error);
    return [];
  }
};

export const createSlide = async (slideData) => {
  try {
    const response = await fetch(`${BASE_URL}/carousel`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slideData)
    });
    if (!response.ok) throw new Error('Failed to create slide');
    return await response.json();
  } catch (error) {
    console.error('Error creating slide:', error);
    throw error;
  }
};

export const updateSlide = async (id, slideData) => {
  try {
    const response = await fetch(`${BASE_URL}/carousel/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slideData)
    });
    if (!response.ok) throw new Error('Failed to update slide');
    return await response.json();
  } catch (error) {
    console.error('Error updating slide:', error);
    throw error;
  }
};

export const deleteSlide = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/carousel/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete slide');
    return await response.json();
  } catch (error) {
    console.error('Error deleting slide:', error);
    throw error;
  }
};

export const reorderSlides = async (slideIds) => {
  try {
    const response = await fetch(`${BASE_URL}/carousel/reorder`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slideIds })
    });
    if (!response.ok) throw new Error('Failed to reorder slides');
    return await response.json();
  } catch (error) {
    console.error('Error reordering slides:', error);
    throw error;
  }
};
