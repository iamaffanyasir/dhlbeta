import React from 'react';
import './test.css';
import { FaInfoCircle, FaChevronRight } from 'react-icons/fa';
import TataLogo from '../assets/tata.png';

const Test = ({ testData }) => {
  // This would be replaced with actual test data for each specific test
  const defaultData = {
    name: 'CBC (Complete Blood Count)',
    description: 'Also known as Full blood examination, Full blood cell count, Complete blood picture, FBE, FBC, FBE, BC, BCC, etc. Includes: Blood CBC with Differential, CBC / Differential',
    price: '₹319',
    originalPrice: '₹450',
    discount: '29% off',
    preparation: [
      'No special preparation is required.',
    ],
    understanding: {
      title: 'Understanding CBC (Complete Blood Count)',
      what: 'What is CBC (Complete Blood Count)?',
      description: 'The CBC (Complete Blood Count) test provides important information about the blood components...'
    },
    lab: {
      name: 'Tata 1mg Labs (Tata 1mg Technologies Private Limited)',
      logo: TataLogo
    },
    relatedTests: [
      {
        name: 'Thyroid Profile Total (T3, T4 & TSH)',
        description: 'Thyroid Profile, T3, T3 RIA, Total T3, Triiodothyronine Total'
      },
      {
        name: 'LFT (Liver Function Test)',
        description: 'Hepatic function tests, Liver panel test, Liver function panel, Liver profile test'
      },
      {
        name: 'Urine R/M (Urine Routine & Microscopy)',
        description: 'Microscopic examination, Microscopic analysis of urine, Complete urine test'
      }
    ]
  };

  const data = testData || defaultData;

  return (
    <div className="test-container">
      <aside className="test-sidebar">
        <nav className="test-sidebar-menu">
          <a href="#detail" className="test-sidebar-item active">Test Detail</a>
          <a href="#understanding" className="test-sidebar-item">Understanding the Test</a>
          <a href="#measures" className="test-sidebar-item">Test Measures</a>
          <a href="#results" className="test-sidebar-item">Interpreting Results</a>
          <a href="#faq" className="test-sidebar-item">FAQ's</a>
          <a href="#price" className="test-sidebar-item">City Price Info</a>
          <a href="#collection" className="test-sidebar-item">Home Collection</a>
          <a href="#references" className="test-sidebar-item">References</a>
          <a href="#other" className="test-sidebar-item">Other Tests</a>
        </nav>
      </aside>

      <main className="test-main">
        <div className="test-header">
          <h1 className="test-title">{data.name}</h1>
          <p className="test-subtitle">{data.description}</p>
          <div className="test-price-section">
            <span className="test-price">{data.price}</span>
            <span className="test-original-price">{data.originalPrice}</span>
            <span className="test-discount">{data.discount}</span>
          </div>
        </div>

        <section className="test-preparation">
          <h2 className="test-section-title">Test Preparation</h2>
          <ul className="test-preparation-list">
            {data.preparation.map((item, index) => (
              <li key={index} className="test-preparation-item">
                <FaInfoCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="test-understanding">
          <h2 className="test-section-title">{data.understanding.title}</h2>
          <h3 className="test-section-title">{data.understanding.what}</h3>
          <p className="test-subtitle">{data.understanding.description}</p>
        </section>
      </main>

      <aside className="test-right-panel">
        <div className="test-lab-info">
          <img src={data.lab.logo} alt={data.lab.name} className="test-lab-logo" />
          <div>
            <div className="test-lab-name">{data.lab.name}</div>
            <a href="#know-more" className="test-lab-link">Know more</a>
          </div>
        </div>

        <button className="test-book-button">BOOK NOW</button>

        <div className="test-related">
          <h3 className="test-section-title">Frequently Booked Together</h3>
          <div className="test-related-list">
            {data.relatedTests.map((test, index) => (
              <a key={index} href={`#${test.name}`} className="test-related-item">
                <div className="test-related-info">
                  <div className="test-related-name">{test.name}</div>
                  <div className="test-related-desc">{test.description}</div>
                </div>
                <FaChevronRight />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Test;
