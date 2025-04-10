import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MobileCarousel.css';

const MobileCarousel = ({ slides }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        await Promise.all(
          slides.map((slide) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = slide.image;
            });
          })
        );
        setLoadedImages(slides.map(slide => slide.image));
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, [slides]);
  const settings = {
    lazyLoad: 'progressive',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    className: 'mobile-carousel'
  };

  return (
    <div className="mobile-carousel__wrapper">
      <Slider {...settings}>
        {isLoading ? (
          <div className="mobile-carousel__slide mobile-carousel__slide--loading" />
        ) : slides.map((slide, index) => (
          <div key={index} className="mobile-carousel__slide">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className={`mobile-carousel__image ${loadedImages.includes(slide.image) ? 'mobile-carousel__image--loaded' : ''}`}
              loading="lazy"
            />
            {(slide.title || slide.description) && (
              <div className="mobile-carousel__content">
                {slide.title && (
                  <h3 className="mobile-carousel__title">{slide.title}</h3>
                )}
                {slide.description && (
                  <p className="mobile-carousel__description">{slide.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </Slider>
      <div className="mobile-carousel__progress-bar" />
      <div className="mobile-carousel__overlay" />
    </div>
  );
};

export default MobileCarousel;
