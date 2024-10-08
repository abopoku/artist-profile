import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import '../styles/portfolio.css'; // Imported the CSS file for styling

const Portfolio = () => {
  const navigate = useNavigate();
  
  const paintings = [
    {
      title: 'KAGO Digital Art',
      imageUrl: '/portfolioimages/canvasprint.jpg', // Replace with actual image URLs
      retailUrl: 'https://www.redbubble.com/i/framed-print/Faces-Digital-Art-by-OpokuArtGallery/162192964.AJ1A3',
    },
    {
      title: 'Throw Pillows',
      imageUrl: '/portfolioimages/throwpillow.jpg',
      retailUrl: 'https://www.redbubble.com/i/throw-pillow/African-Symbol-Designer-Throw-Pillow-by-OpokuArtGallery/149748794.5X2YF',
    },
    {
      title: 'Throw Blankets',
      imageUrl: '/portfolioimages/throwblanket.jpg',
      retailUrl: 'https://www.redbubble.com/i/throw-blanket/Designer-throw-blanket-by-OpokuArtGallery/153379330.NZ8A6',
    },
    {
      title: 'T-Shirts',
      imageUrl: '/portfolioimages/t-shirt.jpg',
      retailUrl: 'https://www.redbubble.com/i/t-shirt/African-Design-T-Shirt-by-OpokuArtGallery/162752278.NL9AC.XYZ',
    },
    {
      title: 'Pull Over Sweatshirts',
      imageUrl: '/portfolioimages/pulloversweatshirt.jpg',
      retailUrl: 'https://www.redbubble.com/i/sweatshirt/African-Design-T-Shirt-by-OpokuArtGallery/162752444.7PZBN',
    },
    {
      title: 'Tote Bags',
      imageUrl: '/portfolioimages/totebag.jpg',
      retailUrl: 'https://www.redbubble.com/i/tote-bag/African-Symbol-Designer-Throw-Pillow-by-OpokuArtGallery/154057103.A9G4R',
    },
    {
      title: 'Mugs',
      imageUrl: '/portfolioimages/mug.jpg',
      retailUrl: 'https://www.redbubble.com/i/mug/Mug-With-African-Designed-Symbols-by-OpokuArtGallery/155449717.9Q0AD',
    },

  ];

  const handleImageClick = (retailUrl) => {
    window.open(retailUrl, '_blank'); // Open the retail URL in a new tab
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of images to show in the carousel on desktop
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Handlers for previous and next portfolio navigation
  const handlePreviousPortfolio = () => {
    navigate('/homepage'); // Navigate to Portfolio (or previous portfolio)
  };

  const handleNextPortfolio = () => {
    navigate('/portfolio1'); // Navigate to Portfolio1 (or next portfolio)
  };

  return (
    <div className="portfolio">
      {/* Previous and Next Portfolio buttons */}
      <div className="portfolio-nav">
        <button onClick={handlePreviousPortfolio} className="portfolio-nav-button">
          &#8592; Previous Work
        </button>
        <button onClick={handleNextPortfolio} className="portfolio-nav-button">
          Next Work &#8594;
        </button>
      </div>

      <h2>Applied Designs</h2>
      <br />
      <p>
        This is a collection of applied designs that been created with my newly created from our published book of Adi Nhyia symbols. Click on an image to view and purchase at the retail store.  
      </p>
      <br/>

      {/* Carousel */}
      <Slider {...settings}>
        {paintings.map((painting, index) => (
          <div className="painting" key={index} onClick={() => handleImageClick(painting.retailUrl)}>
            <img src={painting.imageUrl} alt={painting.title} className="carousel-image"/>
            <h3 className="painting-title">
              {painting.title} <span>{painting.dimensions}</span>
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next and Prev Arrows for the carousel (internal navigation)
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export default Portfolio;

