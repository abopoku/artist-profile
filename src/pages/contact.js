import React, { useState } from 'react';
import axios from 'axios';
import '../styles/contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      setSuccessMessage(res.data.message);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting the form:', error);
      setSuccessMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <img src="/contactpageimg.png" alt="Contact" className="contact-image" />
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>

           {/* Social Media Links */}
           <div className="social-media">
        <a href="https://www.facebook.com/opokuartgallery" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i> {/* Font Awesome Facebook Icon */}
        </a>
        <a href="https://www.instagram.com/opokuartgallery/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> {/* Font Awesome Instagram Icon */}
        </a>
      </div>
    </div>
  );
};

export default ContactPage;

