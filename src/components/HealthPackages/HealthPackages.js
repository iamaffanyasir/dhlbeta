import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import './HealthPackages.css';

// Fallback packages while API is not ready
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
    imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80",
    price: 3999,
    discountedPrice: 7998,
    category: "senior",
    isFeatured: true,
    tests: [
      "Complete Blood Count",
      "Bone Density Test",
      "Vision Test",
      "Hearing Test",
      "Joint Assessment",
      "Memory Test"
    ]
  }
];

const HealthPackages = () => {
  const [packages, setPackages] = useState(fallbackPackages);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 3;

  useEffect(() => {
    fetchPackages();
  }, []);

  useEffect(() => {
    // Reset to first page when category changes
    setCurrentPage(1);
  }, [selectedCategory]);

  const fetchPackages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/packages');
      if (!response.ok) {
        setPackages(fallbackPackages);
        return;
      }
      const data = await response.json();
      if (data && data.length > 0) {
        setPackages(data);
      }
    } catch (err) {
      console.error('Error fetching packages:', err);
      setPackages(fallbackPackages);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = ['all', ...new Set(packages.map(pkg => pkg.category))];

  const filteredPackages = packages.filter(pkg => 
    selectedCategory === 'all' || pkg.category === selectedCategory
  );

  // Get current packages
  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = filteredPackages.slice(indexOfFirstPackage, indexOfLastPackage);
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);

  if (isLoading) {
    return <div className="hp-loading">Loading...</div>;
  }

  if (error) {
    return <div className="hp-error">{error}</div>;
  }

  if (!packages || packages.length === 0) {
    return <div className="hp-empty">No health packages available</div>;
  }

  return (
    <section className="hp-section">
      <div className="hp-header">
        <h2>Health Packages</h2>
        <p>Choose from our comprehensive range of health checkup packages</p>
      </div>

      <div className="hp-categories">
        {categories.map(category => (
          <button
            key={category}
            className={`hp-category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="hp-grid">
        {currentPackages.map(pkg => (
          <div key={pkg.id} className={`hp-card ${pkg.isFeatured ? 'featured' : ''}`}>
            {pkg.isFeatured && (
              <div className="hp-featured">
                <FaStar /> Featured
              </div>
            )}
            <div className="hp-image">
              <OptimizedImage
                src={pkg.imageUrl}
                alt={pkg.name}
                width={400}
                height={300}
                loading="lazy"
                quality={80}
              />
            </div>
            <div className="hp-content">
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <div className="hp-price">
                <span className="hp-original-price">₹{pkg.price}</span>
                {pkg.discountedPrice && (
                  <span className="hp-discounted-price">₹{pkg.discountedPrice}</span>
                )}
              </div>
              <div className="hp-tests">
                <strong>Tests Included:</strong>
                <ul>
                  {pkg.tests.map((test, index) => (
                    <li key={index}>{test}</li>
                  ))}
                </ul>
              </div>
              <button 
                className="hp-book-btn"
                onClick={() => window.location.href = `/book-package/${pkg.id}`}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="hp-pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`hp-page-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default HealthPackages;
