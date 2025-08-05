import React, { useState, useEffect } from "react";
import "./BackToTopButton.css";
import { FaArrowUp } from "react-icons/fa";
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      id="backToTop"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <span>
        <FaArrowUp />
      </span>
    </button>
  );
}

export default BackToTop;
