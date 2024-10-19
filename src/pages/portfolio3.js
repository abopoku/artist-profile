import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import '../styles/portfolio3.css'; // Imported the CSS file for styling

// Dynamically import images from a folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('/public/portfolio3images', false, /\.(png|jpe?g|svg)$/));


const Portfolio3 = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const paintings = [
    {title: 'Aparthied'},
    {title: 'Before The Invasion'},
    {title: 'Conversation'},
    {title: 'Find Truth'},
    {title: 'Forest Living'},
    {title: 'Full Talk'},
    {title: 'Harsh Truth'},
    {title: 'New Look'},
    {title: 'No Joke'},
    {title: 'Not U'},
    {title: 'Not Yet Pizza'},
    {title: 'Reveal'},
    {title: 'Times Change'},
    {title: 'Transparent'},
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
    navigate('/portfolio2'); // Navigate to previous portfolio
  };

  const handleNextPortfolio = () => {
    navigate('/portfolio4'); // Navigate to  next portfolio
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

      <h2>Not Exhibited Yet</h2>
      <br />
      <p>
     These pieces have not yet been exhibited in a formal gallery setting, they represent a journey and exploration of identity. I am excited to share these works with a broader audience in the near future and look forward to showcasing them in upcoming exhibitions and collaborations.
      <br />
      <br />
        For purchase inquiries, please reach out via contact page.
      </p>
      <br/>

      {/* Carousel */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="painting" key={index} onClick={() => handleImageClick(image)}>
            <img src={image} alt={paintings[index]?.title || `Painting ${index + 1}`} className="carousel-image"/>
            <h3 className="painting-title">
              {paintings[index]?.title || `Untitled ${index + 1}`}
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

export default Portfolio3;
