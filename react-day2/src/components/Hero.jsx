import React from 'react';
import './Hero.css'; // custom styles for background and overlay

const Hero = () => {
  return (
    <section id='hero' className="hero-section text-white d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="display-3 fw-bold">Discover Trendsetting Products</h1>
        <p className="lead">ShopSmart – Your Ultimate E-Commerce Destination</p>
        <a href="#products" className="btn btn-outline-light btn-lg mt-3">Explore Now</a>
      </div>
    </section>
  );
};

export default Hero;
