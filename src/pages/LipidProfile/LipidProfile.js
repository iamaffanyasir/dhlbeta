import React from 'react';
import './LipidProfile.css';
import { FaInfoCircle, FaChevronRight } from 'react-icons/fa';
import TataLogo from '../../assets/tata.png';

const LipidProfile = () => {
  const data = {
    name: 'Lipid Profile Test',
    description: 'Also known as Lipid Panel, Cholesterol Test, Complete Cholesterol Test, or Lipid Test',
    price: '₹399',
    originalPrice: '₹599',
    discount: '33% off',
    preparation: [
      '8-12 hours fasting required',
      'Water can be taken during fasting',
      'Continue prescribed medications unless advised otherwise',
      'Avoid fatty foods for 24 hours before the test',
      'Inform the lab about any medications you are taking'
    ],
    understanding: {
      title: 'Understanding Lipid Profile Test',
      what: 'What is a Lipid Profile Test?',
      description: 'A Lipid Profile Test is a blood test that measures the levels of different types of fats (lipids) in your blood. It includes measurements of total cholesterol, HDL (good) cholesterol, LDL (bad) cholesterol, and triglycerides. This test helps assess your risk of heart disease and other cardiovascular conditions.'
    },
    lab: {
      name: 'Tata 1mg Labs (Tata 1mg Technologies Private Limited)',
      logo: TataLogo
    },
    relatedTests: [
      {
        name: 'Complete Blood Count (CBC)',
        description: 'Full blood count, Complete blood picture, Hemogram'
      },
      {
        name: 'Blood Pressure Test',
        description: 'BP Test, Hypertension Screening'
      },
      {
        name: 'Heart Health Package',
        description: 'Cardiac Risk Assessment, Heart Checkup'
      }
    ]
  };

  return (
    <div className="lp-container">
      <aside className="lp-sidebar">
        <nav className="lp-sidebar-menu">
          <a href="#detail" className="lp-sidebar-item active">Test Detail</a>
          <a href="#understanding" className="lp-sidebar-item">Understanding the Test</a>
          <a href="#measures" className="lp-sidebar-item">Test Measures</a>
          <a href="#results" className="lp-sidebar-item">Interpreting Results</a>
          <a href="#faq" className="lp-sidebar-item">FAQ's</a>
          <a href="#price" className="lp-sidebar-item">City Price Info</a>
          <a href="#collection" className="lp-sidebar-item">Home Collection</a>
          <a href="#references" className="lp-sidebar-item">References</a>
          <a href="#other" className="lp-sidebar-item">Other Tests</a>
        </nav>
      </aside>

      <main className="lp-main">
        <div className="lp-header">
          <h1 className="lp-title">{data.name}</h1>
          <p className="lp-subtitle">{data.description}</p>
          <div className="lp-price-section">
            <span className="lp-price">{data.price}</span>
            <span className="lp-original-price">{data.originalPrice}</span>
            <span className="lp-discount">{data.discount}</span>
          </div>
        </div>

        <section className="lp-preparation">
          <h2 className="lp-section-title">Test Preparation</h2>
          <ul className="lp-preparation-list">
            {data.preparation.map((item, index) => (
              <li key={index} className="lp-preparation-item">
                <FaInfoCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="lp-understanding">
          <h2 className="lp-section-title">{data.understanding.title}</h2>
          <h3 className="lp-section-subtitle">{data.understanding.what}</h3>
          <p className="lp-text">{data.understanding.description}</p>
        </section>
      </main>

      <aside className="lp-right-panel">
        <div className="lp-lab-info">
          <img src={data.lab.logo} alt={data.lab.name} className="lp-lab-logo" />
          <div>
            <div className="lp-lab-name">{data.lab.name}</div>
            <a href="#know-more" className="lp-lab-link">Know more</a>
          </div>
        </div>

        <button className="lp-book-button">BOOK NOW</button>

        <div className="lp-related">
          <h3 className="lp-section-title">Frequently Booked Together</h3>
          <div className="lp-related-list">
            {data.relatedTests.map((test, index) => (
              <a key={index} href={`#${test.name}`} className="lp-related-item">
                <div className="lp-related-info">
                  <div className="lp-related-name">{test.name}</div>
                  <div className="lp-related-desc">{test.description}</div>
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

export default LipidProfile;
