import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import HomeTests from '../../components/HomeTests/HomeTests';
import HealthPackages from '../../components/HealthPackages/HealthPackages';
import { FaHospitalUser, FaHeartbeat, FaUserMd, FaFileAlt, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaHospitalUser />,
      title: 'Home Collection',
      description: 'Free Sample Collection',
      highlight: 'Doorstep'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Health Checkup',
      description: 'Comprehensive Tests',
      highlight: '100+ Tests'
    },
    {
      icon: <FaUserMd />,
      title: 'Expert Doctors',
      description: 'Free Consultation',
      highlight: '24/7'
    },
    {
      icon: <FaFileAlt />,
      title: 'Online Reports',
      description: 'Digital Access',
      highlight: '24 Hours'
    }
  ];

  const testimonials = [
    {
      content: "The health packages offered are comprehensive and affordable. The staff was very professional and the results were delivered on time.",
      author: "Sarah Johnson",
      role: "Regular Patient"
    },
    {
      content: "Excellent service! The online booking system is very convenient, and the lab facilities are state-of-the-art.",
      author: "Michael Chen",
      role: "Health Package Customer"
    },
    {
      content: "Very impressed with the quality of service. The doctors are knowledgeable and take time to explain everything clearly.",
      author: "David Wilson",
      role: "Regular Customer"
    }
  ];

  return (
    <div className="home-container">
      <div className="homepage-top-section">
        <div className="homepage-left">
          <HomeCarousel />
        </div>
        <div className="homepage-right">
          <div className="homepage-features">
            {features.map((feature, index) => (
              <div key={index} className="homepage-feature-item">
                <div className="homepage-feature-icon">
                  {feature.icon}
                </div>
                <div className="homepage-feature-content">
                  <h3 className="homepage-feature-title">{feature.title}</h3>
                  <p className="homepage-feature-desc">{feature.description}</p>
                  <span className="homepage-feature-highlight">{feature.highlight}</span>
                </div>
              </div>
            ))}
          </div>
          <a 
            href="/packages" 
            className="homepage-view-packages"
            onClick={(e) => {
              e.preventDefault();
              navigate('/packages');
            }}
          >
            View Popular Packages <FaArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>
      
      <HomeTests />
      <HealthPackages />

      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">What Our Patients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-author">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
