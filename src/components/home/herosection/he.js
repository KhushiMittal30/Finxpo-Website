// HeroSection.js
import React from "react";
import "./he.css";
import hero from "../../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__text">MIT’s Biggest Fin-Tech Expo</div>
        <div className="hero__text">Welcomes you Aboard</div>
        <button className="register-btn">Register Here</button>
      </div>
      <div className="hero_img">
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
