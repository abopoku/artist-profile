import React from 'react';
import "../styles/about.css";

const AboutPage = () => {
  return (
<section className="about-section">
  <div className="about-content">
    <div className="about-image">
      <img src="/biopic.png" alt="Artist" />
    </div>
    <div className="about-text">
    <h2>
        <span className="about-title">About</span> 
        <span className="title-separator"></span>
        <span className="main-title">Artist & Designer</span>
    </h2>
      <p>      
        Kweku Opoku is a seasoned artist and creative visionary who began his journey in graphic design at Cardiff College of Art in Wales. His career spans over three decades, with 15 years as a creative director in Ghana's advertising industry. He has held prominent leadership roles, including managing director at Ogilvy Ghana (2011–2012) and Ogilvy Africa Media Ghana (2010–2011), before which, he served as DMD and chief creative director at MMRS Ogilvy (1997–2010). Earlier in his career, he directed the National Film and Television Institute (1982–1984).</p>
      <p>
      Now retired from the corporate world, Kweku continues to shape the design landscape as a design and brand consultant. His love for art has never waned; he spends his time drawing, painting, and playing blues with his harmonica. As a jazz and blues enthusiast, he also occasionally performs with a band at the +233 Jazz Bar & Grill lounge in Ghana.
      </p>
      <blockquote>
      “Art in any medium is meant to communicate some thoughts and the character of this expression matters a lot because it reveals where you are from, in terms of thinking. What has shaped your mind? So it’s imperative that we rediscover and study what our original ancestors left behind. We need this to help us navigate a path through the new age and even more importantly, to help us make a meaningful contribution to the times we are in and the future that will come.” – Kweku Opoku
      </blockquote>
    </div>
  </div>
</section>
  );
};

export default AboutPage;
