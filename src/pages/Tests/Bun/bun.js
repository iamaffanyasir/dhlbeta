import React from 'react';
import { FaFlask, FaClock, FaHospital, FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import './bun.css';

const Bun = () => {
  return (
    <div className="test-page">
      <div className="test-page__header">
        <h1 className="test-page__title">Blood Urea Nitrogen (BUN) Test</h1>
        <p className="test-page__subtitle">Measures the amount of nitrogen in blood from urea</p>
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
          <h2>
            <FaInfoCircle className="test-page__section-icon" />
            About the Test
          </h2>
          <p>
            Measures the amount of nitrogen in blood from urea This test is an essential diagnostic tool that helps healthcare providers:
          </p>
          <ul className="test-page__about-list">
            <li>Monitor your overall health status</li>
            <li>Diagnose specific medical conditions</li>
            <li>Track the effectiveness of treatments</li>
            <li>Screen for potential health issues</li>
          </ul>
          <div className="test-page__parameters">
            <h3>Test Parameters</h3>
            <div className="test-page__parameters-grid">
              <div className="test-page__parameter">
                <span className="test-page__parameter-label">Method</span>
                <span className="test-page__parameter-value">Automated Analyzer</span>
              </div>
              <div className="test-page__parameter">
                <span className="test-page__parameter-label">Sample Volume</span>
                <span className="test-page__parameter-value">2-3 mL</span>
              </div>
              <div className="test-page__parameter">
                <span className="test-page__parameter-label">Transportation</span>
                <span className="test-page__parameter-value">Room Temperature</span>
              </div>
              <div className="test-page__parameter">
                <span className="test-page__parameter-label">Stability</span>
                <span className="test-page__parameter-value">24 hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="test-page__section">
          <h2>
            <FaCheckCircle className="test-page__section-icon" />
            Test Preparation
          </h2>
          <p>To ensure accurate results, please follow these preparation guidelines:</p>
          <ul className="test-page__preparation">
            <li>Fast for 8-10 hours before the test</li>
            <li>Maintain normal hydration</li>
            <li>Follow regular medication schedule</li>
            <li>Avoid high-protein meals before the test</li>
          </ul>
          <div className="test-page__note">
            <FaExclamationTriangle className="test-page__note-icon" />
            <p>Note: Please inform your healthcare provider about any medications you are currently taking, as they may affect the test results.</p>
          </div>
        </div>

        <div className="test-page__section">
          <h2>
            <FaInfoCircle className="test-page__section-icon" />
            When to Take This Test
          </h2>
          <p>You should consider taking this test if you:</p>
          <ul className="test-page__when">
            <li>Experience kidney-related symptoms</li>
            <li>Have liver disease</li>
            <li>Are dehydrated</li>
            <li>Need kidney function assessment</li>
          </ul>
          <div className="test-page__frequency">
            <h3>Recommended Testing Frequency</h3>
            <ul>
              <li>For monitoring: Every 3-6 months</li>
              <li>For diagnosis: As recommended by your healthcare provider</li>
              <li>For screening: Annually as part of routine check-up</li>
            </ul>
          </div>
        </div>

        <div className="test-page__book">
          <div className="test-page__benefits">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>NABL Accredited Laboratory</li>
              <li>Highly Qualified Technicians</li>
              <li>Same Day Reports</li>
              <li>Home Sample Collection</li>
            </ul>
          </div>
          <div className="test-page__booking">
            <div className="test-page__price">
              <span className="test-page__price-current">₹199</span>
              <span className="test-page__price-original">₹399</span>
              <span className="test-page__price-discount">50% OFF</span>
            </div>
            <button className="test-page__book-button">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bun;