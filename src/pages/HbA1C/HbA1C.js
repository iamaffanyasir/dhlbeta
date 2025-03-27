import React from 'react';
import './HbA1C.css';
import { FaInfoCircle, FaChevronRight } from 'react-icons/fa';
import TataLogo from '../../assets/tata.png';

const HbA1C = () => {
  const data = {
    name: 'HbA1C Test',
    description: 'Also known as Glycated Hemoglobin Test, Hemoglobin A1c, Glycohemoglobin test, or A1C',
    price: '₹449',
    originalPrice: '₹699',
    discount: '36% off',
    preparation: [
      'Fasting is not required for this test',
      'Continue your regular medications',
      'Inform the lab about any diabetes medications you are taking',
      'Bring your previous diabetes-related test reports if available'
    ],
    understanding: {
      title: 'Understanding HbA1C Test',
      what: 'What is an HbA1C Test?',
      description: 'The HbA1C test measures your average blood sugar levels over the past 2-3 months. It\'s used to diagnose diabetes and prediabetes, and to monitor how well diabetes is being controlled. This test measures the percentage of blood sugar attached to hemoglobin, the protein in red blood cells that carries oxygen.'
    },
    lab: {
      name: 'Tata 1mg Labs (Tata 1mg Technologies Private Limited)',
      logo: TataLogo
    },
    relatedTests: [
      {
        name: 'Fasting Blood Sugar (FBS)',
        description: 'Fasting Plasma Glucose test, Blood Glucose Fasting'
      },
      {
        name: 'Complete Blood Count (CBC)',
        description: 'Full blood count, Complete blood picture, Hemogram'
      },
      {
        name: 'Diabetes Panel Basic',
        description: 'Includes FBS, PP, HbA1C, and Urine Routine'
      }
    ]
  };

  return (
    <div className="hb-container">
      <aside className="hb-sidebar">
        <nav className="hb-sidebar-menu">
          <a href="#detail" className="hb-sidebar-item active">Test Detail</a>
          <a href="#understanding" className="hb-sidebar-item">Understanding the Test</a>
          <a href="#measures" className="hb-sidebar-item">Test Measures</a>
          <a href="#results" className="hb-sidebar-item">Interpreting Results</a>
          <a href="#faq" className="hb-sidebar-item">FAQ's</a>
          <a href="#price" className="hb-sidebar-item">City Price Info</a>
          <a href="#collection" className="hb-sidebar-item">Home Collection</a>
          <a href="#references" className="hb-sidebar-item">References</a>
          <a href="#other" className="hb-sidebar-item">Other Tests</a>
        </nav>
      </aside>

      <main className="hb-main">
        <div className="hb-header">
          <h1 className="hb-title">{data.name}</h1>
          <p className="hb-subtitle">{data.description}</p>
          <div className="hb-price-section">
            <span className="hb-price">{data.price}</span>
            <span className="hb-original-price">{data.originalPrice}</span>
            <span className="hb-discount">{data.discount}</span>
          </div>
        </div>

        <section className="hb-preparation">
          <h2 className="hb-section-title">Test Preparation</h2>
          <ul className="hb-preparation-list">
            {data.preparation.map((item, index) => (
              <li key={index} className="hb-preparation-item">
                <FaInfoCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="hb-understanding">
          <h2 className="hb-section-title">{data.understanding.title}</h2>
          <h3 className="hb-section-subtitle">{data.understanding.what}</h3>
          <p className="hb-text">{data.understanding.description}</p>
        </section>
      </main>

      <aside className="hb-right-panel">
        <div className="hb-lab-info">
          <img src={data.lab.logo} alt={data.lab.name} className="hb-lab-logo" />
          <div>
            <div className="hb-lab-name">{data.lab.name}</div>
            <a href="#know-more" className="hb-lab-link">Know more</a>
          </div>
        </div>

        <button className="hb-book-button">BOOK NOW</button>

        <div className="hb-related">
          <h3 className="hb-section-title">Frequently Booked Together</h3>
          <div className="hb-related-list">
            {data.relatedTests.map((test, index) => (
              <a key={index} href={`#${test.name}`} className="hb-related-item">
                <div className="hb-related-info">
                  <div className="hb-related-name">{test.name}</div>
                  <div className="hb-related-desc">{test.description}</div>
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

export default HbA1C;
