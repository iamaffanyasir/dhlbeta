import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFlask, FaClock, FaHospital, FaChevronRight } from 'react-icons/fa';
import './MobileTests.css';
import { tests } from '../../../data/tests';
import MobileSearch from '../../../components/Mobile/MobileSearch/MobileSearch';

const categories = [
  'All Tests',
  'Blood Tests',
  'Urine Tests',
  'Hormone Tests',
  'Cancer Markers',
  'Diabetes',
  'Heart Health'
];

const MobileTests = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All Tests');

  const filteredTests = activeCategory === 'All Tests' 
    ? tests 
    : tests.filter(test => test.category === activeCategory);

  const handleTestClick = (testId) => {
    navigate(`/tests/${testId}`);
  };

  return (
    <div className="mobile-tests">
      <div className="mobile-tests__header">
        <h1 className="mobile-tests__title">Lab Tests</h1>
        <p className="mobile-tests__subtitle">Choose from our wide range of diagnostic tests</p>
      </div>

      <MobileSearch />

      <div className="mobile-tests__categories">
        <div className="mobile-tests__categories-list">
          {categories.map(category => (
            <button
              key={category}
              className={`mobile-tests__category ${
                activeCategory === category ? 'mobile-tests__category--active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mobile-tests__grid">
        {filteredTests.map(test => (
          <div 
            key={test.id} 
            className="mobile-tests__card"
            onClick={() => handleTestClick(test.id)}
          >
            <div className="mobile-tests__card-header">
              <div className="mobile-tests__card-icon">
                <FaFlask size={20} />
              </div>
              <div>
                <h3 className="mobile-tests__card-title">{test.name}</h3>
                <span className="mobile-tests__card-price">₹{test.price}</span>
              </div>
            </div>

            <div className="mobile-tests__card-content">
              <p className="mobile-tests__card-description">
                {test.description}
              </p>
              <div className="mobile-tests__card-meta">
                <span className="mobile-tests__card-meta-item">
                  <FaClock size={12} />
                  {test.duration}
                </span>
                <span className="mobile-tests__card-meta-item">
                  <FaHospital size={12} />
                  {test.labType}
                </span>
              </div>
            </div>

            <div className="mobile-tests__card-actions">
              <button className="mobile-tests__card-button mobile-tests__card-button--primary">
                Book Now
              </button>
              <button className="mobile-tests__card-button mobile-tests__card-button--secondary">
                Learn More <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileTests;
