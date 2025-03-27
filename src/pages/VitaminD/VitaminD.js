import React from 'react';
import './VitaminD.css';
import { FaInfoCircle, FaChevronRight } from 'react-icons/fa';
import TataLogo from '../../assets/tata.png';

const VitaminD = () => {
  const data = {
    name: 'Vitamin D Test',
    description: 'Also known as 25-hydroxy vitamin D test, Calcidiol 25-hydroxycholecalciferol test, 25-OH vitamin D test',
    price: '₹549',
    originalPrice: '₹850',
    discount: '35% off',
    preparation: [
      'Fasting is not required for this test',
      'Continue your regular medications',
      'Inform the lab about any supplements you are taking',
      'No other specific preparation is needed'
    ],
    understanding: {
      title: 'Understanding Vitamin D Test',
      what: 'What is a Vitamin D Test?',
      description: 'A Vitamin D test measures the level of vitamin D in your blood. This test is important because vitamin D plays a crucial role in bone health, immune system function, and overall well-being. The test specifically measures 25-hydroxyvitamin D, which is the best indicator of your vitamin D status.'
    },
    lab: {
      name: 'Tata 1mg Labs (Tata 1mg Technologies Private Limited)',
      logo: TataLogo
    },
    relatedTests: [
      {
        name: 'Calcium Test',
        description: 'Serum Calcium, Ca test, Total Calcium test'
      },
      {
        name: 'Vitamin B12 Test',
        description: 'Cobalamin test, B12 assessment, Methylcobalamin test'
      },
      {
        name: 'Thyroid Profile (T3, T4 & TSH)',
        description: 'Thyroid Function Test, Complete Thyroid Profile'
      }
    ]
  };

  return (
    <div className="vd-container">
      <aside className="vd-sidebar">
        <nav className="vd-sidebar-menu">
          <a href="#detail" className="vd-sidebar-item active">Test Detail</a>
          <a href="#understanding" className="vd-sidebar-item">Understanding the Test</a>
          <a href="#measures" className="vd-sidebar-item">Test Measures</a>
          <a href="#results" className="vd-sidebar-item">Interpreting Results</a>
          <a href="#faq" className="vd-sidebar-item">FAQ's</a>
          <a href="#price" className="vd-sidebar-item">City Price Info</a>
          <a href="#collection" className="vd-sidebar-item">Home Collection</a>
          <a href="#references" className="vd-sidebar-item">References</a>
          <a href="#other" className="vd-sidebar-item">Other Tests</a>
        </nav>
      </aside>

      <main className="vd-main">
        <div className="vd-header">
          <h1 className="vd-title">{data.name}</h1>
          <p className="vd-subtitle">{data.description}</p>
          <div className="vd-price-section">
            <span className="vd-price">{data.price}</span>
            <span className="vd-original-price">{data.originalPrice}</span>
            <span className="vd-discount">{data.discount}</span>
          </div>
        </div>

        <section className="vd-preparation">
          <h2 className="vd-section-title">Test Preparation</h2>
          <ul className="vd-preparation-list">
            {data.preparation.map((item, index) => (
              <li key={index} className="vd-preparation-item">
                <FaInfoCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="vd-understanding">
          <h2 className="vd-section-title">{data.understanding.title}</h2>
          <h3 className="vd-section-subtitle">{data.understanding.what}</h3>
          <p className="vd-text">{data.understanding.description}</p>
        </section>
      </main>

      <aside className="vd-right-panel">
        <div className="vd-lab-info">
          <img src={data.lab.logo} alt={data.lab.name} className="vd-lab-logo" />
          <div>
            <div className="vd-lab-name">{data.lab.name}</div>
            <a href="#know-more" className="vd-lab-link">Know more</a>
          </div>
        </div>

        <button className="vd-book-button">BOOK NOW</button>

        <div className="vd-related">
          <h3 className="vd-section-title">Frequently Booked Together</h3>
          <div className="vd-related-list">
            {data.relatedTests.map((test, index) => (
              <a key={index} href={`#${test.name}`} className="vd-related-item">
                <div className="vd-related-info">
                  <div className="vd-related-name">{test.name}</div>
                  <div className="vd-related-desc">{test.description}</div>
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

export default VitaminD;
