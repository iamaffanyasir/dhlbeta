import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { 
  FaPhone, 
  FaMapMarkerAlt, 
  FaSearch, 
  FaChevronDown, 
  FaUser,
  FaShoppingCart,
  FaSignOutAlt,
  FaRegClock
} from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { tests } from '../data/tests';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showMobileResults, setShowMobileResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [mobileSearchResults, setMobileSearchResults] = useState([]);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const isAdmin = localStorage.getItem('isAdminLoggedIn') === 'true';

  const handleSearch = (query, isMobile = false) => {
    const setQuery = isMobile ? setMobileSearchQuery : setSearchQuery;
    const setResults = isMobile ? setMobileSearchResults : setSearchResults;
    
    setQuery(query);
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filteredTests = tests.filter(test => {
      const searchTerms = query.toLowerCase().split(' ');
      return searchTerms.every(term => 
        test.name.toLowerCase().includes(term) ||
        test.description.toLowerCase().includes(term) ||
        test.alternateNames.some(name => name.toLowerCase().includes(term)) ||
        test.category.toLowerCase().includes(term)
      );
    });

    setResults(filteredTests.slice(0, 5)); // Limit to 5 results
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowResults(false);
    }
    if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)) {
      setShowMobileResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigateToTest = (path, isMobile = false) => {
    navigate(path);
    if (isMobile) {
      setShowMobileResults(false);
      setMobileSearchQuery('');
    } else {
      setShowResults(false);
      setSearchQuery('');
    }
  };

  const handleLogin = () => {
    if (isAdmin) {
      localStorage.removeItem('isAdminLoggedIn');
      localStorage.removeItem('adminUsername');
      navigate('/');
    } else {
      navigate('/admin-login');
    }
  };

  return (
    <nav className="nb-container">
      <div className="nb-top">
        <div className="nb-top-content">
          <div className="nb-left">
            <div className="nb-logo">
              <img src={Logo} alt="DHL" onClick={() => navigate('/')} />
            </div>
            <div className="nb-nav">
              <a onClick={() => navigate('/')} className="nb-nav-item active">
                Home
              </a>
              <a onClick={() => navigate('/about')} className="nb-nav-item">
                About Us
              </a>
              <a onClick={() => navigate('/packages')} className="nb-nav-item">
                Our Packages
              </a>
              <a onClick={() => navigate('/reports')} className="nb-nav-item">
                Reports
              </a>
            </div>
          </div>
          <div className="nb-contact">
            <div className="nb-phone">
              <FaPhone />
              <span>9650786278</span>
              <FaRegClock style={{ marginLeft: '5px' }} />
              <span>24/7</span>
            </div>
            <div className="nb-buttons">
              <button className="nb-quick-order" onClick={() => window.open('https://wa.me/919664064439', '_blank')}>
                <FaShoppingCart />
                Quick Order
              </button>
              <button className="nb-login" onClick={handleLogin}>
                {isAdmin ? (
                  <>
                    <FaSignOutAlt />
                    Logout
                  </>
                ) : (
                  <>
                    <FaUser />
                    Login
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="nb-mobile-search-container" ref={mobileSearchRef}>
        <div className="nb-mobile-search">
          <input 
            type="text" 
            placeholder="Search for tests, packages, or labs..."
            value={mobileSearchQuery}
            onChange={(e) => handleSearch(e.target.value, true)}
            onFocus={() => setShowMobileResults(true)}
          />
          <button>
            <FaSearch />
          </button>
          {showMobileResults && mobileSearchResults.length > 0 && (
            <div className="nb-mobile-search-results">
              {mobileSearchResults.map((test) => (
                <div 
                  key={test.id}
                  className="nb-mobile-search-result-item"
                  onClick={() => navigateToTest(test.path, true)}
                >
                  <div className="nb-mobile-search-result-name">{test.name}</div>
                  <div className="nb-mobile-search-result-desc">{test.description}</div>
                  <div className="nb-mobile-search-result-category">{test.category}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="nb-bottom">
        <div className="nb-bottom-content">
          <div className="nb-location">
            <FaMapMarkerAlt />
            <span>Delhi, India</span>
            <FaChevronDown />
          </div>
          <div className="nb-search" ref={searchRef}>
            <input 
              type="text" 
              placeholder="Search for tests, packages, or labs..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => setShowResults(true)}
            />
            <button>
              <FaSearch />
            </button>
            {showResults && searchResults.length > 0 && (
              <div className="nb-search-results">
                {searchResults.map((test) => (
                  <div 
                    key={test.id}
                    className="nb-search-result-item"
                    onClick={() => navigateToTest(test.path)}
                  >
                    <div className="nb-search-result-name">{test.name}</div>
                    <div className="nb-search-result-desc">{test.description}</div>
                    <div className="nb-search-result-category">{test.category}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;