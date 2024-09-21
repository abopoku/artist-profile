import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';  // Include your custom CSS styles

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section with background image */}
      <header className="header-section">
        {/* <div className="header-content">
          <h1>ART & DESIGN</h1>
          <p>
            Influenced by the African masks he saw in a museum. He drew inspiration and gave the world Cubism. What about you? The descendants of those whose wisdom created the masks centuries ago? What influences us, where do we draw inspiration from?
          </p>
        </div> */}
      </header>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome to My World</h2>
        <p>
          The world is for the future, but it's history is what we are today.
        </p>
      </section>

      {/* Portfolio Section with clickable images */}
      <section className="portfolio-section">
        <div className="portfolio-grid">
          <Link to="/portfolio"><img src="/appliedart.png" alt="Portfolio" />
          <div className="overlay"><h3>Applied Designs</h3></div>
          </Link>
          <Link to="/portfolio1"><img src="/Marylandshowing.png" alt="Portfolio 1" />
          <div className="overlay"><h3>Maryland Showing</h3></div>
          </Link>
          <Link to="/portfolio2"><img src="/Nubuke.png" alt="Portfolio 2" />
          <div className="overlay"><h3>Nubuke Exhibition</h3></div>
          </Link>
          <Link to="/portfolio3"><img src="/digitalexpres.png" alt="Portfolio 3" />
          <div className="overlay"><h3>Digital Expressions</h3></div>
          </Link>
          <Link to="/portfolio4"><img src="/currently working on.png" alt="Portfolio 4" />
          <div className="overlay"><h3>Current Work</h3></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
