import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaClock, 
  FaHospital, 
  FaFlask, 
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaInfoCircle,
  FaClipboardCheck,
  FaUserMd
} from 'react-icons/fa';
import './MobileTestDetail.css';
import { tests } from '../../../data/tests';

const MobileTestDetail = () => {
  const navigate = useNavigate();
  const { testId } = useParams();
  const [activeFaq, setActiveFaq] = useState(null);

  // Find the test from the tests data
  const test = tests.find(t => t.id === testId);

  if (!test) {
    return <div>Test not found</div>;
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="mobile-test">
      <div className="mobile-test__header">
        <div className="mobile-test__back" onClick={() => navigate(-1)}>
          <FaArrowLeft />
          <span>Back to Tests</span>
        </div>
        <h1 className="mobile-test__title">{test.name}</h1>
        <div className="mobile-test__meta">
          <span className="mobile-test__meta-item">
            <FaClock />
            {test.duration}
          </span>
          <span className="mobile-test__meta-item">
            <FaHospital />
            {test.labType}
          </span>
          <span className="mobile-test__meta-item">
            <FaFlask />
            {test.category}
          </span>
        </div>
        <div className="mobile-test__price">₹{test.price}</div>
      </div>

      <div className="mobile-test__content">
        <div className="mobile-test__section">
          <h2 className="mobile-test__section-title">
            <FaInfoCircle />
            About the Test
          </h2>
          <p className="mobile-test__description">{test.description}</p>
        </div>

        <div className="mobile-test__section">
          <h2 className="mobile-test__section-title">
            <FaClipboardCheck />
            Test Preparation
          </h2>
          <ul className="mobile-test__list">
            {test.preparation.map((prep, index) => (
              <li key={index} className="mobile-test__list-item">
                <FaCheckCircle className="mobile-test__list-icon" />
                <span>{prep}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-test__section">
          <h2 className="mobile-test__section-title">
            <FaUserMd />
            Why Take This Test?
          </h2>
          <ul className="mobile-test__list">
            {test.benefits.map((benefit, index) => (
              <li key={index} className="mobile-test__list-item">
                <FaCheckCircle className="mobile-test__list-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mobile-test__faq">
            {test.faqs.map((faq, index) => (
              <div key={index} className="mobile-test__faq-item">
                <div 
                  className="mobile-test__faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {activeFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <div className={`mobile-test__faq-answer ${activeFaq === index ? 'active' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mobile-test__footer">
        <button className="mobile-test__button mobile-test__button--secondary">
          Add to Cart
        </button>
        <button className="mobile-test__button mobile-test__button--primary">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MobileTestDetail;
