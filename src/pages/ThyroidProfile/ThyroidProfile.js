import React from 'react';
import './ThyroidProfile.css';
import { FaInfoCircle, FaChevronRight } from 'react-icons/fa';
import TataLogo from '../../assets/tata.png';

const ThyroidProfile = () => {
  const data = {
    name: 'Thyroid Profile (T3, T4 & TSH)',
    description: 'Also known as Thyroid Function Test, TFT, Thyroid Panel. Includes Total T3, Total T4, and Thyroid Stimulating Hormone (TSH)',
    price: '₹399',
    originalPrice: '₹599',
    discount: '33% off',
    preparation: [
      'Fasting for 8-10 hours is required',
      'Water can be taken during the fasting period',
      'Take your regular medications unless advised otherwise',
      'Inform the lab about any thyroid medications you are taking'
    ],
    understanding: {
      title: 'Understanding Thyroid Profile Test',
      what: 'What is a Thyroid Profile Test?',
      description: 'The Thyroid Profile test measures the levels of thyroid hormones in your blood. It includes three main tests: T3 (triiodothyronine), T4 (thyroxine), and TSH (thyroid stimulating hormone). These hormones are crucial for regulating metabolism, growth, and development in the body.'
    },
    lab: {
      name: 'Tata 1mg Labs (Tata 1mg Technologies Private Limited)',
      logo: TataLogo
    },
    relatedTests: [
      {
        name: 'Vitamin D Test',
        description: '25-OH Vitamin D, 25-hydroxyvitamin D test, Vitamin D3'
      },
      {
        name: 'Vitamin B12 Test',
        description: 'Cobalamin test, B12 assessment, Methylcobalamin test'
      },
      {
        name: 'Complete Blood Count (CBC)',
        description: 'Full blood count, Complete blood picture, Hemogram'
      }
    ]
  };

  return (
    <div className="tp-container">
      <aside className="tp-sidebar">
        <nav className="tp-sidebar-menu">
          <a href="#detail" className="tp-sidebar-item active">Test Detail</a>
          <a href="#understanding" className="tp-sidebar-item">Understanding the Test</a>
          <a href="#measures" className="tp-sidebar-item">Test Measures</a>
          <a href="#results" className="tp-sidebar-item">Interpreting Results</a>
          <a href="#faq" className="tp-sidebar-item">FAQ's</a>
          <a href="#price" className="tp-sidebar-item">City Price Info</a>
          <a href="#collection" className="tp-sidebar-item">Home Collection</a>
          <a href="#references" className="tp-sidebar-item">References</a>
          <a href="#other" className="tp-sidebar-item">Other Tests</a>
        </nav>
      </aside>

      <main className="tp-main">
        <div className="tp-header">
          <h1 className="tp-title">{data.name}</h1>
          <p className="tp-subtitle">{data.description}</p>
          <div className="tp-price-section">
            <span className="tp-price">{data.price}</span>
            <span className="tp-original-price">{data.originalPrice}</span>
            <span className="tp-discount">{data.discount}</span>
          </div>
        </div>

        <section className="tp-preparation">
          <h2 className="tp-section-title">Test Preparation</h2>
          <ul className="tp-preparation-list">
            {data.preparation.map((item, index) => (
              <li key={index} className="tp-preparation-item">
                <FaInfoCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="tp-understanding">
          <h2 className="tp-section-title">{data.understanding.title}</h2>
          <h3 className="tp-section-subtitle">{data.understanding.what}</h3>
          <p className="tp-text">{data.understanding.description}</p>
        </section>
      </main>

      <aside className="tp-right-panel">
        <div className="tp-lab-info">
          <img src={data.lab.logo} alt={data.lab.name} className="tp-lab-logo" />
          <div>
            <div className="tp-lab-name">{data.lab.name}</div>
            <a href="#know-more" className="tp-lab-link">Know more</a>
          </div>
        </div>

        <button className="tp-book-button">BOOK NOW</button>

        <div className="tp-related">
          <h3 className="tp-section-title">Frequently Booked Together</h3>
          <div className="tp-related-list">
            {data.relatedTests.map((test, index) => (
              <a key={index} href={`#${test.name}`} className="tp-related-item">
                <div className="tp-related-info">
                  <div className="tp-related-name">{test.name}</div>
                  <div className="tp-related-desc">{test.description}</div>
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

export default ThyroidProfile;
