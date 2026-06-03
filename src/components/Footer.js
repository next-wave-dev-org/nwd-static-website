import { Link } from "react-router-dom";
import { FooterLink } from "./microComponents/footer/footerLink";
import { Separator } from "./microComponents/footer/separator";
import NEXTWAVEDEV from "../images/NextWaveDevLogo/NextWaveDev_FINAL_SMALL.jpg";
import LINKEDIN_ICON from "../images/linkedin_logo.png";
import CandidSeal from "./CandidSeal";

const Footer = () => {
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        minHeight: "120px",
        gap: "3rem",
        backgroundColor: "#004da8",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "1rem 2rem",
        boxSizing: "border-box",
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "auto",
          gap: "4rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Navigation */}
        <ul style={footerList}>
          <h4 style={footerCategory}>Navigation</h4>
          <Separator />
          <ul
            style={{
              ...footerList,
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <li><FooterLink name="Contact" currentPath={location.pathname} /></li>
            <li><FooterLink name="About" currentPath={location.pathname} /></li>
            <li><FooterLink name="Developers" currentPath={location.pathname} /></li>
            <li><FooterLink name="Portfolio" currentPath={location.pathname} /></li>
            <li><FooterLink name="Services" currentPath={location.pathname} /></li>
            <li><FooterLink name="Donate" currentPath={location.pathname} /></li>
            
          </ul>
        </ul>

        {/* Join Us */}
        <ul style={footerList}>
          <h4 style={footerCategory}>Join Us</h4>
          <Separator />
          <ul
            style={{
              ...footerList,
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <li><FooterLink name="Graduates" to="/graduates" currentPath={location.pathname} /></li>
            <li><FooterLink name="Volunteer" to="/volunteer" /></li>
            <li><FooterLink name="Apply" to="/apply" /></li>
          </ul>
        </ul>

        {/* Hire Us */}
        <ul style={footerList}>
          <h4 style={footerCategory}>Hire Us</h4>
          <Separator />
          <ul
            style={{
              ...footerList,
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <li><FooterLink name="Companies" to="/companies" currentPath={location.pathname} /></li>
            <li><FooterLink name="Pricing" to="/pricing" currentPath={location.pathname} /></li>
          </ul>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "auto",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/company/next-wave-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LINKEDIN_ICON}
            alt="LinkedIn Icon"
            style={{ width: "64px", height: "64px" }}
          />
        </a>

        {/* Dynamic Candid Seal */}
        <CandidSeal />

        {/* Logo */}
        <Link to={"/"}>
          <img
            src={NEXTWAVEDEV}
            alt="Next Wave Dev logo"
            style={{ width: "6rem", height: "auto" }}
          />
        </Link>
      </div>
    </div>
  );
};

const footerCategory = {
  fontWeight: 600,
  textAlign: "center",
  color: "white",
};

const footerList = {
  listStyleType: "none",
  fontWeight: 200,
  color: "white",
  padding: 0,
  margin: 0,
};

export default Footer;