import { Link } from "react-router-dom";
import { FooterLink } from "./microComponents/footer/footerLink";
import { Separator } from "./microComponents/footer/separator";
import NEXTWAVEDEV from "../images/nextwavedev.png";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "auto",
        height: "120px",
        gap: "5rem",
        backgroundColor: "#004da8",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "auto",
          gap: "5rem",
        }}
      >
        <ul style={{ ...footerList }}>
          <h4 style={{ ...footerCategory }}>Navigation</h4>
          <Separator />
          <ul
            style={{
              ...footerList,
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <li>
              <FooterLink name="Home" />
            </li>
            <li>
              <FooterLink name="Contact" />
            </li>
            <li>
              <FooterLink name="About" />
            </li>
            <li>
              <FooterLink name="Developers" />
            </li>
            <li>
              <FooterLink name="Portfolio" />
            </li>
          </ul>
        </ul>

        <ul>
          <h4 style={{ ...footerCategory }}>Contact Us</h4>
          <Separator />
          <Link
            to={"mailto:nextwavedev.org@gmail.com"}
            style={{ textDecoration: "none" }}
          >
            <li style={{ ...footerList }}>nextwavedev.org@gmail.com</li>
          </Link>
        </ul>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "auto",
          gap: "5rem",
          alignItems: "center",
        }}
      >

        <Link to={"https://northseattle.edu/"}>
          <img
            src={NEXTWAVEDEV}
            alt="next wave dev logo"
            style={{
              width: "6rem",
            }}
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
