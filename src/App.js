import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import Navbar from './components/navbar';
import HomePage from './pages/homepage';
import Portfolio from './pages/portfolio';
import Portfolio0 from './pages/portfolio0';
import Portfolio1 from './pages/portfolio1';
import Portfolio2 from './pages/portfolio2';
import Portfolio3 from './pages/portfolio3';
import Portfolio4 from './pages/portfolio4';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '80px' }}> {/* To prevent content overlap with navbar */}
        <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} /> {/* Redirect from root to homepage */}
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path ="/portfolio0" element={<Portfolio0 />} />
          <Route path ="/portfolio1" element={<Portfolio1 />} />
          <Route path ="/portfolio2" element={<Portfolio2 />} />
          <Route path ="/portfolio3" element={<Portfolio3 />} />
          <Route path ="/portfolio4" element={<Portfolio4 />} />
        </Routes>
      </div>
    
    </Router>
  );
}

export default App;
