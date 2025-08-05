import React, { useEffect, useState } from "react";
import "./navigation.css";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect which section is in view
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 300 &&
          window.scrollY < sectionTop + sectionHeight - 300
        ) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
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
            className={`navLink ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
          <a
            href="#services"
            className={`navLink ${activeLink === "services" ? "active" : ""}`}
            onClick={() => handleLinkClick("services")}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={`navLink ${activeLink === "portfolio" ? "active" : ""}`}
            onClick={() => handleLinkClick("portfolio")}
          >
            Portfolio
          </a>
          <a
            href="#testimonials"
            className={`navLink ${
              activeLink === "testimonials" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("testimonials")}
          >
            Testimonials
          </a>
          <a
            href="#team"
            className={`navLink ${activeLink === "team" ? "active" : ""}`}
            onClick={() => handleLinkClick("team")}
          >
            Team
          </a>
          <a
            href="#contact"
            className={`navLink ${activeLink === "contact" ? "active" : ""}`}
            onClick={() => handleLinkClick("contact")}
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
