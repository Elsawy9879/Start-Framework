import React, { useState } from "react";
import "./Portfolio.css";

// استبدل هذه بمصفوفة صورك
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";

export default function Portfolio() {
  const images = [port1, port2, port3, port1, port2, port3];

  const [popupImg, setPopupImg] = useState(null); // الصورة المفتوحة
  const [showPopup, setShowPopup] = useState(false); // إظهار الطبقة

  const openPopup = (img) => {
    setPopupImg(img);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupImg(null);
  };

  return (
    <>
      <h2>Portfolio</h2>
      <div className="line-p"></div>
      <div className="portfolio-grid">
        {images.map((img, i) => (
          <div className="portfolio-item" key={i}>
            <div className="image-box" onClick={() => openPopup(img)}>
              <img src={img} alt="portfolio" className="portfolio-img" />
              <div className="layer__">👁️</div>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="modal" onClick={closePopup}>
          <span className="close" onClick={closePopup}>
            &times;
          </span>
          <img
            src={popupImg}
            alt="enlarged"
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // يمنع الإغلاق عند الضغط على الصورة نفسها
          />
        </div>
      )}
    </>
  );
}
