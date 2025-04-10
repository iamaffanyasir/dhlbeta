import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaWhatsapp, 
  FaPhone, 
  FaClock, 
  FaFlask, 
  FaUserMd,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaInfoCircle
} from 'react-icons/fa';
import { tests } from '../../../data/tests';
import './TestDetails.css';

const TestDetails = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const test = tests.find(t => t.id === testId);

  if (!test) {
    return <div className="mobile-test__not-found">Test not found</div>;
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '919664064439';
    const message = `Hello, I would like to book the ${test.name} test.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:919664064439';
  };

  const handleBookNow = () => {
    // Add to cart or proceed to booking
    console.log('Booking test:', test.name);
  };

  return (
    <div className="mobile-test">
      <div className="mobile-test__header">
        <button className="mobile-test__back" onClick={() => navigate(-1)}>
          <FaArrowLeft />
          <span>Back</span>
        </button>
        <h1 className="mobile-test__title">{test.name}</h1>
      </div>

      <div className="mobile-test__content">
        <div className="mobile-test__meta">
          <div className="mobile-test__meta-item">
            <FaClock />
            <span>{test.reportTime || 'Same Day Report'}</span>
          </div>
          <div className="mobile-test__meta-item">
            <FaFlask />
            <span>{test.sampleType || 'Blood Sample'}</span>
          </div>
          <div className="mobile-test__meta-item">
            <FaUserMd />
            <span>{test.testingMethod || 'Pathology'}</span>
          </div>
        </div>

        <div className="mobile-test__section">
          <h2 className="mobile-test__section-title">
            <FaInfoCircle />
            <span>About the Test</span>
          </h2>
          <p className="mobile-test__description">{test.description}</p>
          
          {test.preparationSteps && test.preparationSteps.length > 0 && (
            <div className="mobile-test__parameters">
              <h3>Test Preparation</h3>
              <ul className="mobile-test__list">
                {test.preparationSteps.map((step, index) => (
                  <li key={index} className="mobile-test__list-item">
                    <FaCheckCircle />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {test.benefits && test.benefits.length > 0 && (
          <div className="mobile-test__section">
            <h2 className="mobile-test__section-title">
              <FaUserMd />
              <span>Why Take This Test?</span>
            </h2>
            <ul className="mobile-test__list">
              {test.benefits.map((benefit, index) => (
                <li key={index} className="mobile-test__list-item">
                  <FaCheckCircle />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {test.faqs && test.faqs.length > 0 && (
          <div className="mobile-test__section">
            <h2 className="mobile-test__section-title">
              <FaInfoCircle />
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="mobile-test__faq">
              {test.faqs.map((faq, index) => (
                <div key={index} className="mobile-test__faq-item">
                  <button 
                    className="mobile-test__faq-question"
                    onClick={() => toggleFaq(index)}
                    type="button"
                  >
                    <span>{faq.question}</span>
                    {activeFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {activeFaq === index && (
                    <div className="mobile-test__faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mobile-test__footer">
        <div className="mobile-test__price">
          <span className="mobile-test__price-current">₹{test.price}</span>
          {test.originalPrice && (
            <span className="mobile-test__price-original">₹{test.originalPrice}</span>
          )}
        </div>
        <div className="mobile-test__actions">
          <button 
            className="mobile-test__action mobile-test__action--whatsapp"
            type="button"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp />
            <span>Chat</span>
          </button>
          <button 
            className="mobile-test__action mobile-test__action--call"
            type="button"
            onClick={handleCallClick}
          >
            <FaPhone />
            <span>Call</span>
          </button>
          <button 
            className="mobile-test__action mobile-test__action--book"
            type="button"
            onClick={handleBookNow}
          >
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestDetails;
