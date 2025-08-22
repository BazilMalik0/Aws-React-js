import React from "react";
import "./heroSection.css";
import { FaRocket, FaNetworkWired } from "react-icons/fa";

function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>
      <div className="hero-content">
        <div className="container-heroSection">
          <h1 className="hero-title">
            Empowering Businesses with{" "}
            <span className="gradient-text">Next-Generation</span> IT Solutions
          </h1>
          <p className="hero-subtitle">
            Transform your digital presence with our innovative technology
            solutions that drive growth and success
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn--primary btn--lg pulse-effect"
              onClick={scrollToContact}
            >
              <span>Get Started</span>
              <span className="btn-icon">
                <FaRocket size={30} />
              </span>
            </button>
            <button
              className="btn btn--outline btn--lg"
              onClick={scrollToPortfolio}
            >
              <span>View Our Work</span>
              <span className="btn-icon">
                <FaNetworkWired size={30} />
              </span>
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
