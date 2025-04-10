import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import './MobileFooter.css';

const MobileFooter = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:1234567890';
  };

  return (
    <footer className="mobile-footer">
      <div className="mobile-footer__contact">
        <div className="mobile-footer__contact-item">
          <FaPhone className="mobile-footer__icon" />
          <div className="mobile-footer__contact-content">
            <span className="mobile-footer__label">Call Us</span>
            <a href="tel:1234567890" className="mobile-footer__value">123-456-7890</a>
          </div>
        </div>
        <div className="mobile-footer__contact-item">
          <FaWhatsapp className="mobile-footer__icon" />
          <div className="mobile-footer__contact-content">
            <span className="mobile-footer__label">WhatsApp</span>
            <button onClick={handleWhatsAppClick} className="mobile-footer__value">Chat Now</button>
          </div>
        </div>
      </div>

      <div className="mobile-footer__info">
        <div className="mobile-footer__info-item">
          <FaMapMarkerAlt className="mobile-footer__icon" />
          <p>123 Healthcare Street, Mumbai, Maharashtra 400001</p>
        </div>
        <div className="mobile-footer__info-item">
          <FaClock className="mobile-footer__icon" />
          <p>Open 24/7 for sample collection</p>
        </div>
        <div className="mobile-footer__info-item">
          <FaEnvelope className="mobile-footer__icon" />
          <a href="mailto:info@example.com">info@example.com</a>
        </div>
      </div>

      <nav className="mobile-footer__nav">
        <Link to="/about" className="mobile-footer__link">About Us</Link>
        <Link to="/privacy" className="mobile-footer__link">Privacy Policy</Link>
        <Link to="/terms" className="mobile-footer__link">Terms & Conditions</Link>
        <Link to="/refund" className="mobile-footer__link">Refund Policy</Link>
      </nav>

      <div className="mobile-footer__bottom">
        <p className="mobile-footer__copyright">
          © {new Date().getFullYear()} DHL Labs. All rights reserved.
        </p>
        <p className="mobile-footer__nabl">
          NABL Accredited Laboratory
        </p>
      </div>
    </footer>
  );
};

export default MobileFooter;
