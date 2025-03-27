import React from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeTests.css';

// This data can later be managed through admin panel
const defaultTestsData = {
  heading: "HEALTH TESTS AT YOUR HOME",
  tests: [
    {
      id: 1,
      name: "CBC (Complete Blood Count)",
      description: "Comprehensive blood test your way",
      imageUrl: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80",
      bookingUrl: "/book/cbc"
    },
    {
      id: 2,
      name: "Thyroid Profile (T3, T4 & TSH)",
      description: "Complete thyroid function assessment",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
      bookingUrl: "/book/thyroid"
    },
    {
      id: 3,
      name: "Vitamin D Test",
      description: "Check your vitamin D levels",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80",
      bookingUrl: "/book/vitamin-d"
    },
    {
      id: 4,
      name: "HbA1C Test",
      description: "3-month average blood sugar levels",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      bookingUrl: "/book/hba1c"
    },
    {
      id: 5,
      name: "Liver Function Test (LFT)",
      description: "Comprehensive liver health assessment",
      imageUrl: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80",
      bookingUrl: "/book/lft"
    },
    {
      id: 6,
      name: "Lipid Profile",
      description: "Complete cholesterol and triglycerides test",
      imageUrl: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80",
      bookingUrl: "/book/lipid"
    },
    {
      id: 7,
      name: "COVID-19 RT-PCR",
      description: "Gold standard COVID-19 detection test",
      imageUrl: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80",
      bookingUrl: "/book/covid"
    },
    {
      id: 8,
      name: "Kidney Function Test",
      description: "Complete renal function assessment",
      imageUrl: "https://images.unsplash.com/photo-1579684385215-936c0d4c5e8f?auto=format&fit=crop&q=80",
      bookingUrl: "/book/kidney"
    }
  ]
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="ht-slider-arrow ht-slider-next" onClick={onClick}>
      <FaChevronRight />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="ht-slider-arrow ht-slider-prev" onClick={onClick}>
      <FaChevronLeft />
    </button>
  );
};

const HomeTests = () => {
  const handleBookNow = (bookingUrl) => {
    // Handle booking navigation
    console.log(`Navigating to: ${bookingUrl}`);
  };

  const handleViewAll = () => {
    // Handle view all tests navigation
    console.log('Viewing all tests');
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="ht-container">
      <div className="ht-content">
        <div className="ht-header">
          <h2 className="ht-heading">{defaultTestsData.heading}</h2>
          <button className="ht-view-all" onClick={handleViewAll}>
            View All Tests
            <FaArrowRight className="ht-arrow-icon" />
          </button>
        </div>

        <div className="ht-slider-container">
          <Slider {...sliderSettings}>
            {defaultTestsData.tests.map((test) => (
              <div key={test.id} className="ht-test-card">
                <div className="ht-test-image">
                  <img src={test.imageUrl} alt={test.name} />
                </div>
                <div className="ht-test-content">
                  <h3 className="ht-test-name">{test.name}</h3>
                  <p className="ht-test-description">{test.description}</p>
                  <button 
                    className="ht-book-button"
                    onClick={() => handleBookNow(test.bookingUrl)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeTests;
