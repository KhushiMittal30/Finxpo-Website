// ChoosePlayerSection.js
import React from "react";
import "./cp.css";
const ChoosePlayerSection = () => {
  return (
    <div className="choose-player">
      <h2>Choose your Player</h2>
      <div className="choose-player__buttons">
        <button className="gradient-button">Game Theory/AI Gaming</button>
        <button className="gradient-button">FinTech/Web 3.0</button>
      </div>
    </div>
  );
};

export default ChoosePlayerSection;
