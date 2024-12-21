// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/backlogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar__logo" style={{paddingRight:"250px"}}>
          <img src={logo} alt="Logo" />
        </div>
      <div className="navbar__links" style={{opacity:"1"}}>
      <Link to="/">Home</Link>
        <Link to="/timeline">Event Timeline</Link>
        <Link to="/about">About Us</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/register">Register</Link>
      </div>
      <div className="navbar__logo" style={{paddingLeft:"250px"}}>
          <img src={logo} alt="Logo" />
        </div>
    </nav>
  );
};

export default Navbar;
