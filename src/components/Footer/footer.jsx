import React from "react";
import "./footer.css";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedIn.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr />
      <div className="footer">
        <div>
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedIn} alt="" />
        </div>
        <img src={logo} alt="" />
        <div className="blur blur-footer-1"></div>
        <div className="blur blur-footer-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
