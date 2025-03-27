import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaWhatsapp, FaPhone, FaShoppingCart, FaClock, FaFlask, FaUserMd } from 'react-icons/fa';
import './TestDetails.css';

// Mock data - In real app, fetch this from API
const testsData = {
  cbc: {
    id: 'cbc',
    name: 'Complete Blood Count',
    description: 'A complete blood count (CBC) is a blood test used to evaluate your overall health and screen for various disorders affecting blood cells.',
    longDescription: `A complete blood count (CBC) is one of the most commonly performed blood tests. It reveals important information about the types and numbers of cells in your blood, particularly red blood cells, white blood cells and platelets. This information is helpful to diagnose various conditions:

    • Anemia
    • Infection
    • Blood cancers
    • Other disorders`,
    price: 299,
    discountedPrice: 599,
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80',
    preparationSteps: [
      'Fast for 8-12 hours before the test',
      'Drink plenty of water',
      'Avoid smoking and alcohol for 24 hours',
      'Inform about any medications you are taking'
    ],
    reportTime: '24 hours',
    sampleType: 'Blood',
    testingMethod: 'Automated Hematology Analyzer'
  },
  thyroid: {
    id: 'thyroid',
    name: 'Thyroid Profile',
    description: 'A comprehensive thyroid function test that measures various hormones to assess thyroid health.',
    longDescription: `The thyroid profile test measures the levels of thyroid hormones in your blood. This test helps evaluate the function of your thyroid gland and diagnose various thyroid disorders:

    • Hypothyroidism
    • Hyperthyroidism
    • Thyroid nodules
    • Goiter`,
    price: 399,
    discountedPrice: 799,
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80',
    preparationSteps: [
      'Fast for 8-10 hours before the test',
      'Take the test early in the morning',
      'Continue medications unless advised otherwise',
      'Inform about any thyroid supplements'
    ],
    reportTime: '24 hours',
    sampleType: 'Blood',
    testingMethod: 'ELISA/CLIA'
  },
  diabetes: {
    id: 'diabetes',
    name: 'Diabetes Screening',
    description: 'A comprehensive test to check blood sugar levels and assess diabetes risk.',
    longDescription: `The diabetes screening test includes both fasting blood glucose and HbA1c measurements. This combination provides a complete picture of your blood sugar control:

    • Current blood sugar levels
    • Average blood sugar over past 3 months
    • Risk assessment for diabetes
    • Early detection of pre-diabetes`,
    price: 349,
    discountedPrice: 699,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    preparationSteps: [
      'Fast for 12 hours before the test',
      'Only water is allowed during fasting',
      'Avoid strenuous exercise 24 hours before',
      'Continue regular medications unless advised otherwise'
    ],
    reportTime: '24 hours',
    sampleType: 'Blood',
    testingMethod: 'Glucose Oxidase/HPLC'
  },
  'vitamin-d': {
    id: 'vitamin-d',
    name: 'Vitamin D Test',
    description: 'Measures the level of Vitamin D in your blood to assess deficiency or excess.',
    longDescription: `The Vitamin D test measures the level of 25-hydroxy Vitamin D in your blood. This test is important because:

    • Vitamin D is crucial for bone health
    • It affects immune system function
    • Deficiency is common but often undiagnosed
    • Helps prevent osteoporosis`,
    price: 599,
    discountedPrice: 1199,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80',
    preparationSteps: [
      'No special preparation needed',
      'Inform about any supplements',
      'Continue regular medications',
      'No fasting required'
    ],
    reportTime: '24-48 hours',
    sampleType: 'Blood',
    testingMethod: 'LCMS/HPLC'
  },
  lipid: {
    id: 'lipid',
    name: 'Lipid Profile',
    description: 'Measures different types of fats in your blood to assess heart health.',
    longDescription: `A lipid profile is a complete cholesterol test that measures the amount of "good" and "bad" cholesterol and triglycerides in your blood. This test helps:

    • Assess cardiovascular health
    • Determine heart disease risk
    • Monitor cholesterol-lowering treatments
    • Guide lifestyle modifications`,
    price: 399,
    discountedPrice: 799,
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80',
    preparationSteps: [
      'Fast for 9-12 hours before the test',
      'Only water is allowed during fasting',
      'Avoid fatty foods 24 hours before',
      'Continue regular medications unless advised otherwise'
    ],
    reportTime: '24 hours',
    sampleType: 'Blood',
    testingMethod: 'Spectrophotometry'
  }
};

const TestDetails = () => {
  const { testId } = useParams();
  const navigate = useNavigate();

  // Get test data based on testId
  const testData = testsData[testId];

  // If test not found, redirect to home
  if (!testData) {
    navigate('/');
    return null;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '919664064439';
    const message = `Hello, I would like to book the ${testData.name} test.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:919664064439';
  };

  const handleBookNow = () => {
    // Add to cart or proceed to booking
    console.log('Booking test:', testData.name);
  };

  return (
    <div className="mobtest">
      <div className="mobtest__header">
        <button className="mobtest__back" onClick={handleBack}>
          <FaArrowLeft />
        </button>
        <h1 className="mobtest__title">Test Details</h1>
      </div>

      <div className="mobtest__image">
        <img src={testData.image} alt={testData.name} />
      </div>

      <div className="mobtest__content">
        <h2 className="mobtest__name">{testData.name}</h2>
        
        <div className="mobtest__price">
          <span className="mobtest__price-discounted">₹{testData.price}</span>
          <span className="mobtest__price-original">₹{testData.discountedPrice}</span>
          <span className="mobtest__discount">
            {Math.round(((testData.discountedPrice - testData.price) / testData.discountedPrice) * 100)}% OFF
          </span>
        </div>

        <div className="mobtest__info-grid">
          <div className="mobtest__info-item">
            <FaClock className="mobtest__info-icon" />
            <div className="mobtest__info-text">
              <span className="mobtest__info-label">Report Time</span>
              <span className="mobtest__info-value">{testData.reportTime}</span>
            </div>
          </div>
          <div className="mobtest__info-item">
            <FaFlask className="mobtest__info-icon" />
            <div className="mobtest__info-text">
              <span className="mobtest__info-label">Sample Type</span>
              <span className="mobtest__info-value">{testData.sampleType}</span>
            </div>
          </div>
          <div className="mobtest__info-item">
            <FaUserMd className="mobtest__info-icon" />
            <div className="mobtest__info-text">
              <span className="mobtest__info-label">Method</span>
              <span className="mobtest__info-value">{testData.testingMethod}</span>
            </div>
          </div>
        </div>

        <div className="mobtest__section">
          <h3 className="mobtest__section-title">About the Test</h3>
          <p className="mobtest__description">{testData.longDescription}</p>
        </div>

        <div className="mobtest__section">
          <h3 className="mobtest__section-title">Pre-Test Preparations</h3>
          <ul className="mobtest__prep-list">
            {testData.preparationSteps.map((step, index) => (
              <li key={index} className="mobtest__prep-item">{step}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mobtest__actions">
        <div className="mobtest__contact">
          <button 
            className="mobtest__action-btn mobtest__action-btn--whatsapp"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp />
            WhatsApp
          </button>
          <button 
            className="mobtest__action-btn mobtest__action-btn--call"
            onClick={handleCallClick}
          >
            <FaPhone />
            Call
          </button>
        </div>
        <button 
          className="mobtest__book-btn"
          onClick={handleBookNow}
        >
          <FaShoppingCart />
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TestDetails;
