import React, { useState } from "react";
import "./Portfolio.css";
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";

export default function Portfolio() {
  const images = [port1, port2, port3, port1, port2, port3];
  const [popupImage, setPopupImage] = useState(null);

  return (
    <>
      <div className="portfolio-grid">
        {images.map((img, index) => (
          <div className="portfolio-item" key={index}>
            <div className="image-box" onClick={() => setPopupImage(img)}>
              <img src={img} alt="portfolio" className="portfolio-img" />
              <div className="layer__">+</div>
            </div>
          </div>
        ))}
      </div>

      {popupImage && (
        <div className="popup-container" onClick={() => setPopupImage(null)}>
          <img
            src={popupImage}
            alt="Zoomed"
            className="popup-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
