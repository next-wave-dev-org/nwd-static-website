import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ children, variant = "primary", to, href }) {
  const className = `btn btn-${variant}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}