import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaFlask } from 'react-icons/fa';
import './MobilePackages.css';

// Using the same fallback packages as desktop view
const fallbackPackages = [
  {
    id: 1,
    name: "Comprehensive Gold Full Body Checkup",
    description: "Complete health screening with advanced diagnostic tests",
    imageUrl: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80",
    price: 2249,
    discountedPrice: 4498,
    category: "full-body",
    isFeatured: true,
    tests: [
      "Complete Blood Count",
      "Diabetes Screening",
      "Kidney Function Test",
      "Thyroid Profile",
      "Lipid Profile",
      "Liver Function Test"
    ]
  },
  {
    id: 2,
    name: "Basic Health Checkup",
    description: "Essential health screening for routine checkup",
    imageUrl: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80",
    price: 1499,
    discountedPrice: 2998,
    category: "basic",
    isFeatured: false,
    tests: [
      "Blood Sugar Test",
      "Lipid Profile",
      "Liver Function Test",
      "Urine Analysis",
      "Blood Pressure",
      "BMI Check"
    ]
  },
  {
    id: 3,
    name: "Women's Health Package",
    description: "Comprehensive health checkup designed for women",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
    price: 2999,
    discountedPrice: 5998,
    category: "women",
    isFeatured: true,
    tests: [
      "Complete Blood Count",
      "Thyroid Profile",
      "Vitamin D Test",
      "Calcium Test",
      "Mammogram",
      "Pap Smear"
    ]
  },
  {
    id: 4,
    name: "Cardiac Health Package",
    description: "Specialized tests for heart health assessment",
    imageUrl: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80",
    price: 3499,
    discountedPrice: 6998,
    category: "cardiac",
    isFeatured: false,
    tests: [
      "ECG",
      "Lipid Profile",
      "Blood Pressure",
      "Cardiac Risk Markers",
      "Stress Test",
      "2D Echo"
    ]
  },
  {
    id: 5,
    name: "Diabetes Care Package",
    description: "Comprehensive diabetes screening and monitoring",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    price: 1999,
    discountedPrice: 3998,
    category: "diabetes",
    isFeatured: false,
    tests: [
      "HbA1c",
      "Fasting Blood Sugar",
      "Post Prandial Blood Sugar",
      "Kidney Function",
      "Urine Microalbumin",
      "Foot Examination"
    ]
  },
  {
    id: 6,
    name: "Senior Citizen Package",
    description: "Complete health assessment for elderly care",
    imageUrl: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80",
    price: 3999,
    discountedPrice: 7998,
    category: "senior",
    isFeatured: false,
    tests: [
      "Complete Blood Count",
      "Cardiac Assessment",
      "Bone Density Test",
      "Vision Test",
      "Hearing Test",
      "Joint Assessment"
    ]
  }
];

const MobilePackages = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Packages' },
    { id: 'full-body', name: 'Full Body' },
    { id: 'basic', name: 'Basic' },
    { id: 'women', name: 'Women' },
    { id: 'cardiac', name: 'Cardiac' },
    { id: 'diabetes', name: 'Diabetes' },
    { id: 'senior', name: 'Senior' }
  ];

  const filteredPackages = selectedCategory === 'all'
    ? fallbackPackages
    : fallbackPackages.filter(pkg => pkg.category === selectedCategory);

  return (
    <div className="mob-packages">
      <div className="mob-packages__header">
        <button 
          className="mob-packages__back-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>
        <h1 className="mob-packages__title">Health Packages</h1>
      </div>

      <div className="mob-packages__categories">
        {categories.map(category => (
          <button
            key={category.id}
            className={`${selectedCategory === category.id ? 'mob-packages__category-btn--active' : ''} mob-packages__category-btn`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mob-packages__grid">
        {filteredPackages.map(pkg => (
          <div key={pkg.id} className="mob-packages__card">
            <div className="mob-packages__card-image">
              <img src={pkg.imageUrl} alt={pkg.name} />
              {pkg.isFeatured && (
                <div className="mob-packages__card-featured">
                  <FaStar /> Featured
                </div>
              )}
            </div>
            <div className="mob-packages__card-content">
              <h3 className="mob-packages__card-title">{pkg.name}</h3>
              <p className="mob-packages__card-description">{pkg.description}</p>
              <div className="mob-packages__card-tests">
                <FaFlask /> {pkg.tests.length} Tests Included
              </div>
              <div className="mob-packages__card-price">
                <span className="mob-packages__card-price-original">
                  ₹{pkg.discountedPrice}
                </span>
                <span className="mob-packages__card-price-discounted">
                  ₹{pkg.price}
                </span>
              </div>
              <button className="mob-packages__card-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobilePackages;
