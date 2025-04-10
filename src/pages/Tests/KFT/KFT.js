import React from 'react';
import { FaFlask, FaClock, FaHospital } from 'react-icons/fa';
import './KFT.css';

const KFT = () => {
  return (
    <div className="test-page">
      <div className="test-page__header">
        <h1 className="test-page__title">Kidney Function Test (KFT)</h1>
        <p className="test-page__subtitle">Complete kidney health assessment</p>
      </div>

      <div className="test-page__content">
        <div className="test-page__info">
          <div className="test-page__info-item">
            <FaFlask className="test-page__info-icon" />
            <div>
              <h3>Sample Type</h3>
              <p>Blood</p>
            </div>
          </div>
          <div className="test-page__info-item">
            <FaClock className="test-page__info-icon" />
            <div>
              <h3>Report Time</h3>
              <p>Same Day</p>
            </div>
          </div>
          <div className="test-page__info-item">
            <FaHospital className="test-page__info-icon" />
            <div>
              <h3>Fasting Required</h3>
              <p>8-10 hours</p>
            </div>
          </div>
        </div>

        <div className="test-page__section">
          <h2>About the Test</h2>
          <p>
            A Kidney Function Test (KFT) is a group of blood tests that measures different substances in your blood to check how well your kidneys are working. The test helps diagnose, monitor, and treat conditions that affect kidney function.
          </p>
        </div>

        <div className="test-page__section">
          <h2>Included Parameters</h2>
          <ul className="test-page__parameters">
            <li>Blood Urea</li>
            <li>Serum Creatinine</li>
            <li>BUN</li>
            <li>BUN/Creatinine Ratio</li>
            <li>Serum Uric Acid</li>
            <li>Serum Calcium</li>
            <li>Inorganic Phosphorus</li>
            <li>NA+</li>
            <li>K+</li>
            <li>Serum Chloride</li>
          </ul>
        </div>

        <div className="test-page__section">
          <h2>Preparation</h2>
          <ul className="test-page__preparation">
            <li>Fast for 8-10 hours before the test</li>
            <li>Drink plenty of water</li>
            <li>Avoid heavy meals the night before</li>
            <li>Inform about any medications you are taking</li>
          </ul>
        </div>

        <div className="test-page__section">
          <h2>When to Take</h2>
          <p>You should consider taking a KFT if you:</p>
          <ul className="test-page__when">
            <li>Have high blood pressure</li>
            <li>Have diabetes</li>
            <li>Are over 60 years old</li>
            <li>Have a family history of kidney disease</li>
            <li>Experience symptoms like frequent urination or swelling</li>
          </ul>
        </div>

        <div className="test-page__book">
          <button className="test-page__book-button">Book Now</button>
          <div className="test-page__price">
            <span className="test-page__price-current">₹599</span>
            <span className="test-page__price-original">₹999</span>
            <span className="test-page__price-discount">40% OFF</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KFT;
