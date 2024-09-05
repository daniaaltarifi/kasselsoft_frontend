import React, { useRef, useEffect, useState } from 'react';
import "../Css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  const navbarRef = useRef(null);
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'en'; // Get the language from the path, default to 'en'

  const [isDropdownVisible, setDropdownVisible] = useState(false);
 
  const [selectedOption, setSelectedOption] = useState('en'); // Default to English

  

  const handleSelection = (event) => {
    setSelectedOption(event.target.value);
    setDropdownVisible(false); // Hide dropdown after selection
  };

  const getIconClass = () => {
    switch (selectedOption) {
      case 'en':
        return 'bi bi-globe2'; // Icon for English
      case 'ar':
        return 'bi bi-globe'; // Icon for French
      default:
        return 'bi bi-globe2';
    }
  };

  const handleLinkClick = () => {
    if (navbarRef.current.classList.contains('show')) {
      navbarRef.current.classList.remove('show');
    }
  };

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbarRef.current.classList.add('navbar-shadow');
      } else {
        navbarRef.current.classList.remove('navbar-shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" ref={navbarRef}>
      <div className="container-fluid ms-5 mt-4">
        {/* Logo on the left */}
        <Link to={`/${lang}`} className="navbar-brand">
          <img
            src={require("../assets/kassel_logo3.png")}
            alt="logo ba9ma"
            className="logo_size img_icon_navbar"
          />
        </Link>

        {/* Toggle button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation items */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
          ref={navbarRef}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/contact" className="nav-link text_navbar" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link text_navbar" onClick={handleLinkClick}>
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cardprice" className="nav-link text_navbar" onClick={handleLinkClick}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link text_navbar" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/${lang}/services`}  className="nav-link text_navbar" onClick={handleLinkClick}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text_navbar" onClick={handleLinkClick}>
                Home 
              </Link>
            </li>
          </ul>
          <i className={getIconClass()} onClick={toggleDropdown}></i>
          <div className="dropdown-container border-none" onClick={toggleDropdown}>
  
    
        <div className="dropdown-wrapper">
          <select className="form-select small-select" value={selectedOption} onChange={handleSelection}>
            <option value="en">En</option>
            <option value="fr">Ar</option>
          </select>
        </div>
      
    </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
