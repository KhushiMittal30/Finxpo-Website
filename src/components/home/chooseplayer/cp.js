import React, { useEffect } from "react";
import "./cp.css";
import { animateScroll as scroll } from "react-scroll";

const ChoosePlayerSection = () => {
  const navigateToWeb3 = () => {
    // Use smooth scroll to navigate to the web3 section
    scroll.scrollTo(document.getElementById("web3-section").offsetTop, {
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    // Set scroll animation when the component mounts
    const choosePlayerSection = document.querySelector(".choose-player");
    choosePlayerSection.style.opacity = 0;
    choosePlayerSection.style.transform = "translateY(50px)";

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementOffsetTop = choosePlayerSection.offsetTop;

      if (scrollPosition > elementOffsetTop - window.innerHeight / 1.5) {
        choosePlayerSection.style.opacity = 1;
        choosePlayerSection.style.transform = "translateY(0)";
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
    <div className="choose-player">
      <h2>Choose your Player</h2>
      <div className="choose-player__buttons">
        <button className="gradient-button">Game Theory/AI Gaming</button>
        <button className="gradient-button" onClick={navigateToWeb3}>
          FinTech/Web 3.0
        </button>
      </div>
    </div>
  );
};

export default ChoosePlayerSection;
