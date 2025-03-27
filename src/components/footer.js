import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="ft-container">
      <div className="ft-content">
        <div className="ft-main">
          <div className="ft-about">
            <div className="ft-logo">
              <img src={Logo} alt="DHL" />
            </div>
            <p className="ft-description">
              DHL is your trusted healthcare partner, providing comprehensive diagnostic services and medical tests with accuracy and care. Our commitment is to make healthcare accessible and convenient for everyone.
            </p>
            <div className="ft-social">
              <a href="https://facebook.com" className="ft-social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="ft-social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="ft-social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="ft-social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="ft-section">
            <h3 className="ft-title">Quick Links</h3>
            <div className="ft-links">
              <a href="/about" className="ft-link">About Us</a>
              <a href="/packages" className="ft-link">Our Packages</a>
              <a href="/labs" className="ft-link">Lab Network</a>
              <a href="/careers" className="ft-link">Careers</a>
              <a href="/blog" className="ft-link">Blog</a>
            </div>
          </div>

          <div className="ft-section">
            <h3 className="ft-title">Our Services</h3>
            <div className="ft-links">
              <a href="/tests" className="ft-link">Health Tests</a>
              <a href="/packages" className="ft-link">Health Packages</a>
              <a href="/corporate" className="ft-link">Corporate Health</a>
              <a href="/wellness" className="ft-link">Wellness Programs</a>
              <a href="/consultation" className="ft-link">Online Consultation</a>
            </div>
          </div>

          <div className="ft-section">
            <h3 className="ft-title">Contact Us</h3>
            <div className="ft-links">
              <h4>Main Address</h4>
              <div className="ft-contact-item">
                <FaMapMarkerAlt />
                <span>123 Healthcare Avenue, Sector 18, Noida, Uttar Pradesh, India 201301</span>
              </div>
              <h4>Branch Address</h4>
              <div className="ft-contact-item">
                <FaMapMarkerAlt />
                <span>456 Medical Complex, Sector 62, Noida, Uttar Pradesh, India 201309</span>
              </div>
              <div className="ft-contact-item">
                <FaPhone />
                <span>+91 9650786278</span>
              </div>
              <div className="ft-contact-item">
                <FaEnvelope />
                <span>info@dhl.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <div className="ft-copyright">
            {new Date().getFullYear()} DHL. All rights reserved.
          </div>
          <div className="ft-bottom-links">
            <a href="/privacy" className="ft-bottom-link">Privacy Policy</a>
            <a href="/terms" className="ft-bottom-link">Terms of Service</a>
            <a href="/sitemap" className="ft-bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;