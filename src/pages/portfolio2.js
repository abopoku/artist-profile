import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import '../styles/portfolio2.css'; // Imported the CSS file for styling

// Dynamically import images from a folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('/public/portfolio2images', false, /\.(png|jpe?g|svg)$/));


const Portfolio2 = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const paintings = [
    {title: 'Asleep Not Dead 100x70 cm'},
    {title: 'Bath Wash 80x100 cm'},
    {title: 'Before The Opera 50x70 cm'},
    {title: 'Body Bath 60x80 cm'},
    {title: 'Bow To Rain 50x100 cm'},
    {title: 'Come Out! 50x60 cm'},
    {title: 'Different Strokes 80x100 cm'},
    {title: 'Disturbed 60x80 cm'},
    {title: 'Don_t worry 60x80 cm'},
    {title: 'Eclipse 50x50 cm'},
    {title: 'Ecstasy 50x100 cm'},
    {title: 'Efua_s Bunch 30.5x40.6 cm'},
    {title: 'Fireworks and Fireflies 45x90 cm'},
    {title: 'Fresh 50x100 cm'},
    {title: 'Green Waves 30x40 cm'},
    {title: 'Green Green 50x70 cm'},
    {title: 'Hidden Knowledge 80x50 cm'},
    {title: 'Hot And Cold Talk 40x40 cm'},
    {title: 'I Sell 50x100 cm'},
    {title: 'It_s A Choice 120x60 cm'},
    {title: 'Joined At The Hip 60x80 cm'},
    {title: 'Just Blues 60x80 cm'},
    {title: 'Just Like U'},
    {title: 'Just Testing 60x80 cm'},
    {title: 'Let_s Talk About 60x80 cm'},
    {title: 'Live Life 60x80 cm'},
    {title: 'More Better Blues 30x40 cm'},
    {title: 'More Blues 40x40 cm'},
    {title: 'Not U 60x80 cm'},
    {title: 'On Fire 90x45 cm'},
    {title: 'One Night 50x50 cm'},
    {title: 'Orgizard 75x75 cm'},
    {title: 'Out and Out 40x80 cm'},
    {title: 'Pampered 80x100 cm'},
    {title: 'Question 50x60 cm'},
    {title: 'Recline Or Decline 60x80 cm'},
    {title: 'Red Hot'},
    {title: 'Reflection 60x80 cm'},
    {title: 'Reveal 70x100 cm'},
    {title: 'She_s Royal 50x70 cm'},
    {title: 'Still Talking 40x40 cm'},
    {title: 'Sun Rise'},
    {title: 'Sunbath 60x60 cm'},
    {title: 'Take Me Please 120x60 cm'},
    {title: 'Tears, Blood & Sweat 100x50 cm'},
    {title: 'They Do Fly! 80x90 cm'},
    {title: 'Turn Around 2 60x80 cm'},
    {title: 'Turn Around 80x100 cm'},
    {title: 'What U See 60x100 cm'},


    
    
    
  
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
    navigate('/portfolio1'); // Navigate to previous portfolio
  };

  const handleNextPortfolio = () => {
    navigate('/portfolio3'); // Navigate to next portfolio
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

      <h2>Nubuke Exhibition</h2>
      <br />
      <p>
      “Art in any medium is meant to communicate some thoughts and the character of this expression matters a lot because it reveals where you are from, in terms of thinking. What has shaped your mind? So it’s imperative that we rediscover and study what our original ancestors left behind. We need this to help us navigate a path through the new age and even more importantly, to help us make a meaningful contribution to the times we are in and the future that will come.” – Kweku Opoku
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

export default Portfolio2;
