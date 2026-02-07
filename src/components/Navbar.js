import React from "react";
import { Link } from "react-router-dom";
import NSCADLOGO from '../images/nextwavedev.png';
import { WhiteSpacing } from "./microComponents/navbar/whiteSpacing";
import { Item } from "./microComponents/navbar/item";

const Navbar = () => {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  // Dropdown state for Join Us menu
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  // Check if mobile
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Close mobile menu when resizing to desktop
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: isMobile ? "auto" : "95px",
        backgroundColor: "#004da8",
        padding: isMobile ? "1rem" : "0.5rem 1rem",
        position: "relative",
      }}
    >
      {/* Logo and Hamburger Container */}
      <div style={{
        display: "flex",
        width: isMobile ? "100%" : "auto",
        justifyContent: isMobile ? "space-between" : "flex-start",
        alignItems: "center",
      }}>
        <Link to={"/"}>
          <img
            src={NSCADLOGO}
            alt="Next Wave Dev Logo"
            style={{
              width: "4rem",
              height: "4rem",
              marginRight: isMobile ? "0" : ".5rem",
            }}
          />
        </Link>

        {/* Hamburger Menu Button - Mobile Only */}
        {isMobile && (
          <button
            className="hamburger-menu"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span style={{
              width: "25px",
              height: "3px",
              backgroundColor: "white",
              display: "block",
              transition: "all 0.3s",
              transform: isMobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }} />
            <span style={{
              width: "25px",
              height: "3px",
              backgroundColor: "white",
              display: "block",
              transition: "all 0.3s",
              opacity: isMobileMenuOpen ? "0" : "1",
            }} />
            <span style={{
              width: "25px",
              height: "3px",
              backgroundColor: "white",
              display: "block",
              transition: "all 0.3s",
              transform: isMobileMenuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
            }} />
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <div
        className="nav-links"
        style={{
          display: isMobile ? (isMobileMenuOpen ? "flex" : "none") : "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          gap: isMobile ? "0.5rem" : "1rem",
          width: isMobile ? "100%" : "auto",
          paddingTop: isMobile ? "1rem" : "0",
        }}
      >
        <Item name={"Contact"} onClick={closeMobileMenu} />
        {!isMobile && <WhiteSpacing />}
        <Item name={"About"} onClick={closeMobileMenu} />
        {!isMobile && <WhiteSpacing />}
        <Item name={"Developers"} onClick={closeMobileMenu} />
        {!isMobile && <WhiteSpacing />}
        <Item name={"Portfolio"} onClick={closeMobileMenu} />
        {!isMobile && <WhiteSpacing />}

        <div className="nav-dropdown">
          <span
            className="nav-dropdown-toggle"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsDropdownOpen(!isDropdownOpen);
              }
            }}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            Join Us
          </span>
          {isDropdownOpen && (
            <div className="nav-dropdown-menu">
              <Link
                to="/Graduates"
                className="nav-dropdown-item"
                onClick={closeMobileMenu}
              >
                Graduates
              </Link>
              <Link
                to="/Companies"
                className="nav-dropdown-item"
                onClick={closeMobileMenu}
              >
                Companies
              </Link>
            </div>
          )}
        </div>

        {!isMobile && <WhiteSpacing />}
        <Item name="Shop" to="https://bonfire.com/store/next-wave-dev-store/" external onClick={closeMobileMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
