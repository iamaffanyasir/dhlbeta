import React from 'react';
import './CovidTest.css';
import { FaInfoCircle, FaChevronRight } from 'react-icons/fa';
import TataLogo from '../../assets/tata.png';

const CovidTest = () => {
  const data = {
    name: 'COVID-19 RT-PCR Test',
    description: 'Also known as SARS-CoV-2 RT-PCR test, Coronavirus PCR test, or COVID-19 molecular test',
    price: '₹299',
    originalPrice: '₹499',
    discount: '40% off',
    preparation: [
      'No fasting required',
      'Wear a mask during sample collection',
      'Avoid eating, drinking, or smoking 30 minutes before the test',
      'Bring valid ID proof',
      'Report any symptoms to the collection staff'
    ],
    understanding: {
      title: 'Understanding COVID-19 RT-PCR Test',
      what: 'What is a COVID-19 RT-PCR Test?',
      description: 'The COVID-19 RT-PCR (Real-Time Polymerase Chain Reaction) test is a molecular test that detects genetic material of the SARS-CoV-2 virus. It is considered the gold standard for COVID-19 diagnosis due to its high accuracy. The test involves collecting a nasal or throat swab sample.'
    },
    lab: {
      name: 'Tata 1mg Labs (Tata 1mg Technologies Private Limited)',
      logo: TataLogo
    },
    relatedTests: [
      {
        name: 'COVID-19 Antibody Test',
        description: 'IgG Antibody Test, Post-COVID Immunity Check'
      },
      {
        name: 'Complete Blood Count (CBC)',
        description: 'Full blood count, Complete blood picture'
      },
      {
        name: 'COVID Home Care Package',
        description: 'Essential tests for COVID recovery monitoring'
      }
    ]
  };

  return (
    <div className="cv-container">
      <aside className="cv-sidebar">
        <nav className="cv-sidebar-menu">
          <a href="#detail" className="cv-sidebar-item active">Test Detail</a>
          <a href="#understanding" className="cv-sidebar-item">Understanding the Test</a>
          <a href="#measures" className="cv-sidebar-item">Test Measures</a>
          <a href="#results" className="cv-sidebar-item">Interpreting Results</a>
          <a href="#faq" className="cv-sidebar-item">FAQ's</a>
          <a href="#price" className="cv-sidebar-item">City Price Info</a>
          <a href="#collection" className="cv-sidebar-item">Home Collection</a>
          <a href="#references" className="cv-sidebar-item">References</a>
          <a href="#other" className="cv-sidebar-item">Other Tests</a>
        </nav>
      </aside>

      <main className="cv-main">
        <div className="cv-header">
          <h1 className="cv-title">{data.name}</h1>
          <p className="cv-subtitle">{data.description}</p>
          <div className="cv-price-section">
            <span className="cv-price">{data.price}</span>
            <span className="cv-original-price">{data.originalPrice}</span>
            <span className="cv-discount">{data.discount}</span>
          </div>
        </div>

        <section className="cv-preparation">
          <h2 className="cv-section-title">Test Preparation</h2>
          <ul className="cv-preparation-list">
            {data.preparation.map((item, index) => (
              <li key={index} className="cv-preparation-item">
                <FaInfoCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-understanding">
          <h2 className="cv-section-title">{data.understanding.title}</h2>
          <h3 className="cv-section-subtitle">{data.understanding.what}</h3>
          <p className="cv-text">{data.understanding.description}</p>
        </section>
      </main>

      <aside className="cv-right-panel">
        <div className="cv-lab-info">
          <img src={data.lab.logo} alt={data.lab.name} className="cv-lab-logo" />
          <div>
            <div className="cv-lab-name">{data.lab.name}</div>
            <a href="#know-more" className="cv-lab-link">Know more</a>
          </div>
        </div>

        <button className="cv-book-button">BOOK NOW</button>

        <div className="cv-related">
          <h3 className="cv-section-title">Frequently Booked Together</h3>
          <div className="cv-related-list">
            {data.relatedTests.map((test, index) => (
              <a key={index} href={`#${test.name}`} className="cv-related-item">
                <div className="cv-related-info">
                  <div className="cv-related-name">{test.name}</div>
                  <div className="cv-related-desc">{test.description}</div>
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

export default CovidTest;
