// HeroSection.js
import React from "react";
import "./he.css";
import hero from "../../../assets/hero.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        
        <div className="hero__text">MIT’s Biggest Fin-Tech Expo</div>
        <div className="hero__text _1he">Welcomes you Aboard</div>
        <Link to="/register">
          <button className="register-btn">Register Here</button>
        </Link>
      </div>
      <div className="hero_img">
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
