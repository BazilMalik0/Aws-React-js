import React, { useEffect, useState } from "react";
import "./navigation.css";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbarScrolled" : ""}`} id="navbar">
      <div className="container-navigation">
        <div className="navBrand">
          <div className="logo">
            <span className="logoText">Aws</span>
            <span className="logoAccent">Infotech</span>
          </div>
        </div>
        <div
          className={`navMenu ${isMenuOpen ? "navMenuOpen" : ""}`}
          id="navMenu"
        >
          <a
            href="#home"
            className="navLink"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="navLink"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="navLink"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#testimonials"
            className="navLink"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#team"
            className="navLink"
            onClick={() => setIsMenuOpen(false)}
          >
            Team
          </a>
          <a
            href="#contact"
            className="navLink"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
        <button className="navToggle" id="navToggle" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
