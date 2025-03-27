import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import './HomeCarousel.css';

const slides = [
  {
    id: 1,
    imageUrl: require('../../assets/carousel/carousel-1.jpg'),
    title: 'Your Health, Our Priority',
    description: 'Advanced diagnostic testing with state-of-the-art technology for accurate and reliable results.',
    buttonText: 'Book a Test',
    buttonLink: '/book'
  },
  {
    id: 2,
    imageUrl: require('../../assets/carousel/carousel-2.jpg'),
    title: 'Home Collection Service',
    description: 'Experience hassle-free sample collection at your doorstep by our trained professionals.',
    buttonText: 'Book Home Visit',
    buttonLink: '/home-collection'
  },
  {
    id: 3,
    imageUrl: require('../../assets/carousel/carousel-3.jpg'),
    title: 'Health Packages',
    description: "Comprehensive health checkup packages designed for you and your family's complete wellness.",
    buttonText: 'View Packages',
    buttonLink: '/packages'
  },
  {
    id: 4,
    imageUrl: require('../../assets/carousel/carousel-4.jpg'),
    title: 'Expert Team',
    description: 'Our team of qualified professionals ensures accurate diagnostics and reliable results.',
    buttonText: 'Meet Our Team',
    buttonLink: '/team'
  },
  {
    id: 5,
    imageUrl: require('../../assets/carousel/carousel-5.jpg'),
    title: 'Modern Facilities',
    description: 'State-of-the-art laboratories equipped with the latest diagnostic technology.',
    buttonText: 'Our Facilities',
    buttonLink: '/facilities'
  }
];

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    let interval;
    if (isAutoPlaying && slides.length > 1) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    }
    if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className="homecar-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`homecar-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <OptimizedImage
            src={slide.imageUrl}
            alt={slide.title}
            className="homecar-image"
            width={1920}
            height={600}
            loading={index === 0 ? 'eager' : 'lazy'}
            quality={90}
          />
          <div className="homecar-overlay"></div>
          <div className="homecar-content">
            <h2 className="homecar-title">{slide.title}</h2>
            <p className="homecar-description">{slide.description}</p>
            <button 
              className="homecar-button"
              onClick={() => window.location.href = slide.buttonLink}
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      {slides.length > 1 && (
        <>
          <button className="homecar-arrow prev" onClick={prevSlide} aria-label="Previous slide">
            <FaChevronLeft />
          </button>
          <button className="homecar-arrow next" onClick={nextSlide} aria-label="Next slide">
            <FaChevronRight />
          </button>

          <div className="homecar-nav" role="tablist">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`homecar-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                role="tab"
                aria-selected={index === currentSlide}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeCarousel;
