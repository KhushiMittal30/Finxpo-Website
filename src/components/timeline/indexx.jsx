import React, { useState } from "react";
import "./tl.css";
import TypingEffect2 from "../Organizers/typingEffect2";
import Day1 from "./day1";
import Day2 from "./day2";
import Day3 from "./day3";
// import img1 from "src/assets/Hackathon_home.jpg";
// import img2 from "src/assets/speaker_session_home.jpg";
// import img3 from "src/assets/starup_home.png";
// import img4 from "src/assets/workshop_home.jpg";


const Timeline = () => {
    return (
    <>
        <Day1 />
        <Day2 />
        <Day3 />
    </>
  );
};

export default Timeline;
