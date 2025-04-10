import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaFlask, FaInfoCircle, FaShoppingBag, FaFileAlt } from 'react-icons/fa';
import './MobileNavbar.css';

const MobileNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      id: 1,
      icon: <FaHome className="mobnav-icon" />,
      label: 'Home',
      path: '/'
    },
    {
      id: 2,
      icon: <FaFlask className="mobnav-icon" />,
      label: 'Tests',
      path: '/tests'
    },
    {
      id: 3,
      icon: <FaShoppingBag className="mobnav-icon" />,
      label: 'Packages',
      path: '/packages'
    }
    // },
    // {
    //   id: 4,
    //   icon: <FaFileAlt className="mobnav-icon" />,
    //   label: 'Profile',
    //   path: '/profile'
    // }
  ];

  return (
    <nav className="mobnav-container">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`mobnav-item ${location.pathname === item.path ? 'mobnav-active' : ''}`}
          onClick={() => navigate(item.path)}
        >
          {item.icon}
          <span className="mobnav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default MobileNavbar;
