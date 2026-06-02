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
            <li><FooterLink name="Home" /></li>
            <li><FooterLink name="Contact" /></li>
            <li><FooterLink name="About" /></li>
            <li><FooterLink name="Developers" /></li>
            <li><FooterLink name="Portfolio" /></li>
            <li><FooterLink name="Services" /></li>
            <li><FooterLink name="Donate" /></li>
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
              justifyContent: "center",
              padding: 0,
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Footer Brand / Social Row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "nowrap",
            gap: "12px",
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
              style={{
                width: "64px",
                height: "64px",
                objectFit: "contain",
              }}
            />
          </a>

          {/* Dynamic Candid Seal */}
          <div
            style={{
              width: "64px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <CandidSeal />
          </div>

          {/* Logo */}
          <Link to={"/"}>
            <img
              src={NEXTWAVEDEV}
              alt="Next Wave Dev logo"
              style={{
                width: "64px",
                height: "64px",
                objectFit: "contain",
              }}
            />
          </Link>
        </div>
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