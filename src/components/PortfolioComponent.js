import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PortfolioComponent.css";

export default function PortfolioComponent({
  title,
  company,
  status,
  screenshot,
  description,
  socialMedia,
  reverse = false,
}) {
  return (
    <section className={`portfolio-tile ${reverse ? "reverse" : ""}`}>
      <div className="portfolio-tile-image">
        <img src={screenshot} alt={title} />
      </div>

      <div className="portfolio-tile-content">
        <h2>{title}</h2>

        <div className="portfolio-tile-company">
          {company} — {status}
        </div>

        <div className="portfolio-tile-links">
          {socialMedia.map((item, index) => (
            <a
              href={item.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>

        <p>{description}</p>
      </div>
    </section>
  );
}