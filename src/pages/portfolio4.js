import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import '../styles/portfolio4.css'; // Imported the CSS file for styling

// Dynamically import images from a folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('/public/portfolio4images', false, /\.(png|jpe?g|svg)$/));


const Portfolio4 = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const paintings = [
    {title: 'Aged'},
    {title: 'Bare Back'},
    {title: 'Fresh Leafs'},
    {title: 'Unseen 1'},
    {title: 'Unseen 2'},
    {title: 'Unseen 3'},
    {title: 'Unseen 4'},
    {title: 'Unseen 5'},
    {title: 'Unseen 6'},
    {title: 'Unseen 7'},
    {title: 'Unseen 8'},
    {title: 'Unseen 9'},
    {title: 'Unseen 10'},
    {title: 'Unseen 11'},
    {title: 'Unseen 12'},
    {title: 'Unseen 13'},
    {title: 'Unseen 14'},
    {title: 'Self Portrait'},
    {title: 'Self Portrait 2'},
    {title: 'True Curves'},
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
    navigate('/portfolio3'); // Navigate to  previous portfolio
  };

  const handleNextPortfolio = () => {
    navigate('/contact'); // Navigate to contact page
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

      <h2>Unseen</h2>
      <br />
      <p>
      These artwork pieces have never been exhibited and remain unseen by the public—until now. Visitors to this website are granted an exclusive first look at these original works, offering a unique opportunity to experience them before they are showcased in any formal exhibitions. I invite you to explore and connect with these unseen creations.
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

export default Portfolio4;
