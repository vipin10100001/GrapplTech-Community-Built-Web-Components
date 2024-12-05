import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="hero-video">
        {/* Direct link to the Google Drive video */}
        <source 
          src="https://drive.google.com/uc?export=download&id=12FYnODl6mZgFIP6sGl1sj5XHF4UCSwoq" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="hero-content">
        <nav className="hero-navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </nav>
        <div className="hero-text">
          <h1>Crafting Digital Experiences</h1>
          <p>Empowering businesses with custom web solutions</p>
          <a href="#learn-more" className="hero-btn">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
