import React from "react";
import Card from "./card";
import "./tl.css";
import Timeback from "./../../assets/timeline.png";
import Vector1 from "./../../assets/Vector 1.png";
import Vector2 from "./../../assets/Vector 2.png";
import Vector3 from "./../../assets/Vector 3.png";
import Vector4 from "./../../assets/Vector 4.png";

const Timeline = () => {
  return (
    <div className="holder1">
      <div className="imgage1">
        <img src={Timeback} alt="Tl" />
      </div>
      <button
        className="gradient-button1"
        style={{
          top: "400px",
          left: "330px",
          height: "79px",
          width: "354px",
        }}
      >
        2 Feb - Workshop
      </button>
      <img className="vectors" src={Vector1} alt="Tl" style={{ left: 250 }} />
      <button
        className="gradient-button1"
        style={{
          bottom: "0px",
          left: "200px",
          height: "79px",
          width: "470px",
        }}
      >
        3 Feb - Speaker Session
      </button>
      <img className="vectors" src={Vector2} alt="Tl" style={{ left: 650 }} />
      <button
        className="gradient-button1"
        style={{
          bottom: "160px",
          right: "200px",
          height: "79px",
          width: "354px",
        }}
      >
        5 Feb - Ideathon
      </button>
      <img className="vectors" src={Vector3} alt="Tl" style={{ left: 1150 }} />
      <button
        className="gradient-button1"
        style={{
          bottom: "330px",
          right: "250px",
          height: "79px",
          width: "421px",
        }}
      >
        4 Feb - Game-a-Thon
      </button>
      <img className="vectors" src={Vector4} alt="Tl" style={{ left: 1450 }} />

      <div className="card-container">
        <Card
          title="Event 1"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          title="Event 2"
          details="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Card
          title="Event 1"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          title="Event 2"
          details="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        {/* Add more Card components as needed */}
      </div>
    </div>
  );
};

export default Timeline;
