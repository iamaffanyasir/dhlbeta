import React from 'react';
import './cbc.css';
import { FaInfoCircle, FaChevronRight } from 'react-icons/fa';
import TataLogo from '../assets/logo.png';

const CBC = () => {
  return (
    <div className="cbc-container">
      <div className="cbc-content">
        <aside className="cbc-sidebar">
          <nav className="cbc-nav">
            <a href="#detail" className="cbc-nav-item active">Test Detail</a>
            <a href="#understanding" className="cbc-nav-item">Understanding the Test</a>
            <a href="#measures" className="cbc-nav-item">Test Measures</a>
            <a href="#results" className="cbc-nav-item">Interpreting Results</a>
            <a href="#faq" className="cbc-nav-item">FAQ's</a>
            <a href="#price" className="cbc-nav-item">City Price Info</a>
            <a href="#collection" className="cbc-nav-item">Home Collection</a>
            <a href="#references" className="cbc-nav-item">References</a>
            <a href="#other" className="cbc-nav-item">Other Tests</a>
          </nav>
        </aside>

        <main className="cbc-main">
          <div className="cbc-header">
            <h1 className="cbc-title">CBC (Complete Blood Count)</h1>
            <p className="cbc-description">
              Also known as Full blood examination, Full blood cell count, Complete blood picture, FBE, FBC, FBE, BC, BCC, etc. 
              Includes: Blood CBC with Differential, CBC / Differential
            </p>
            <div className="cbc-price-box">
              <span className="cbc-price">₹319</span>
              <span className="cbc-original-price">₹450</span>
              <span className="cbc-discount">29% off</span>
            </div>
          </div>

          <section className="cbc-section">
            <h2 className="cbc-section-title">Test Preparation</h2>
            <ul className="cbc-prep-list">
              <li className="cbc-prep-item">
                <FaInfoCircle />
                <span>No special preparation is required.</span>
              </li>
            </ul>
          </section>

          <section className="cbc-section">
            <h2 className="cbc-section-title">Understanding CBC (Complete Blood Count)</h2>
            <h3 className="cbc-section-title">What is CBC (Complete Blood Count)?</h3>
            <div className="cbc-understanding">
              <p>The CBC (Complete Blood Count) test provides important information about the blood components, including red blood cells (RBCs), white blood cells (WBCs), and platelets. This test helps:</p>
              <ul className="cbc-list">
                <li className="cbc-list-item">Screen for various health conditions</li>
                <li className="cbc-list-item">Diagnose blood-related disorders</li>
                <li className="cbc-list-item">Monitor overall health status</li>
                <li className="cbc-list-item">Track treatment effectiveness</li>
              </ul>
              <p>The test measures several key components:</p>
              <ul className="cbc-list">
                <li className="cbc-list-item">Red Blood Cells (RBCs): Carry oxygen throughout your body</li>
                <li className="cbc-list-item">White Blood Cells (WBCs): Help fight infections</li>
                <li className="cbc-list-item">Platelets: Aid in blood clotting</li>
                <li className="cbc-list-item">Hemoglobin: Protein in RBCs that carries oxygen</li>
                <li className="cbc-list-item">Hematocrit: Percentage of blood volume made up by RBCs</li>
              </ul>
            </div>
          </section>
        </main>

        <aside className="cbc-right-panel">
          <div className="cbc-lab-info">
            <img src={TataLogo} alt="Tata 1mg Labs" className="cbc-lab-logo" />
            <div>
              <div className="cbc-lab-name">Tata 1mg Labs (Tata 1mg Technologies Private Limited)</div>
              <a href="#know-more" className="cbc-lab-link">Know more</a>
            </div>
          </div>

          <button className="cbc-book-btn">BOOK NOW</button>

          <div className="cbc-related">
            <h3 className="cbc-section-title">Frequently Booked Together</h3>
            <div className="cbc-related-list">
              <a href="#thyroid" className="cbc-related-item">
                <div className="cbc-related-info">
                  <div className="cbc-related-name">Thyroid Profile Total (T3, T4 & TSH)</div>
                  <div className="cbc-related-desc">Thyroid Profile, T3, T3 RIA, Total T3, Triiodothyronine Total</div>
                </div>
                <FaChevronRight />
              </a>
              <a href="#lft" className="cbc-related-item">
                <div className="cbc-related-info">
                  <div className="cbc-related-name">LFT (Liver Function Test)</div>
                  <div className="cbc-related-desc">Hepatic function tests, Liver panel test, Liver function panel</div>
                </div>
                <FaChevronRight />
              </a>
              <a href="#urine" className="cbc-related-item">
                <div className="cbc-related-info">
                  <div className="cbc-related-name">Urine R/M (Urine Routine & Microscopy)</div>
                  <div className="cbc-related-desc">Microscopic examination, Complete urine test</div>
                </div>
                <FaChevronRight />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CBC;
