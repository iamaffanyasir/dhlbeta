import React from 'react';
import './LiverFunction.css';
import { FaInfoCircle, FaChevronRight } from 'react-icons/fa';
import TataLogo from '../../assets/tata.png';

const LiverFunction = () => {
  const data = {
    name: 'Liver Function Test (LFT)',
    description: 'Also known as Liver Panel, Hepatic Function Panel, Liver Profile, or Liver Chemistry Tests',
    price: '₹599',
    originalPrice: '₹899',
    discount: '33% off',
    preparation: [
      '8-10 hours fasting required',
      'Water can be taken during fasting',
      'Continue prescribed medications unless advised otherwise',
      'Avoid alcohol for at least 24 hours before the test',
      'Inform the lab about any medications you are taking'
    ],
    understanding: {
      title: 'Understanding Liver Function Test',
      what: 'What is a Liver Function Test?',
      description: 'A Liver Function Test (LFT) is a blood test that measures various chemicals in your blood to check how well your liver is working. It can help identify liver damage or disease. The test measures levels of proteins, enzymes, and bilirubin in your blood.'
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
        name: 'Kidney Function Test (KFT)',
        description: 'Renal Function Test, Kidney Profile'
      },
      {
        name: 'Hepatitis Panel',
        description: 'Viral Hepatitis Test, Hepatitis Screening'
      }
    ]
  };

  return (
    <div className="lft-container">
      <aside className="lft-sidebar">
        <nav className="lft-sidebar-menu">
          <a href="#detail" className="lft-sidebar-item active">Test Detail</a>
          <a href="#understanding" className="lft-sidebar-item">Understanding the Test</a>
          <a href="#measures" className="lft-sidebar-item">Test Measures</a>
          <a href="#results" className="lft-sidebar-item">Interpreting Results</a>
          <a href="#faq" className="lft-sidebar-item">FAQ's</a>
          <a href="#price" className="lft-sidebar-item">City Price Info</a>
          <a href="#collection" className="lft-sidebar-item">Home Collection</a>
          <a href="#references" className="lft-sidebar-item">References</a>
          <a href="#other" className="lft-sidebar-item">Other Tests</a>
        </nav>
      </aside>

      <main className="lft-main">
        <div className="lft-header">
          <h1 className="lft-title">{data.name}</h1>
          <p className="lft-subtitle">{data.description}</p>
          <div className="lft-price-section">
            <span className="lft-price">{data.price}</span>
            <span className="lft-original-price">{data.originalPrice}</span>
            <span className="lft-discount">{data.discount}</span>
          </div>
        </div>

        <section className="lft-preparation">
          <h2 className="lft-section-title">Test Preparation</h2>
          <ul className="lft-preparation-list">
            {data.preparation.map((item, index) => (
              <li key={index} className="lft-preparation-item">
                <FaInfoCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="lft-understanding">
          <h2 className="lft-section-title">{data.understanding.title}</h2>
          <h3 className="lft-section-subtitle">{data.understanding.what}</h3>
          <p className="lft-text">{data.understanding.description}</p>
        </section>
      </main>

      <aside className="lft-right-panel">
        <div className="lft-lab-info">
          <img src={data.lab.logo} alt={data.lab.name} className="lft-lab-logo" />
          <div>
            <div className="lft-lab-name">{data.lab.name}</div>
            <a href="#know-more" className="lft-lab-link">Know more</a>
          </div>
        </div>

        <button className="lft-book-button">BOOK NOW</button>

        <div className="lft-related">
          <h3 className="lft-section-title">Frequently Booked Together</h3>
          <div className="lft-related-list">
            {data.relatedTests.map((test, index) => (
              <a key={index} href={`#${test.name}`} className="lft-related-item">
                <div className="lft-related-info">
                  <div className="lft-related-name">{test.name}</div>
                  <div className="lft-related-desc">{test.description}</div>
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

export default LiverFunction;
