import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return (   
        <nav className="navbar">
            <div className="navbar-logo">
            <Link to="/homepage">
                <img src="/sitelogo.png" alt="Artist Logo" className="logo-image" />
                <p className="navbar-logo-text">KAGO -Kweku Adu-Gyamfi Opoku</p>
            </Link> 
            </div>
            <div className="navbar-links">
                <Link to="/homepage">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
