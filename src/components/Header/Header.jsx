import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const [isMobile, setISMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleResize = () => setISMobile(window.innerWidth <= 768)
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('resize',handleResize)
    }
  }, [])

  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo-img" />

      {/* Desktop menu: always visible */}
      <ul
        className="header-menu desktop-screen
      "
      >
        <li>
          <Link to="hero" smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="reason" smooth={true}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="plans" smooth={true}>
            Plans
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true}>
            Testimonials
          </Link>
        </li>
      </ul>
      {/* Mobile: show bars icon, toggle menu */}
      {isMobile && (
        <nav className="mobile-nav">
          {!menuOpen && (
            <div
              style={{
                backgroundColor: "var(--appColor)",
                padding: "0.5rem",
                borderRadius: "5px",
              }}
              onClick={toggleMenu}
            >
              <img
                src={Bars}
                alt=""
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            </div>
          )}
          {menuOpen && (
            <ul className="header-menu mobile-menu">
              <li>
                <Link onClick={toggleMenu} to="hero" smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="program" smooth={true}>
                  Programs
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="reason" smooth={true}>
                  Why us
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="plans" smooth={true}>
                  Plans
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="testimonial" smooth={true}>
                  Testimonials
                </Link>
              </li>
            </ul>
          )}
        </nav>
      )}
    </div>
  );
};

export default Header;
