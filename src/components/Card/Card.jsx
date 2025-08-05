import React from "react";
import styles from "./Card.module.css";

function Card({ image, title, category, description, technologies, icon }) {
  return (
    <div className={styles["portfolio-card"]}>
      <div
        className={styles["portfolio-image"]}
        style={{ backgroundColor: image }}
      >
        <span
          className="material-icons"
          style={{ fontSize: "2.5rem", color: "#fff" }}
        >
          {icon}
        </span>
      </div>

      <div className={styles["portfolio-content"]}>
        <div className={styles["portfolio-header"]}>
          <h3>{title}</h3>
          <span className={styles["portfolio-category"]}>{category}</span>
        </div>

        <p className={styles["portfolio-description"]}>{description}</p>

        <div className={styles["portfolio-tech"]}>
          {technologies.map((tech, index) => (
            <span key={index} className={`tech-tag btn ${styles.tech}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
