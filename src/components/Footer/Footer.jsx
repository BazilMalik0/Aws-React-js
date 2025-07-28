import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              Aws Infotech <span className="footer-emoji">ð</span>
            </h3>
            <p>
              Empowering businesses with next-generation IT solutions. Transform
              your digital future with us.
            </p>
            <div className="footer-stats">
              <div className="footer-stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="footer-stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Web Development</a>
              </li>
              <li>
                <a href="#services">Mobile Development</a>
              </li>
              <li>
                <a href="#services">AI & Machine Learning</a>
              </li>
              <li>
                <a href="#services">Cybersecurity</a>
              </li>
              <li>
                <a href="#services">UI/UX Design</a>
              </li>
              <li>
                <a href="#services">Cloud Solutions</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>
              Newsletter <span className="footer-emoji">ð</span>
            </h4>
            <p>Subscribe to get the latest updates and insights</p>
            <form className="newsletter-form" id="newsletterForm">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                required
              />
              <button type="submit" className="btn btn--primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 Aws Infotech. All rights reserved. Made with â¤ï¸ for
            innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
