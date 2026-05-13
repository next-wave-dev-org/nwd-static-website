// src/components/Developer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Developer = ({ name, photo, degree, email, github, linkedin, role }) => {
  return (
    <div className="developer-card">
      <img
        src={require("../images/developers/" + photo)}
        alt={name}
        className="developer-card__image"
      />

      <div className="developer-card__body">
        <h2 className="developer-card__name">{name}</h2>

        {degree && <p className="developer-card__degree">{degree}</p>}
        {role && <p className="developer-card__role">{role}</p>}

        <div className="developer-card__links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}

          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          )}

          {email && (
            <a href={`mailto:${email}`} className="developer-card__email">
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Developer;