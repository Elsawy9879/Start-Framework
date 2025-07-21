import React, { useState } from "react";
import "./Portfolio.css";

// استبدل الصور بمساراتك
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";

export default function Portfolio() {
  const images = [port1, port2, port3, port1, port2, port3];

  const [popupImage, setPopupImage] = useState(null); // لتخزين الصورة المختارة

  return (
    <>
      <div className="portfolio-grid">
        {images.map((img, index) => (
          <div className="portfolio-item" key={index}>
            <div className="image-box" onClick={() => setPopupImage(img)}>
              <img src={img} alt="portfolio" className="portfolio-img" />
            </div>
          </div>
        ))}
      </div>

      {/* عند الضغط تظهر الصورة وسط الشاشة */}
      {popupImage && (
        <div className="popup-container" onClick={() => setPopupImage(null)}>
          <img
            src={popupImage}
            alt="popup"
            className="popup-image"
            onClick={(e) => e.stopPropagation()} // عشان الصورة نفسها ما تقفلش لما تضغط عليها
          />
        </div>
      )}
    </>
  );
}
