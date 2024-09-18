import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Portfolio from './pages/portfolio';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '80px' }}> {/* To prevent content overlap with navbar */}
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
