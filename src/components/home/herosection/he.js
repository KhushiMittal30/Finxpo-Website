// HeroSection.js
import React from "react";
import "./he.css";
import hero from "../../../assets/hero.jpg";
// import animation from "../../../assets/animationbg2.mp4";
import { Link } from "react-router-dom";
// import TypingEffect from "../../typingEffect/typingEffect.jsx";
import TypingEffect2 from "../../Organizers/typingEffect2";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        
        <div className="hero__text ubuntu-regular gradient-text">MIT’s Biggest Fin-Tech Expo</div>
        <div className="hero__text _1he">Welcomes you Aboard</div>
        {/* <TypingEffect2 className="hero__text _1he" text={"Welcomes you Abroad"} speed={150} /> */}
        <Link to="/timeline">
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
