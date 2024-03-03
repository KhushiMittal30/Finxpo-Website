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
      <button className="gradient-button1 _1tl">2 Feb - Workshop</button>
      <img className="vectors" src={Vector1} alt="Tl" style={{ left: 250 }} />
      <button className="gradient-button1 _2tl">3 Feb - Speaker Session</button>
      <img className="vectors" src={Vector2} alt="Tl" style={{ left: 650 }} />
      <button className="gradient-button1 _4tl">4 Feb - Game-a-Thon</button>
      <img className="vectors" src={Vector3} alt="Tl" style={{ left: 1150 }} />
      <button className="gradient-button1 _3tl">5 Feb - Ideathon</button>
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
          title="Event 3"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          title="Event 4"
          details="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        {/* Add more Card components as needed */}
      </div>
    </div>
  );
};

export default Timeline;
