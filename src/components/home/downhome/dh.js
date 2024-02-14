// DownHomeSection.js
import React from "react";
import "./dh.css";
import downhome from "../../../assets/downhome.jpg";

const DownHomeSection = () => {
  return (
    <div className="down-home">
      <div className="down-home__buttons">
        <button
          className="gradient-button"
          style={{
            top: "-40px",
            left: "230px",
            height: "79px",
            width: "392px",
          }}
        >
          Speaker Sessions
        </button>
        <button
          className="gradient-button"
          style={{
            top: "460px",
            left: "-180px",
            height: "79px",
            width: "288px",
          }}
        >
          Ideathon
        </button>
        <button
          className="gradient-button"
          style={{
            top: "-200px",
            left: "-130px",
            height: "79px",
            width: "288px",
          }}
        >
          Workshops
        </button>
      </div>
      <div className="down-home_img">
        <img src={downhome} alt="Down Home" />
      </div>
    </div>
  );
};

export default DownHomeSection;
