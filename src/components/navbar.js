import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (   
        <nav className="navbar">
            <div className="navbar-logo">
            <Link to="/">
                <img src="/logo192.png" alt="Artist Logo" className="logo-image" />
                <p className="navbar-logo-text">Artist Logo</p>
            </Link> 
            </div>
            <div className="navbar-links">
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
