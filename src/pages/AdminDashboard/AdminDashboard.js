import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaImages, FaBoxes, FaSignOutAlt } from 'react-icons/fa';
import './AdminDashboard.css';
import Logo from '../../assets/logo.png';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Check if admin is logged in
  React.useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isAdminLoggedIn) {
      navigate('/admin-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminUsername');
    localStorage.removeItem('adminLoginTime');
    navigate('/admin-login');
  };

  const handleOptionClick = (option) => {
    switch (option) {
      case 'carousel':
        navigate('/admin/carousel');
        break;
      case 'packages':
        navigate('/admin/packages');
        break;
      default:
        break;
    }
  };

  const username = localStorage.getItem('adminUsername') || 'Admin';
  const loginTime = new Date(localStorage.getItem('adminLoginTime')).toLocaleString();

  return (
    <div className="ad-container">
      <aside className="ad-sidebar">
        <div className="ad-sidebar-header">
          <img src={Logo} alt="DHL Logo" className="ad-logo" />
          <h2>Admin Panel</h2>
        </div>
        
        <div className="ad-user-info">
          <div className="ad-user-name">{username}</div>
          <div className="ad-login-time">Login: {loginTime}</div>
        </div>

        <button 
          className="ad-logout-button"
          onClick={handleLogout}
        >
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      <main className="ad-main">
        <header className="ad-header">
          <h1>Welcome to Admin Dashboard</h1>
          <p>Select a module to manage</p>
        </header>

        <div className="ad-options-grid">
          <div 
            className="ad-option-card"
            onClick={() => handleOptionClick('carousel')}
          >
            <FaImages className="ad-option-icon" />
            <h3>Carousel Manager</h3>
            <p>Manage homepage carousel slides and content</p>
          </div>

          <div 
            className="ad-option-card"
            onClick={() => handleOptionClick('packages')}
          >
            <FaBoxes className="ad-option-icon" />
            <h3>Packages Manager</h3>
            <p>Manage test packages and pricing</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
