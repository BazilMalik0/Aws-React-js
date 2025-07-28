import React from "react";
import "./Services.css";
import { services } from "../../data";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>
            Our Services <span className="section-emoji">✨</span>
          </h2>
          <p>Innovative solutions designed to propel your business forward</p>
        </div>

        <div className="services-grid" id="servicesGrid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="technologies">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
