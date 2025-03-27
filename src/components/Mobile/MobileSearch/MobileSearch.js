import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaTimes, FaFlask } from 'react-icons/fa';
import './MobileSearch.css';
import { tests } from '../../../data/tests';

const MobileSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filteredTests = tests.filter(test =>
        test.name.toLowerCase().includes(query.toLowerCase()) ||
        test.category.toLowerCase().includes(query.toLowerCase()) ||
        test.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredTests);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
  };

  const handleTestClick = (test) => {
    navigate(`/tests/${test.id}`);
    setShowResults(false);
  };

  return (
    <div className="mobile-search" ref={searchRef}>
      <div className="mobile-search__input-container">
        <FaSearch className="mobile-search__icon" />
        <input
          type="text"
          className="mobile-search__input"
          placeholder="Search for tests..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setShowResults(true)}
        />
        {searchQuery && (
          <button 
            className="mobile-search__clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {showResults && searchQuery && (
        <>
          <div className="mobile-search__backdrop" onClick={() => setShowResults(false)} />
          <div className="mobile-search__results">
            {searchResults.length > 0 ? (
              searchResults.map(test => (
                <div
                  key={test.id}
                  className="mobile-search__result-item"
                  onClick={() => handleTestClick(test)}
                >
                  <div className="mobile-search__result-icon">
                    <FaFlask size={20} />
                  </div>
                  <div className="mobile-search__result-content">
                    <div className="mobile-search__result-title">{test.name}</div>
                    <div className="mobile-search__result-price">₹{test.price}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="mobile-search__no-results">
                No tests found matching "{searchQuery}"
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MobileSearch;
