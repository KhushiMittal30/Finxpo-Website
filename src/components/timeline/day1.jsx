import React, { useState } from "react";
import "./tl.css";
import TypingEffect2 from "../Organizers/typingEffect2";
// import img1 from "src/assets/Hackathon_home.jpg";
// import img2 from "src/assets/speaker_session_home.jpg";
// import img3 from "src/assets/starup_home.png";
// import img4 from "src/assets/workshop_home.jpg";


const Day1 = () => {
  const [activeItem, setActiveItem] = useState(null);
  const text = "SCHEDULE";

  const img1 = "/assets/Hackathon_home.jpg";
  const img2 = "/assets/speaker_session_home.jpg";
  const img3 = "/assets/starup_home.png";
  const img4 = "/assets/workshop_home.jpg";
  

  const showTimelineContent = (itemId) => {
    setActiveItem(itemId);

    // Scroll to the corresponding content
    const target = document.querySelector(`.p-timeline-content[data-car="${itemId}"]`);
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }
    // <a href="#google"></a>

  };

  const closeCurrentContent = (itemId) => {
    setActiveItem(null);

    // Scroll back to the timeline title
    const timelineTitle = document.querySelector(".timeline-title");
    if (timelineTitle) {
      window.scrollTo({ top: timelineTitle.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="wrap">
      <div className="timeline-wrap">
        <h2 className="timeline-title ubuntu-bold" style={{fontSize:"70px", marginBottom:"100px"}}>EVENT <TypingEffect2 text={text} speed={50} /></h2>
        <hr />
        <br/><br/><br/> <br/><br/><br/>

          <p style={{ textAlign: "center", fontSize:"50px", padding:"50px"}} className="ubuntu-bold-italic gradient-text">
          DAY 1
        </p>
        <ul className="timeline">
          {[
            { idd: 1, date: "Opening Ceremony", label: "time" },
            { idd: 2, date: "Speaker Session", label: "Item 2" },
            { idd: 3, date: "Blockchain Workshop", label: "Item 3" },
            { idd: 4, date: "Fireside Chat", label: "Item 4" },
            { idd: 5, date: "Elevator Pitch", label: "Item 4" },
            { idd: 6, date: "Networking Dinner", label: "Item 4" },
          ].map(({ idd, date, label }) => (
            <li
              key={idd}
              className={`timeline-item ${activeItem === idd ? "i-is-active" : ""}`}
              onClick={() => showTimelineContent(idd)}
            >
              <div className="p-timeline-item">
                <p className="p-timeline-date" style={{margin:"9px 0", fontSize:"30px", padding:"10px 0" , lineHeight: "1.3"}} >
                  {date}
                </p>
                <span className="p-timeline-carmodel" data-car={idd}>
                  {label}
                </span>
                <div className="p-timeline-block"></div>
              </div>
            </li>
          ))}
        </ul>
        <div className="timeline-content">
          {[
            {
              idd: 1,
              title: "Elevator Pitch And Research Challenge",
              date: "March 20, 2025",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.",
              imgSrc: img1
            },
            {
              idd: 2,
              title: "Blockchain Workshop",
              date: "March 20, 2025",
              content:
                "BL Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
              imgSrc:img2
            },
            {
                idd: 3,
                title: "Web3 and AI Hackathon",
                date: "March 20, 2025",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.",
                imgSrc: img3
              },
          ].map(({ idd, title, date, content, imgSrc }) => (
            <div
              key={idd}
              id={"google"}
              className={`p-timeline-content ${activeItem === idd ? "i-is-active" : ""}`}
              data-car={idd}
            >
              <div className="timeline-content-card">
                <h3 className={`timeline-content-title`} style={{fontSize:"60px",margin:"20px 0", padding:"30px 0"}}>{title}</h3>
                <time className="timeline-content-date" dateTime={`2019-${idd.toString().padStart(2, "0")}-01`}>
                  Release date: {date}
                </time>
                <p>{content}</p>
                <a className="btn btn-blauw timeline-content-button" href="#" title="Register now">
                  Register Now
                </a>
                <div className="close" onClick={() => closeCurrentContent(idd)}></div>
              </div>
              <div className="timeline-content-image">
                <img src={imgSrc} alt="Placeholder" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
</>
);
}

export default Day1;
