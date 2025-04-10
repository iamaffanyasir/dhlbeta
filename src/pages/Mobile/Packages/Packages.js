import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaUserMd } from 'react-icons/fa';
import './Packages.css';

const introContent = {
  title: 'Book a health check up today and take the first step towards a healthier you',
  sections: []
};

const packages = [
  {
    id: 'mini-health-1',
    name: 'MINI HEALTH PACKAGE I',
    icon: <FaHeart />,
    price: 499,
    parameters: '25+',
    tests: ['CBC', 'ESR', 'KFT', 'LFT'],
    description: 'Essential mini health screening package'
  },
  {
    id: 'basic-health-1',
    name: 'BASIC HEALTH PACKAGE I',
    icon: <FaUserMd />,
    price: 999,
    parameters: '60+',
    tests: ['CBC + ESR', 'THYROID PROFILE', 'DIABETIC PROFILE', 'LIPID PROFILE'],
    description: 'Comprehensive basic health screening'
  },
  {
    id: 'mini-health-2',
    name: 'MINI HEALTH PACKAGE II',
    icon: <FaHeart />,
    price: 699,
    parameters: '30+',
    tests: ['CBC + ESR', 'B. Sugar(FASTING)', 'LIPID PROFILE', 'KFT'],
    description: 'Advanced mini health screening'
  },
  {
    id: 'basic-health-2',
    name: 'BASIC HEALTH PACKAGE II',
    icon: <FaUserMd />,
    price: 1199,
    parameters: '70+',
    tests: ['HbA1C', 'CBC + ESR', 'LIPID PROFILE', 'KFT & LFT'],
    description: 'Advanced basic health screening'
  },
  {
    id: 'full-body-2',
    name: 'FULL BODY CHECKUP II',
    icon: <FaUserMd />,
    price: 1999,
    parameters: '80+',
    tests: ['Vitamin D3/B12', 'IRON PROFILE', 'DIABETIC PROFILE', 'HEART RISK PROF.'],
    description: 'Comprehensive full body checkup'
  },
  {
    id: 'full-body-1',
    name: 'FULL BODY CHECKUP I',
    icon: <FaUserMd />,
    price: 1699,
    parameters: '75+',
    tests: ['VITAMIN D3', 'KFT With Electro.', 'LFT With GGT', 'THYROID PROFILE'],
    description: 'Complete full body health screening'
  }
];

const Packages = () => {
  const navigate = useNavigate();

  const handlePackageClick = (packageId) => {
    navigate(`/packages/${packageId}`);
  };

  return (
    <div className="packages">
      <div className="packages__header">
        <h1 className="packages__title">{introContent.title}</h1>
      </div>

      

      <div className="packages__grid">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className="packages__card"
            onClick={() => handlePackageClick(pkg.id)}
          >
            <div className="packages__card-icon">
              {pkg.icon}
            </div>
            <div className="packages__card-content">
              <h3 className="packages__card-title">{pkg.name}</h3>
              <p className="packages__card-description">{pkg.description}</p>
              
              <div className="packages__card-tests">
                <h4 className="packages__card-tests-title">Parameters: {pkg.parameters}</h4>
                <ul className="packages__card-tests-list">
                  {pkg.tests.map((test, index) => (
                    <li key={index} className="packages__card-tests-item">{test}</li>
                  ))}
                </ul>
              </div>

              <div className="packages__card-price">
                <span className="packages__card-price-current">₹{pkg.price}</span>
                <span className="packages__card-price-discount">
                  {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                </span>
              </div>

              <button className="packages__card-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
