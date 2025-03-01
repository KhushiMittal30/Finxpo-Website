// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/backlogo.png";
import logomit from "../../assets/MIT-WPU_Full_Logo_White.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div style={{ paddingRight: "100px", height: "auto", width: "400px" }}>
        <img src={logomit} alt="Logo" />
      </div>
      <div className="navbar__links  " style={{ opacity: "1" }}>
        <Link to="/">Home</Link>
        <Link to="/timeline">Event Timeline</Link>
        <Link to="/about">About Us</Link>
        <Link to="/speakers">Guests</Link>
        <Link to="/register">Register</Link>
      </div>
      <div className="navbar__logo" style={{ paddingLeft: "170px" }}>
        <img src={logo} alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
