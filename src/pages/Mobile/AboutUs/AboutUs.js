import React from 'react';
import './AboutUs.css';
import { FaHospital, FaUserMd, FaFlask, FaAward } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1 className="about__title">About DHL Diagnostics</h1>
        <p className="about__subtitle">Your Trusted Healthcare Partner</p>
      </div>

      <div className="about__content">
        <section className="about__section">
          <h2 className="about__section-title">Who We Are</h2>
          <p className="about__text">
            DHL Diagnostics is a leading healthcare diagnostics provider committed to delivering accurate, 
            timely, and affordable diagnostic services. With state-of-the-art facilities and experienced 
            healthcare professionals, we ensure the highest quality of diagnostic care.
          </p>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">Our Mission</h2>
          <p className="about__text">
            To make quality healthcare diagnostics accessible to all by providing accurate, affordable, 
            and timely diagnostic services while maintaining the highest standards of customer care.
          </p>
        </section>

        <div className="about__features">
          <div className="about__feature">
            <div className="about__feature-icon">
              <FaHospital />
            </div>
            <h3 className="about__feature-title">Modern Facilities</h3>
            <p className="about__feature-text">
              State-of-the-art diagnostic centers equipped with the latest technology
            </p>
          </div>

          <div className="about__feature">
            <div className="about__feature-icon">
              <FaUserMd />
            </div>
            <h3 className="about__feature-title">Expert Team</h3>
            <p className="about__feature-text">
              Qualified healthcare professionals with years of experience
            </p>
          </div>

          <div className="about__feature">
            <div className="about__feature-icon">
              <FaFlask />
            </div>
            <h3 className="about__feature-title">Advanced Testing</h3>
            <p className="about__feature-text">
              Comprehensive range of diagnostic tests with quick turnaround
            </p>
          </div>

          <div className="about__feature">
            <div className="about__feature-icon">
              <FaAward />
            </div>
            <h3 className="about__feature-title">Quality Assured</h3>
            <p className="about__feature-text">
              NABL accredited labs ensuring accurate and reliable results
            </p>
          </div>
        </div>

        <section className="about__section">
          <h2 className="about__section-title">Why Choose Us</h2>
          <ul className="about__list">
            <li className="about__list-item">Accurate and reliable test results</li>
            <li className="about__list-item">Quick turnaround time</li>
            <li className="about__list-item">Affordable pricing</li>
            <li className="about__list-item">Home sample collection</li>
            <li className="about__list-item">Digital reports access</li>
            <li className="about__list-item">Expert healthcare support</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
