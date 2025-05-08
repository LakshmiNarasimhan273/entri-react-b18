import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AllProducts from './components/AllProducts';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AllProducts />
      <ContactForm />
      <Footer />

    </div>
  )
}

export default App