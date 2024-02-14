// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./foot.css";
import clublogo from "../../assets/numerates.png";
import insta from "../../assets/Instagram.png";
import linkedin from "../../assets/LinkedIn.png";
import mail from "../../assets/Email.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="back1" />
      <div className="footer__logo">
        <img src={clublogo} alt="Logo" />
      </div>

      <div className="footer__left">
        <Link to="/about">About us</Link>
        <Link to="/">Visit Club Website</Link>
        <Link to="/sponsors">Sponsors</Link>
      </div>
      <div className="footer__right">
        <Link to="/terms">Terms and conditions</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <div className="footer__rightbottom">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Insta" />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mail} alt="Mail" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
