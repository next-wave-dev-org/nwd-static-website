import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NWDLogo from "../images/NextWaveDevLogo/NextWaveDev_FINAL_SMALL.jpg";
import { WhiteSpacing } from "./microComponents/navbar/whiteSpacing";
import { Item } from "./microComponents/navbar/item";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHireDropdownOpen, setIsHireDropdownOpen] = useState(false);

  const [hireTimeout, setHireTimeout] = useState(null);
  const [joinTimeout, setJoinTimeout] = useState(null);

  const closeMenus = () => {
    setMenuOpen(false);
    setIsDropdownOpen(false);
    setIsHireDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
        setIsDropdownOpen(false);
        setIsHireDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#004da8",
        padding: "0.75rem 1rem",
        position: "relative",
      }}
    >
      {/* Top Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/Home" onClick={closeMenus}>
          <img
            src={NWDLogo}
            alt="Next Wave Dev Logo"
            style={{ width: "4rem", height: "4rem" }}
          />
        </Link>

        {isMobile && (
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "2rem",
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* Navigation Items */}
      {(!isMobile || menuOpen) && (
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <Item name="Contact" onClick={closeMenus} />
          <WhiteSpacing />
          <Item name="About" onClick={closeMenus} />
          <WhiteSpacing />
          <Item name="Developers" onClick={closeMenus} />
          <WhiteSpacing />
          <Item name="Portfolio" onClick={closeMenus} />
          <WhiteSpacing />
          <Item name="Services" onClick={closeMenus} />
          <WhiteSpacing />

          {/* Hire Us Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => {
              if (!isMobile) {
                if (hireTimeout) clearTimeout(hireTimeout);
                setIsHireDropdownOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                const timeout = setTimeout(() => {
                  setIsHireDropdownOpen(false);
                }, 200);
                setHireTimeout(timeout);
              }
            }}
          >
            <span
              className="nav-dropdown-toggle"
              onClick={() => {
                setIsHireDropdownOpen(!isHireDropdownOpen);
                setIsDropdownOpen(false);
              }}
              style={{ cursor: "pointer", color: "white" }}
            >
              Hire Us
            </span>

            {isHireDropdownOpen && (
              <div className="nav-dropdown-menu">
                <Link
                  to="/companies"
                  className="nav-dropdown-item"
                  onClick={closeMenus}
                >
                  Companies
                </Link>
                <Link
                  to="/pricing"
                  className="nav-dropdown-item"
                  onClick={closeMenus}
                >
                  Pricing
                </Link>
              </div>
            )}
          </div>

          <WhiteSpacing />

          {/* Join Us Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => {
              if (!isMobile) {
                if (joinTimeout) clearTimeout(joinTimeout);
                setIsDropdownOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                const timeout = setTimeout(() => {
                  setIsDropdownOpen(false);
                }, 200);
                setJoinTimeout(timeout);
              }
            }}
          >
            <span
              className="nav-dropdown-toggle"
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setIsHireDropdownOpen(false);
              }}
              style={{ cursor: "pointer", color: "white" }}
            >
              Join Us
            </span>

            {isDropdownOpen && (
              <div className="nav-dropdown-menu">
                <Link
                  to="/graduates"
                  className="nav-dropdown-item"
                  onClick={closeMenus}
                >
                  Graduates
                </Link>

                <Link
                  to="/companies"
                  className="nav-dropdown-item"
                  onClick={closeMenus}
                >
                  Companies
                </Link>
              </div>
            )}
          </div>

          <WhiteSpacing />
          <Item name="Donate" onClick={closeMenus} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;