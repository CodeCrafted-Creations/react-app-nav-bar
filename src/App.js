import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Product from './Product';
import Contact from './Contact';
import './Navbar.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
