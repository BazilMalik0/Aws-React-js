import React, { useState } from "react";
import "./ContactSection.css";
import { IoSend } from "react-icons/io5";
import {
  FaEnvelope,
  FaPhoneVolume,
  FaLocationArrow,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
const Contact = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    service: "",
  });
  const [errors, setErrors] = useState({});

  function createCelebrationEffect() {
    const colors = [
      "#0066FF",
      "#FF6600",
      "#00CC66",
      "#FF3366",
      "#9966FF",
      "#00CCCC",
    ];
    const container = document.createElement("div");
    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9999;
    `;
    document.body.appendChild(container);

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      const size = Math.floor(Math.random() * 12) + 6;
      confetti.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -20px;
        border-radius: 50%;
        animation: fall-${i} 3s ease-out forwards;
      `;

      const animation = `
        @keyframes fall-${i} {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(${
            Math.random() * 100 + 400
          }px) rotate(360deg); opacity: 0; }
        }
      `;

      const style = document.createElement("style");
      style.textContent = animation;
      document.head.appendChild(style);
      container.appendChild(confetti);
    }

    setTimeout(() => {
      container.remove();
      document.querySelectorAll("style").forEach((styleTag) => {
        if (styleTag.textContent.includes("@keyframes fall-"))
          styleTag.remove();
      });
    }, 3500);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "⚠️Name is required.";
    if (!formData.email.trim()) newErrors.email = "⚠️Email is required.";
    if (!formData.message.trim()) newErrors.message = "⚠️Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setTimeout(() => {
      createCelebrationEffect();
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 4000);
    }, 3000);

    setFormData({ name: "", email: "", message: "", company: "", service: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="contact">
      {toastVisible && (
        <div className="toast">
          Thank you for your message! We will get back to you soon! ð
        </div>
      )}
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>
              Get In Touch <span className="section-emoji"></span>
            </h2>
            <p>
              Ready to start your next project? Let's make something amazing
              together!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">{<FaEnvelope />}</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>info@Awsinfotech.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhoneVolume />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaLocationArrow />
                </div>
                <div className="contact-text">
                  <h4>Address</h4>
                  <p>123 Tech Park, Silicon Valley, CA 94000</p>
                </div>
              </div>
            </div>
            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-link">
                  <span className="social-icon">
                    <FaFacebook style={{ marginTop: "6px", color: "1877f2" }} />
                  </span>{" "}
                  <span>Facebook</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">
                    <FaTwitter style={{ marginTop: "6px", color: "#1da1f2" }} />
                  </span>{" "}
                  <span>Twitter</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">
                    <FaLinkedin
                      style={{ marginTop: "6px", color: "#0077B5" }}
                    />
                  </span>{" "}
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">
                    <FaInstagram style={{ marginTop: "6px", color: "" }} />
                  </span>{" "}
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form
              className="contact-form"
              id="contactForm"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-control"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="form-control"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="cloud">Cloud Solutions</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="error-text">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="btn btn--primary btn--full-width"
              >
                <span>Send Message</span>
                <span className="btn-icon">
                  <IoSend />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
