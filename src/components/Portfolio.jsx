import React from "react";
import "./Portfolio.css";

import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";

export default function Portfolio() {
  const images = [port1, port2, port3, port1, port2, port3];

  return (
    <div className="pt-4">
      <div className="text-center header pt-4" style={{ color: "#2c3e50" }}>
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
          portfolio component
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line-p me-3"></div>
          <i className="fa-solid fa-star" style={{ color: "#2c3e50" }}></i>
          <div className="line-p ms-3"></div>
        </div>
      </div>

      <div className="portfolio-grid">
        {images.map((src, index) => (
          <div className="portfolio-item" key={index}>
            <div className="image-box">
              <img
                src={src}
                alt={`portfolio-${index}`}
                className="portfolio-img"
              />
              <div className="layer__">
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
