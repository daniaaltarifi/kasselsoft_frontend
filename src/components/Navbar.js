import React, { useRef, useEffect, useState } from "react";
import "../Css/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  const navbarRef = useRef(null);
  const navbarTogglerRef = useRef(null); // Reference to the toggle button
  const location = useLocation();
  const navigate = useNavigate();
  const lang = location.pathname.split("/")[1] || "en"; // Get the language from the path, default to 'en'

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(lang); // Default to English

  const handleSelection = (event) => {
    const newLang = event.target.value;
    setSelectedOption(newLang);
    setDropdownVisible(false); // Close dropdown when a language is selected
    // Update the URL using React Router
    navigate(`/${newLang}`);
  };

  const getIconClass = () => {
    switch (selectedOption) {
      case "en":
        return "bi bi-globe2"; // Icon for English
      case "ar":
        return "bi bi-globe"; // Icon for Arabic
      default:
        return "bi bi-globe2";
    }
  };

  // Function to handle link clicks and collapse the navbar
  const handleLinkClick = () => {
    if (navbarTogglerRef.current) {
      // Simulate a click on the toggle button to collapse the menu
      navbarTogglerRef.current.click();
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbarRef.current.classList.add("navbar-shadow");
      } else {
        navbarRef.current.classList.remove("navbar-shadow");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top navbar-ltr"
      ref={navbarRef}
    >
      <div className="container-fluid mt-4">
          {/* Logo on the left */}
<Link to={`/${lang}`} className="navbar-brand">
          <img
            src={require("../assets/kassel_logo3.png")}
            alt="logo ba9ma"
            className="logo_size img_icon_navbar mt-2"
          />
        </Link>

        {/*   for small screens */}
        <button
      className="navbar-toggler order-lg-2 mt-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      ref={navbarTogglerRef}
    >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation items */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to={`/${lang}`}
                className="nav-link text_navbar"
                onClick={handleLinkClick} // Collapse menu on click
              >
                {lang === "ar" ? "الرئيسية" : "Home"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`${lang}/about`}
                className="nav-link text_navbar"
                onClick={handleLinkClick} // Collapse menu on click
              >
                {lang === "ar" ? "حول" : "About"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/${lang}/services`}
                className="nav-link text_navbar"
                onClick={handleLinkClick} // Collapse menu on click
              >
                {lang === "ar" ? "الخدمات" : "Services"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`${lang}/blogs`}
                className="nav-link text_navbar"
                onClick={handleLinkClick} // Collapse menu on click
              >
                {lang === "ar" ? "المدونة" : "Blog"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`${lang}/careers`}
                className="nav-link text_navbar"
                onClick={handleLinkClick} // Collapse menu on click
              >
                {lang === "ar" ? "الوظائف" : "Career"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`${lang}/contact`}
                className="nav-link text_navbar"
                onClick={handleLinkClick} // Collapse menu on click
              >
                {lang === "ar" ? "اتصل بنا" : "Contact"}
              </Link>
            </li>
          </ul>
          <i className={getIconClass()} onClick={toggleDropdown}></i>
          <div
            className="dropdown-container border-none"
            onClick={toggleDropdown}
          >
            <div className="dropdown-wrapper">
              <select
                className="form-select small-select"
                value={selectedOption}
                onChange={handleSelection}
              >
                <option value="en">en</option>
                <option value="ar">ar</option>
              </select>
            </div>
          </div>
        </div>
       
      </div>
     
    </nav>
  );
}

export default Navbar;