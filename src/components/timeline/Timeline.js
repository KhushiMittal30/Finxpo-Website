import React, { useState } from "react";
import "./tl.css";
import TypingEffect2 from "../Organizers/typingEffect2";

const Timeline = ({ tthalf1, tthalf2,day, scheduleItems, images }) => {
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
    <div className="wrap">
      <div className="timeline-wrap">
        <h2
          className="timeline-title ubuntu-bold"
          style={{ fontSize: "70px", marginBottom: "100px" }}
        >
          {tthalf1} <TypingEffect2 text={tthalf2} speed={50} />
        </h2>
        <p
          style={{ textAlign: "center", fontSize: "50px", padding: "50px" }}
          className="ubuntu-bold-italic gradient-text"
        >
          {day}
        </p>
        <ul className="timeline">
          {scheduleItems.map(({ id, date, label }) => (
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
                  {date}
                </p>
                <span className="p-timeline-carmodel" data-car={id}>
                  {label}
                </span>
                <div className="p-timeline-block"></div>
              </div>
            </li>
          ))}
        </ul>
        <div className="timeline-content">
          {scheduleItems.map(({ id, title, content, date }) => (
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
                    padding: "30px 0",
                  }}
                >
                  {title}
                </h3>
                <time className="timeline-content-date">{date}</time>
                <p>{content}</p>
                <a
                  className="btn btn-blauw timeline-content-button"
                  href="#"
                  title="Register now"
                >
                  Register Now
                </a>
                <div
                  className="close"
                  onClick={() => closeCurrentContent()}
                ></div>
              </div>
              <div className="timeline-content-image">
                <img src={images[id - 1]} alt="Event" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
