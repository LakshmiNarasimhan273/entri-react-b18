import React from 'react';
import "./Hero.css";

function Hero() {
  return (
    <section id='hero' className='hero-section text-white d-flex align-items-center justify-content-center'>

        <div className='container text-center'>
                <h1 className='display-3 fw-bold'>Shop smarter with Shopyfyy</h1>
                <p className='lead'>Your ultimate ecommerce destination</p>
                <a href="#products" className='btn btn-outline-light btn-lg mt-3'>Explore Products</a>
        </div>

    </section>
  )
}

export default Hero