import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./tl.css";
import TypingEffect2 from "../Organizers/typingEffect2";
// import imgg from "../../assets/splatter_bg_aboutus.jpg";


const Timeline = ({tthalf1, tthalf2, day, scheduleItems, images }) => {
  const [activeItem, setActiveItem] = useState(null);

  const showTimelineContent = (itemId) => {
    setActiveItem(itemId);
  };

  const closeCurrentContent = () => {
    setActiveItem(null);
    const timelineTitle = document.querySelector(".timeline-title");
    if (timelineTitle) {
      window.scrollTo({ top: timelineTitle.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="wrap">
      <div className="timeline-wrap">
        <h2
          className="timeline-title ubuntu-bold"
          style={{ fontSize: "70px", marginBottom: "100px" }}
        >
          {tthalf1} <TypingEffect2 text={tthalf2} speed={50} />
        </h2>

        
        <p
          style={{ textAlign: "center", fontSize: "79px", padding: "50px", zIndex:"1000"}}
          className="faster-one-regular gradient-text"
        >
          {day}
        </p>
        <ul className="timeline">
          {scheduleItems.map(({ id, title, label }) => (
            <li
              key={id}
              className={`timeline-item ${
                activeItem === id ? "i-is-active" : ""
              }`}
              onClick={() => showTimelineContent(id)}
            >
              <div className="p-timeline-item">
                <p
                  className="p-timeline-date"
                  style={{
                    margin: "9px 0",
                    fontSize: "30px",
                    padding: "10px 0",
                    lineHeight: "1.3",
                  }}
                >
                  {title}
                </p>
                {/* <span className="p-timeline-carmodel" data-car={id}>
                  {label}
                </span> */}
                <div className="p-timeline-block"></div>
              </div>
            </li>
          ))}
        </ul>
        <div className="timeline-content">

          {scheduleItems.map(({ id, title, content, date,label }) => (
            <div
            key={id}
            className={`p-timeline-content ${
              activeItem === id ? "i-is-active" : ""
              }`}
              
              >
              <div className="timeline-content-card">
                <h3
                  className="timeline-content-title"
                  style={{
                    fontSize: "60px",
                    margin: "20px 0",
                    padding: "10px 0",
                    lineHeight:"1"
                  }}
                >
                  {title}
                </h3>
                <time className="timeline-content-date">{date} : </time>
                <time className="timeline-content-date">{label}</time>
                <p>{content}</p>
                <Link to="/register">
                <button
                  className="btn btn-blauw timeline-content-button"
                  // href="/register"
                  title="Register now"
                >
                  Register Now
                </button>
                </Link>
                {/* <Link to="/register" className="btn btn-blauw timeline-content-button">
                   Register Now
                </Link> */}

                {/* <Link to="/register">
                          <button className="register-btn">Register Here</button>
                </Link> */}
                {/* <Link to="/register" className="register-btn">Register Here</Link> */}

                <div
                  className="close"
                  onClick={() => closeCurrentContent()}
                ></div>
              </div>
              <div className="timeline-content-image">
                <img id="event" src={images[id-1]} alt="Event" />
              </div>
              {/* <img src= {imgg} alt='image' style={{ opacity:"1",position: "relative",left:"10%",top:"62px",height:"100px",width:"1000px",borderRadius:"8px",zIndex:"-1000"}}></img> */}
            </div>
          ))}
        </div>
      </div>
    </div>
      </>
  );
};

export default Timeline;
