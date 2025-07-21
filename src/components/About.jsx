import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="main">
        <div className="header-about">
          <h2 className="about-title">About Component</h2>
          <div className="lines">
            <div className="line-ab"></div>
            <i className="fa-solid fa-star" style={{ color: "#ffffff" }}></i>
            <div className="line-ab"></div>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes <br /> the complete source files including HTML,
              CSS, and JavaScript as well as <br /> optional SASS stylesheets
              for easy customization.
            </p>
          </div>
          <div className="content">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes <br /> the complete source files including HTML,
              CSS, and JavaScript as well as <br /> optional SASS stylesheets
              for easy customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
