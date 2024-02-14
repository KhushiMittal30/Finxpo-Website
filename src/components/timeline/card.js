import React from "react";
import "./tl.css";

const Card = ({ title, details }) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-details">{details}</div>
    </div>
  );
};

export default Card;
