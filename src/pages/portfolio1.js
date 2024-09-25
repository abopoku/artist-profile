import React from 'react';
import '../styles/portfolio1.css'; // Import the CSS file for styling

const Portfolio1 = () => {
  const paintings = [
    {
      title: 'The Awakening',
      imageUrl: 'https://example.com/path/to/awakening.jpg', // Replace with actual image URLs
    },
    {
      title: 'Journey Within',
      imageUrl: 'https://example.com/path/to/journey-within.jpg',
    },
    {
      title: 'Reflections',
      imageUrl: 'https://example.com/path/to/reflections.jpg',
    },
    {
      title: 'Embrace',
      imageUrl: 'https://example.com/path/to/embrace.jpg',
    },
  ];

  return (
    <div className="portfolio">
      <h2>Maryland Showing</h2>
      <p>
        This body of work is under the overarching theme of “Hidden Knowledge” that most of my work is.
        The title for this showing is “see through.” Wading through the labyrinth of mind-blocking thoughts that hold back one’s true identity, the expressions
        on the canvas show an aspect of the journey to reconnect with my heritage and at the same time move forward.
      </p>
      <div className="paintings">
        {paintings.map((painting, index) => (
          <div className="painting" key={index}>
            <img src={painting.imageUrl} alt={painting.title} />
            <h3>{painting.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio1;
