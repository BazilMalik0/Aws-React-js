// TestimonialCard.js
import React from "react";
import styles from "../TestimonialCard/TeastimonialCard.module.css";

function TestimonialCard({ name, company, rating, text, avatar }) {
  return (
    <div className={styles.testimonialSlide}>
      <div className={styles.testimonialContent}>
        <p>{text}</p>
      </div>
      <div className={styles.testimonialAuthor}>
        <div className={styles.testimonialAvatar}>{avatar}</div>
        <div className={styles.testimonialInfo}>
          <h4>{name}</h4>
          <p>{company}</p>
          <div className={styles.testimonialRating}>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
