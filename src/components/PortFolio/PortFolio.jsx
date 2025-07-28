import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./PortFolio.module.css";
import { portfolio } from "../../data";

function PortFolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  // Filter portfolio items based on the active filter
  // If "all" is selected, show all items
  // Otherwise, filter by category
  // This logic is used to dynamically render the portfolio items based on the selected filter
  const filteredPortfolio =
    activeFilter === "all"
      ? portfolio
      : portfolio.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles["section-header"]}>
          <h2>
            Our Portfolio <span className={styles["section-emoji"]}>🖼️</span>
          </h2>
          <p>Showcasing our successful projects and amazing results</p>
        </div>
        <div className={styles["portfolio-filter"]} id="portfolioFilter">
          <button
            className={`${styles["filter-btn"]} ${
              activeFilter === "all" ? styles.active : ""
            }`}
            data-filter="all"
            onClick={() => handleFilterClick("all")}
          >
            All Projects
          </button>
          <button
            className={`${styles["filter-btn"]} ${
              activeFilter === "Web Development" ? styles.active : ""
            }`}
            data-filter="Web Development"
            onClick={() => handleFilterClick("Web Development")}
          >
            Web Development
          </button>
          <button
            className={`${styles["filter-btn"]} ${
              activeFilter === "Mobile Development" ? styles.active : ""
            }`}
            data-filter="Mobile Development"
            onClick={() => handleFilterClick("Mobile Development")}
          >
            Mobile Development
          </button>
          <button
            className={`${styles["filter-btn"]} ${
              activeFilter === "AI & Machine Learning" ? styles.active : ""
            }`}
            data-filter="AI & Machine Learning"
            onClick={() => handleFilterClick("AI & Machine Learning")}
          >
            AI & ML
          </button>
        </div>
        <div className={styles["portfolio-grid"]} id="portfolioGrid">
          {filteredPortfolio.map((item) => (
            <Card
              key={item.id}
              image={item.color}
              title={item.title}
              category={item.category}
              description={item.description}
              technologies={item.technologies}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortFolio;
