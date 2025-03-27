import React from 'react';
import './KidneyFunction.css';
import { FaInfoCircle, FaChevronRight } from 'react-icons/fa';
import TataLogo from '../../assets/tata.png';

const KidneyFunction = () => {
  const data = {
    name: 'Kidney Function Test (KFT)',
    description: 'Also known as Renal Function Test, Kidney Profile, or Basic Metabolic Panel',
    price: '₹499',
    originalPrice: '₹799',
    discount: '38% off',
    preparation: [
      '8-12 hours fasting required',
      'Water can be taken during fasting',
      'Continue prescribed medications unless advised otherwise',
      'Avoid heavy exercise 24 hours before the test',
      'Inform the lab about any medications you are taking'
    ],
    understanding: {
      title: 'Understanding Kidney Function Test',
      what: 'What is a Kidney Function Test?',
      description: 'A Kidney Function Test (KFT) is a group of blood tests that measure different substances in your blood to check how well your kidneys are working. The test measures levels of waste products, minerals, proteins, and other substances that are filtered by your kidneys.'
    },
    lab: {
      name: 'Tata 1mg Labs (Tata 1mg Technologies Private Limited)',
      logo: TataLogo
    },
    relatedTests: [
      {
        name: 'Complete Blood Count (CBC)',
        description: 'Full blood count, Complete blood picture'
      },
      {
        name: 'Urine Routine Test',
        description: 'Urinalysis, Urine R/M'
      },
      {
        name: 'Comprehensive Health Package',
        description: 'Full body checkup with kidney health focus'
      }
    ]
  };

  return (
    <div className="kft-container">
      <aside className="kft-sidebar">
        <nav className="kft-sidebar-menu">
          <a href="#detail" className="kft-sidebar-item active">Test Detail</a>
          <a href="#understanding" className="kft-sidebar-item">Understanding the Test</a>
          <a href="#measures" className="kft-sidebar-item">Test Measures</a>
          <a href="#results" className="kft-sidebar-item">Interpreting Results</a>
          <a href="#faq" className="kft-sidebar-item">FAQ's</a>
          <a href="#price" className="kft-sidebar-item">City Price Info</a>
          <a href="#collection" className="kft-sidebar-item">Home Collection</a>
          <a href="#references" className="kft-sidebar-item">References</a>
          <a href="#other" className="kft-sidebar-item">Other Tests</a>
        </nav>
      </aside>

      <main className="kft-main">
        <div className="kft-header">
          <h1 className="kft-title">{data.name}</h1>
          <p className="kft-subtitle">{data.description}</p>
          <div className="kft-price-section">
            <span className="kft-price">{data.price}</span>
            <span className="kft-original-price">{data.originalPrice}</span>
            <span className="kft-discount">{data.discount}</span>
          </div>
        </div>

        <section className="kft-preparation">
          <h2 className="kft-section-title">Test Preparation</h2>
          <ul className="kft-preparation-list">
            {data.preparation.map((item, index) => (
              <li key={index} className="kft-preparation-item">
                <FaInfoCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="kft-understanding">
          <h2 className="kft-section-title">{data.understanding.title}</h2>
          <h3 className="kft-section-subtitle">{data.understanding.what}</h3>
          <p className="kft-text">{data.understanding.description}</p>
        </section>
      </main>

      <aside className="kft-right-panel">
        <div className="kft-lab-info">
          <img src={data.lab.logo} alt={data.lab.name} className="kft-lab-logo" />
          <div>
            <div className="kft-lab-name">{data.lab.name}</div>
            <a href="#know-more" className="kft-lab-link">Know more</a>
          </div>
        </div>

        <button className="kft-book-button">BOOK NOW</button>

        <div className="kft-related">
          <h3 className="kft-section-title">Frequently Booked Together</h3>
          <div className="kft-related-list">
            {data.relatedTests.map((test, index) => (
              <a key={index} href={`#${test.name}`} className="kft-related-item">
                <div className="kft-related-info">
                  <div className="kft-related-name">{test.name}</div>
                  <div className="kft-related-desc">{test.description}</div>
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

export default KidneyFunction;
