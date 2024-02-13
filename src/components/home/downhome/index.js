// DownHomeSection.js
import React from 'react';
import "./dh.css";
const DownHomeSection = () => {
  return (
    <div className="down-home">
      <img src="downhome.jpg" alt="Down Home" />
      <div className="down-home__buttons">
        <button className="gradient-button">Speaker Sessions</button>
        <button className="gradient-button">Workshops</button>
        <button className="gradient-button">Ideathon</button>
      </div>
    </div>
  );
};

export default DownHomeSection;
