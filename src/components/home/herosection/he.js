// HeroSection.js
import React from "react";
import "./he.css";
import hero from "../../../assets/hero.jpg";
// import animation from "../../../assets/animationbg2.mp4";
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
        {/* <video src={animation} loop autoPlay muted /> */}
        <img src={hero} alt="hero-img" />
      </div>
    </div>
  );
};

export default HeroSection;
