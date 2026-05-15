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
        gap: "5rem",
        backgroundColor: "#004da8",
        alignItems: "center",
        justifyContent: "space-evenly",
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
          gap: "5rem",
          flexWrap: "wrap",
          justifyContent: "flex-start",
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
            }}
          >
            <li><FooterLink name="Home" /></li>
            <li><FooterLink name="Contact" /></li>
            <li><FooterLink name="About" /></li>
            <li><FooterLink name="Developers" /></li>
            <li><FooterLink name="Portfolio" /></li>
            <li><FooterLink name="Services" /></li>
            {/* Removed Pricing from here */}
            <li><FooterLink name="Donate" /></li>
          </ul>
        </ul>

        {/* Contact */}
        <ul style={footerList}>
          <h4 style={footerCategory}>Contact</h4>
          <Separator />
          <li><FooterLink name="Contact" to="/contact" /></li>
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
            }}
          >
            <li><FooterLink name="Graduates" to="/graduates" /></li>
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
            }}
          >
            <li><FooterLink name="Companies" to="/companies" /></li>
            <li><FooterLink name="Pricing" to="/pricing" /></li>
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
          justifyContent: "flex-end",
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
};

export default Footer;