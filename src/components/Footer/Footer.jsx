import React, { useState } from "react";
import "./footer.css";
import { FaRegNewspaper } from "react-icons/fa";
function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const input = form.querySelector("input[type='email']");

    setTimeout(() => {
      setIsSubmitting(false);
      showToast("Welcome to our newsletter! ð");
      input.value = "";
    }, 3000);
  };

  const showToast = (message) => {
    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              Aws Infotech <span className="footer-emoji"></span>
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
              Newsletter
              <span className="footer-emoji">
                <FaRegNewspaper />
              </span>
            </h4>
            <p>Subscribe to get the latest updates and insights</p>
            <form
              className="newsletter-form"
              id="newsletterForm"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                required
              />
              <button
                type="submit"
                className="btn btn--primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Aws Infotech. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
