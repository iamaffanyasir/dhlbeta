import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './HomeCarouselMobile.css';

const slides = [
  {
    id: 1,
    imageUrl: require('../../../assets/carousel/carousel-1.jpg'),
    title: 'Your Health, Our Priority',
    description: 'Advanced diagnostic testing with state-of-the-art technology.',
    buttonText: 'Book a Test',
    buttonLink: '/book'
  },
  {
    id: 2,
    imageUrl: require('../../../assets/carousel/carousel-2.jpg'),
    title: 'Home Collection',
    description: 'Sample collection at your doorstep.',
    buttonText: 'Book Visit',
    buttonLink: '/home-collection'
  },
  {
    id: 3,
    imageUrl: require('../../../assets/carousel/carousel-3.jpg'),
    title: 'Health Packages',
    description: 'Comprehensive health checkup packages.',
    buttonText: 'View Packages',
    buttonLink: '/packages'
  },
  {
    id: 4,
    imageUrl: require('../../../assets/carousel/carousel-4.jpg'),
    title: 'Expert Team',
    description: 'Qualified professionals for reliable results.',
    buttonText: 'Our Team',
    buttonLink: '/team'
  },
  {
    id: 5,
    imageUrl: require('../../../assets/carousel/carousel-5.jpg'),
    title: 'Modern Facilities',
    description: 'State-of-the-art diagnostic technology.',
    buttonText: 'Facilities',
    buttonLink: '/facilities'
  }
];

const HomeCarouselMobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    let interval;
    if (isAutoPlaying && slides.length > 1) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  return (
    <div 
      className="homecar-mobile-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`homecar-mobile-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="homecar-mobile-image"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="homecar-mobile-overlay"></div>
          <div className="homecar-mobile-content">
            <h2 className="homecar-mobile-title">{slide.title}</h2>
            <p className="homecar-mobile-description">{slide.description}</p>
            <button 
              className="homecar-mobile-button"
              onClick={() => window.location.href = slide.buttonLink}
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      <div className="homecar-mobile-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`homecar-mobile-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarouselMobile;
