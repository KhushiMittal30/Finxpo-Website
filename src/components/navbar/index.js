// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/backlogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <div className="navbar__links">
        <Link to="/timeline">Event Timeline</Link>
        <Link to="/about">About Us</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
