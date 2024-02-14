import React, { useEffect } from "react";
import "./dh.css";
import downhome from "../../../assets/downhome.jpg";

const DownHomeSection = () => {
  useEffect(() => {
    // Set scroll animation when the component mounts
    const downHomeSection = document.querySelector(".down-home");
    const buttons = document.querySelectorAll(".gradient-button");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementOffsetTop = downHomeSection.offsetTop;

      if (scrollPosition > elementOffsetTop - window.innerHeight / 1.5) {
        downHomeSection.style.opacity = 1;
        downHomeSection.style.transform = "translateY(0)";

        buttons.forEach((button) => {
          button.style.opacity = 1;
          button.style.transform = "translateY(0)";
        });

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="down-home">
      <div className="down-home__buttons">
        <button
          className="gradient-button"
          style={{
            top: "450px",
            left: "90px",
            height: "79px",
            width: "392px",
          }}
        >
          Speaker Sessions
        </button>
        <button
          className="gradient-button"
          style={{
            top: "900px",
            left: "70px",
            height: "79px",
            width: "288px",
          }}
        >
          Ideathon
        </button>
        <button
          className="gradient-button"
          style={{
            top: "520px",
            left: "-180px",
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
