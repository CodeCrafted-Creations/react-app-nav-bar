import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="custom-navbar">
      <div className="custom-container">
        <a href="/" className="custom-navbar-brand">
          <img src="https://50mbps.com/wp-content/uploads/2023/08/logo.png" alt="50mbps" className="custom-logo" />
        </a>
        <button className="custom-navbar-toggler" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
        <div className={`custom-collapse ${isMobileMenuOpen ? 'custom-navbar-collapse show' : 'custom-navbar-collapse'}`}>
          <ul className="custom-navbar-nav custom-ml-auto">
            <li className="custom-nav-item">
              <a href="https://50mbps.com/" className="custom-nav-link" onClick={toggleMobileMenu}>
                Home
              </a>
            </li>
            <li className="custom-nav-item">
              <a href="https://50mbps.com/about-us/" className="custom-nav-link" onClick={toggleMobileMenu}>
                About Us
              </a>
            </li>
            <li className="custom-nav-item">
              <a href="https://50mbps.com/services/" className="custom-nav-link" onClick={toggleMobileMenu}>
                Services
              </a>
            </li>
            <li className="custom-nav-item">
              <a href="https://50mbps.com/product/" className="custom-nav-link" onClick={toggleMobileMenu}>
                Products
              </a>
            </li>
            <li className="custom-nav-item">
              <a href="https://50mbps.com/contact-us/" className="custom-nav-link" onClick={toggleMobileMenu}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
