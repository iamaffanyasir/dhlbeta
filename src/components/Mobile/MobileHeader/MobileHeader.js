import React from 'react';
import { FaWhatsapp, FaGift } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import './MobileHeader.css';

const MobileHeader = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919664064439';
    const message = 'Hello, I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="mobviewheader-container">
      <div className="mobviewheader-logo">
        <img src={logo} alt="DHL Logo" className="mobviewheader-logo-img" />
      </div>
      <div className="mobviewheader-actions">
        <button className="mobviewheader-icon-btn" aria-label="Offers">
          <FaGift className="mobviewheader-icon mobviewheader-offers" />
        </button>
        <button 
          className="mobviewheader-icon-btn" 
          onClick={handleWhatsAppClick}
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="mobviewheader-icon mobviewheader-whatsapp" />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;
