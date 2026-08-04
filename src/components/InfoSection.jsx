import React from "react";
import { Link } from "react-router-dom";
import "./InfoSection.css";

export default function InfoSection({ title, children }) {
  

  return (
    <section className="info-section">
        <h2 className="info-section-title">{title}</h2>
        
        <div className="info-section-content">   
            {children}
        </div>
    </section>
  );
}