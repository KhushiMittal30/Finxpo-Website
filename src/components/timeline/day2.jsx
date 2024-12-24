import React, { useState } from "react";
import "./tl.css";
// import TypingEffect2 from "../Organizers/typingEffect2";
// import img1 from "src/assets/Hackathon_home.jpg";
// import img2 from "src/assets/speaker_session_home.jpg";
// import img3 from "src/assets/starup_home.png";
// import img4 from "src/assets/workshop_home.jpg";


const Day2 = () => {
  const [activeItem, setActiveItem] = useState(null);
  const text = "SCHEDULE";

  const img1 = "/assets/Hackathon_home.jpg";
  const img2 = "/assets/speaker_session_home.jpg";
  const img3 = "/assets/starup_home.png";
  const img4 = "/assets/workshop_home.jpg";
  

  const showTimelineContent = (itemId) => {
    setActiveItem(itemId);
  }

    // Scroll to the corresponding content
    // const target = document.querySelector(".timeline-content2");
    // const target = document.querySelector(`[data-car="${itemId}"]`);
  //   const target = document.querySelector(`.p-timeline-content2[data-car="${itemId}"]`);
  //   if (target) {
  //     window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  //   }
  // };
  //  <a href="#google2"></a>
  

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
  <h2 className="timeline-title ubuntu-bold" style={{fontSize:"70px", marginBottom:"100px"}}></h2>
  {/* <hr /> */}
  <p style={{ textAlign: "center", fontSize:"50px", padding:"50px"}} className="ubuntu-bold-italic gradient-text">
    DAY 2
  </p>
  <ul className="timeline">
    {[
      { idd: 7, date: "Opening Ceremony", label: "time" },
      { idd: 8, date: "Speaker Session", label: "Item 2" },
      { idd: 9, date: "Blockchain Workshop", label: "Item 3" },
      { idd: 10, date: "Fireside Chat", label: "Item 4" },
      { idd: 11, date: "Elevator Pitch", label: "Item 4" },
      { idd: 12, date: "Networking Dinner", label: "Item 4" },
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
        idd: 7,
        title: "Item 1",
        date: "May 1, 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.",
        imgSrc: img1
      },
      {
        idd: 8,
        title: "Item 2",
        date: "June 1, 2019",
        content:
          "BL Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        imgSrc:img2
      },
      {
          idd: 9,
          title: "Item 1",
          date: "May 1, 2019",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.",
          imgSrc: img3
        },{
          idd: 10,
          title: "Item 1",
          date: "May 1, 2019",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.",
          imgSrc: img4
        },{
          idd: 11,
          title: "Item 1",
          date: "May 1, 2019",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.",
          imgSrc: img1
        },
        {
          idd: 12,
          title: "Item 1",
          date: "May 1, 2019",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.",
          imgSrc: img1
        }
    ].map(({ idd, title, date, content, imgSrc }) => (
      <div
        key={idd}
        id={"google2"}
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

export default Day2;