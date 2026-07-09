import { Link, useLocation } from "react-router-dom";

export function FooterLink(props) {
  const location = useLocation();

  const linkPath = props.to || "/" + props.name.toLowerCase();

  const currentPath = location.pathname.toLowerCase();
  const currentHash = location.hash.replace("#", "").toLowerCase();

  const isActive = currentPath === linkPath || currentHash === linkPath;

  return (
    <Link
      style={{
        color: isActive ? "#ffd700" : "white",
        textDecoration: isActive ? "underline" : "none",
        fontWeight: isActive ? "600" : "200",
      }}
      to={linkPath}
    >
      {props.name}
    </Link>
  );
}