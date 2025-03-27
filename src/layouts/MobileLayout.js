import React from 'react';
import MobileNavbar from '../components/Mobile/MobileNavbar/MobileNavbar';
import MobileHeader from '../components/Mobile/MobileHeader/MobileHeader';
import './MobileLayout.css';

const MobileLayout = ({ children }) => {
  return (
    <div className="mobile-layout">
      <MobileHeader />
      <main className="mobile-layout__content">
        {children}
      </main>
      <MobileNavbar />
    </div>
  );
};

export default MobileLayout;
