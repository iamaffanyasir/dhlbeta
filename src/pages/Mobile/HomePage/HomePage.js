import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaList, FaArrowRight, FaStar } from 'react-icons/fa';
import MobileSearch from '../../../components/Mobile/MobileSearch/MobileSearch';
import MobileCarousel from '../../../components/Mobile/MobileCarousel/MobileCarousel';
import offer1 from '../../../assets/mobile/images/offer-1.png';
import offer2 from '../../../assets/mobile/images/offer-2.png';
import categoryWomen from '../../../assets/mobile/images/category-women.jpg';
import categoryMen from '../../../assets/mobile/images/category-men.jpg';
import categoryLifestyle from '../../../assets/mobile/images/category-lifestyle.jpg';
import categoryHealth from '../../../assets/mobile/images/category-health.jpg';
import categorySenior from '../../../assets/mobile/images/category-senior.jpg';
import categoryCovid from '../../../assets/mobile/images/category-covid.jpg';
import './HomePage.css';

const carouselSlides = [
  {
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80',
    title: 'Special Health Package',
    description: 'Complete health check with 45+ tests at ₹1499 only'
  },
  {
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80',
    title: 'Free Home Collection',
    description: 'Book any test and get free sample collection at your doorstep'
  },
  {
    image: 'https://images.unsplash.com/photo-1581093458791-9d15cc9c09d9?auto=format&fit=crop&q=80',
    title: 'Senior Citizen Benefits',
    description: 'Extra 20% off for senior citizens on all lab tests'
  },
  {
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80',
    title: 'Family Health Card',
    description: 'Get exclusive discounts and priority service for your family'
  },
  {
    image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?auto=format&fit=crop&q=80',
    title: 'NABL Accredited Labs',
    description: 'Accurate results from certified diagnostic centers'
  }
];

const popularTests = [
  {
    id: 'cbc',
    name: 'Complete Blood Count',
    description: 'Basic blood test that measures different components of blood',
    price: 299,
    discountedPrice: 599,
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80'
  },
  {
    id: 'thyroid',
    name: 'Thyroid Profile',
    description: 'Comprehensive thyroid function assessment',
    price: 399,
    discountedPrice: 799,
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80'
  },
  {
    id: 'diabetes',
    name: 'Diabetes Screening',
    description: 'Blood sugar and HbA1c test',
    price: 349,
    discountedPrice: 699,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
  },
  {
    id: 'vitamin-d',
    name: 'Vitamin D Test',
    description: 'Check vitamin D levels in blood',
    price: 599,
    discountedPrice: 1199,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80'
  },
  {
    id: 'lipid',
    name: 'Lipid Profile',
    description: 'Complete cholesterol and triglycerides test',
    price: 399,
    discountedPrice: 799,
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80'
  }
];

const popularPackages = [
  {
    id: 'full-body',
    name: 'Comprehensive Gold Full Body Checkup',
    description: 'Complete health screening with advanced diagnostic tests',
    price: 2249,
    discountedPrice: 4498,
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80',
    testCount: 75,
    featured: true
  },
  {
    id: 'women',
    name: "Women's Health Package",
    description: 'Comprehensive health checkup designed for women',
    price: 2999,
    discountedPrice: 5998,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
    testCount: 45,
    featured: true
  },
  {
    id: 'cardiac',
    name: 'Cardiac Health Package',
    description: 'Specialized tests for heart health assessment',
    price: 3499,
    discountedPrice: 6998,
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80',
    testCount: 35,
    featured: false
  },
  {
    id: 'diabetes',
    name: 'Diabetes Care Package',
    description: 'Comprehensive diabetes screening and monitoring',
    price: 1999,
    discountedPrice: 3998,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    testCount: 25,
    featured: false
  }
];

