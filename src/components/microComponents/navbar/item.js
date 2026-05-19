import * as React from "react";
import { NavLink } from "react-router-dom";

export function Item(props) {
  const style = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.3rem",
    fontWeight: "600",
  };

  // External links still use <a>
  if (props.external) {
    return (
      <a
        href={props.to}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
      >
        {props.name}
      </a>
    );
  }

  return (
    <NavLink
      to={"/" + props.name}
      className={({ isActive }) =>
        isActive ? "active-nav-link" : ""
      }
      style={style}
    >
      {props.name}
    </NavLink>
  );
}