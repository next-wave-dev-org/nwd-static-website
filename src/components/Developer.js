// src/components/Developer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Developer = ({ name, photo, degree, website, github, linkedin, role }) => {
  return (
    <div className="developer-card">
      <img
        src={require("../images/developers/" + photo)}
        alt={name}
        className="developer-card__image"
      />
      <div className='developers-flexcolumn__developer-flex-item__info-div'>
        <div className='st-fl__st-fl-i__in-div__text'>
          <div className='st-fl__st-fl-i__in-div__text__heading'>
            <h2 style={styles.name}>{name}</h2>
            <p className='developer-role'>{role}</p>
          </div>

          {/* REPLACED about → degree */}
          <p style={styles.about}>{degree}</p>
        </div>
                     </div>
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

          {/* REPLACED email → website */}
          {website && (
            <p style={styles.contact}>
              <a href={website} target="_blank" rel="noopener noreferrer" style={styles.link}>
                Portfolio
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  name: { fontSize: '1.5rem', marginBottom: '8px' },
  about: { fontSize: '1rem', marginBottom: '8px' },
  contact: { fontSize: '1rem', marginBottom: '8px' },
  link: { color: '#007bff', textDecoration: 'none', fontSize: '1rem' },
};

export default Developer;