const MobileHomePage = () => {
  const navigate = useNavigate();
  
  const handleWhatsAppClick = () => {
    const phoneNumber = '919664064439';
    const message = 'Hello, I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePackagesClick = () => {
    navigate('/packages');
  };

  const handleViewAllTests = () => {
    navigate('/tests');
  };

  const handleTestClick = (testId) => {
    navigate(`/tests/${testId}`);
  };

  const handleViewAllPackages = () => {
    navigate('/packages');
  };

  const handlePackageClick = (packageId) => {
    navigate(`/packages/${packageId}`);
  };

  const categories = [
    { id: 1, name: 'For Women', image: categoryWomen },
    { id: 2, name: 'For Men', image: categoryMen },
    { id: 3, name: 'Lifestyle Checkups', image: categoryLifestyle },
    { id: 4, name: 'Health Concerns', image: categoryHealth },
    { id: 5, name: 'Senior Care', image: categorySenior },
    { id: 6, name: 'Covid Care', image: categoryCovid }
  ];

  return (
    <div className="mobile-home-page">
      {/* Location Section */}
      <div className="mobhome-location">
        <FaMapMarkerAlt className="mobhome-location-icon" />
        <span>Delivering to</span>
        <button className="mobhome-location-btn">
          Gurgaon
          <span className="mobhome-location-arrow">▼</span>
        </button>
      </div>

      {/* Search Section */}
      <div className="mobhome-search">
        <MobileSearch />
      </div>
      {/* Quick Actions */}
      <div className="mobhome-actions">
        <button className="mobhome-action-btn mobhome-call">
          <div className="mobhome-action-icon">
            <FaPhone />
          </div>
          <span>Book via</span>
          <strong>Call</strong>
        </button>

        <button 
          className="mobhome-action-btn mobhome-packages"
          onClick={handlePackagesClick}
        >
          <div className="mobhome-action-icon">
            <FaList />
          </div>
          <span>View</span>
          <strong>Packages</strong>
        </button>

        <button 
          className="mobhome-action-btn mobhome-whatsapp"
          onClick={handleWhatsAppClick}
        >
          <div className="mobhome-action-icon">
            <FaWhatsapp />
          </div>
          <span>Book via</span>
          <strong>WhatsApp</strong>
        </button>
      </div>
      
      <div className="mobile-home__content">
        <MobileCarousel slides={carouselSlides} />
      </div>

      {/* Offer Images Grid */}
      

      {/* Categories Section */}
      <div className="mobhome-categories-section">
        <h2 className="mobhome-section-title">Lab Tests & Packages</h2>
        <div className="mobhome-categories-scroll">
          <div className="mobhome-categories">
            {categories.map(category => (
              <div key={category.id} className="mobhome-category-item">
                <div className="mobhome-category-image-container">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="mobhome-category-image"
                  />
                </div>
                <span className="mobhome-category-name">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Tests Section */}
      <div className="mobhome-popular">
        <div className="mobhome-popular__header">
          <h2 className="mobhome-section-title">Popular Tests</h2>
          <button 
            className="mobhome-popular__view-all"
            onClick={handleViewAllTests}
          >
            View All <FaArrowRight />
          </button>
        </div>
        <div className="mobhome-popular__scroll">
          {popularTests.map(test => (
            <div 
              key={test.id} 
              className="mobhome-popular__card"
              onClick={() => handleTestClick(test.id)}
            >
              <div className="mobhome-popular__image">
                <img src={test.image} alt={test.name} />
              </div>
              <div className="mobhome-popular__content">
                <h3 className="mobhome-popular__title">{test.name}</h3>
                <p className="mobhome-popular__description">{test.description}</p>
                <div className="mobhome-popular__price">
                  <span className="mobhome-popular__price-original">
                    ₹{test.discountedPrice}
                  </span>
                  <span className="mobhome-popular__price-discounted">
                    ₹{test.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Packages Section */}
      <div className="mobhome-packages">
        <div className="mobhome-packages__header">
          <h2 className="mobhome-section-title">Popular Packages</h2>
          <button 
            className="mobhome-packages__view-all"
            onClick={handleViewAllPackages}
          >
            View All <FaArrowRight />
          </button>
        </div>
        <div className="mobhome-packages__scroll">
          {popularPackages.map(pkg => (
            <div 
              key={pkg.id} 
              className="mobhome-packages__card"
              onClick={() => handlePackageClick(pkg.id)}
            >
              <div className="mobhome-packages__image">
                <img src={pkg.image} alt={pkg.name} />
                {pkg.featured && (
                  <div className="mobhome-packages__featured">
                    <FaStar /> Featured
                  </div>
                )}
              </div>
              <div className="mobhome-packages__content">
                <h3 className="mobhome-packages__title">{pkg.name}</h3>
                <p className="mobhome-packages__description">{pkg.description}</p>
                <div className="mobhome-packages__tests">
                  {pkg.testCount} Tests Included
                </div>
                <div className="mobhome-packages__price">
                  <span className="mobhome-packages__price-original">
                    ₹{pkg.discountedPrice}
                  </span>
                  <span className="mobhome-packages__price-discounted">
                    ₹{pkg.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileHomePage;
