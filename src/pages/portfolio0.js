import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import '../styles/portfolio0.css'; // Imported the CSS file for styling

const Portfolio0 = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const paintings = [
    {
      title: 'Across the Desert 22x28',
      imageUrl: '/portfolio0images/Across the Desert 22x28.jpeg', // Replace with actual image URLs
    },
    {
      title: 'Across the Sea 22x28',
      imageUrl: '/portfolio0images/Across the Sea 22x28.jpeg',
    },
    {
      title: 'Ancestors Adorn 18x24',
      imageUrl: '/portfolio0images/Ancestors Adorn 18x24.jpeg',
    },
    {
      title: 'Deeper Vision 22x28',
      imageUrl: '/portfolio0images/Deeper vision 22x28.jpeg',
    },
    {
      title: 'Dogon Like 16x20',
      imageUrl: '/portfolio0images/Dogon like 16x20.jpeg',
    },
    {
      title: 'HER 12x36',
      imageUrl: '/portfolio0images/HER 12x36.jpeg',
    },
    {
      title: 'HIM 12x36',
      imageUrl: '/portfolio0images/HIM 12x36.jpeg',
    },
    {
      title: 'Language 16X20',
      imageUrl: '/portfolio0images/Language 16x20.jpeg',
    },
    {
      title: 'Light Life 16x20',
      imageUrl: '/portfolio0images/Light Life 16x20.jpeg',
    },
    {
      title: 'Light(Open Eyes) 16x20',
      imageUrl: '/portfolio0images/Light(open eyes) 16x20.jpeg',
    },
    {
      title: 'Like Me 22x28',
      imageUrl: '/portfolio0images/Like Me 22x28.jpeg',
    },
    {
      title: 'New Vision 18x24',
      imageUrl: '/portfolio0images/New Vision 18x24.jpeg',
    },
    {
      title: 'New Vision 2 18x24',
      imageUrl: '/portfolio0images/New Vision2 18x24.jpeg',
    },
    {
      title: 'No Hide 22x28',
      imageUrl: '/portfolio0images/No Hide 22x28.jpeg',
    },
    {
      title: 'See Through Mask 1 16x20',
      imageUrl: '/portfolio0images/See through(Mask)1 16x20.jpeg',
    },
    {
      title: 'See Through Mask 2 16x20',
      imageUrl: '/portfolio0images/See through(Mask)2 16x20.jpeg',
    },
    {
      title: 'See Through Mask 3 16x20',
      imageUrl: '/portfolio0images/See through(Mask)3 16x20.jpeg',
    },
    {
      title: 'See Through Mask 4 16x20',
      imageUrl: '/portfolio0images/See through(Mask)4 16x20.jpeg',
    },
    {
      title: 'The Ancestors Always 18x24',
      imageUrl: 'portfolio0images/The Ancestors Always 18x24.jpeg',
    },
    {
      title: 'The Ancestors Before 22x28',
      imageUrl: '/portfolio0images/The ancestors before 22x28tif.jpeg',
    },
    {
      title: 'The Ancestors (Many From Afar) 22x28',
      imageUrl: '/portfolio0images/The Ancestors(many from afar)22x28.jpeg',
    },
    {
      title: 'Unmask 1 18x24',
      imageUrl: '/portfolio0images/Unmask1 18x24.jpeg',
    },
    {
      title: 'Unmask 2 18x24',
      imageUrl: '/portfolio0images/Unmask2 18x24.jpeg',
    },
    {
      title: 'Which Witches Eye 16x20',
      imageUrl: '/portfolio0images/Which witches eye_ 16x20.jpeg',
    },
  
  ];

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
    navigate('/portfolio'); // Navigate to Portfolio (or previous portfolio)
  };

  const handleNextPortfolio = () => {
    navigate('/portfolio1'); // Navigate to Portfolio2 (or next portfolio)
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

      <h2>Maryland Showing 2023</h2>
      <br />
      <p>
        This body of work is under the overarching theme of “Hidden Knowledge” that most of my work is. The title for this showing is “see through.” Wading through the labyrinth of mind-blocking thoughts that hold back one’s true identity, the expressions on the canvas show an aspect of the journey to reconnect with my heritage and at the same time move forward.
        <br />
        <br />
        For purchase inquiries, please reach out via contact page.
      </p>
      <br/>

      {/* Carousel */}
      <Slider {...settings}>
        {paintings.map((painting, index) => (
          <div className="painting" key={index} onClick={() => handleImageClick(painting.imageUrl)}>
            <img src={painting.imageUrl} alt={painting.title} className="carousel-image"/>
            <h3 className="painting-title">
              {painting.title} <span>{painting.dimensions}</span>
            </h3>
          </div>
        ))}
      </Slider>


      {/* Modal for full-screen image view */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={selectedImage} alt="Selected" />
        </div>
      )}
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

export default Portfolio0;
