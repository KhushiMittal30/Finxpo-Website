import React from "react";
import "./web.css";
import Down from "./../../assets/webdown.png";
import Events from "./../../assets/webevents.png";

const Web3 = () => {
  return (
    <div className="holder2">
      <div className="image1">
        <img src={Events} alt="Event" />
      </div>
      <div className="speaker__buttons">
        <button className="gradient-button">Speaker Shesh</button>
        <button className="gradient-button">WorkShop</button>
      </div>
      <div className="image2">
        <img src={Down} alt="Down" />
      </div>
    </div>
  );
};

export default Web3;
