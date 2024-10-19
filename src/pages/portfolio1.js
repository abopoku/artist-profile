import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import '../styles/portfolio1.css'; // Imported the CSS file for styling

const Portfolio1 = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const paintings = [
    {
      title: 'Across the Divide',
      imageUrl: '/portfolio1images/across the devide.png', // Replace with actual image URLs
    },
    {
      title: 'Face Off',
      imageUrl: '/portfolio1images/face off.png',
    },
    {
      title: 'Fress Talk',
      imageUrl: '/portfolio1images/fress talk.png',
    },
    {
      title: 'Inner Vision',
      imageUrl: '/portfolio1images/inner vision.png',
    },
    {
      title: 'Inside the Mask',
      imageUrl: '/portfolio1images/inside the mask.png',
    },
    {
      title: 'Into Masks',
      imageUrl: '/portfolio1images/into masks.png',
    },
    {
      title: 'Language 2',
      imageUrl: '/portfolio1images/language 2.png',
    },
    {
      title: 'Language 3',
      imageUrl: '/portfolio1images/language 3.png',
    },
    {
      title: 'Life on Earth',
      imageUrl: '/portfolio1images/Life on earth.png',
    },
    {
      title: 'My People',
      imageUrl: '/portfolio1images/my people.png',
    },
    {
      title: 'Phase Out',
      imageUrl: '/portfolio1images/phase out.png',
    },
    {
      title: 'Simple and True',
      imageUrl: '/portfolio1images/simple and true.png',
    },
    {
      title: 'Two heads are still Better',
      imageUrl: '/portfolio1images/two heads still better.png',
    },
    {
      title: 'Working Mind',
      imageUrl: '/portfolio1images/working mind.png',
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
    navigate('/portfolio0'); // Navigate to previous portfolio
  };

  const handleNextPortfolio = () => {
    navigate('/portfolio2'); // Navigate to next portfolio
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

      <h2>Maryland 2024</h2>
      <br />
      <p>
        This continued body of work is under the overarching theme of “Hidden Knowledge” that most of my work is. The title for this showing is “see through.” Wading through the labyrinth of mind-blocking thoughts that hold back one’s true identity, the expressions on the canvas show an aspect of the journey to reconnect with my heritage and at the same time move forward.
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

export default Portfolio1;
