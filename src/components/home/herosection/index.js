// HeroSection.js
import React from "react";
import "./he.css";
import hero from "../../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <div className="hero">
      <img src={hero} alt="Hero" />
      <div className="hero__text">
        MIT’s Biggest Fin-Tech Expo Welcomes you Aboard
      </div>
    </div>
  );
};

export default HeroSection;
