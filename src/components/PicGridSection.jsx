import React from "react";
import picgridImage from "../asset/create2.jpg";

function PicGridSection() {
  return (
    <div className="landing-pic-grid">
      <div className="pic-grid">
        <img src={picgridImage} alt="" srcset="" />
      </div>
      <div className="pic-grid">
        <img src={picgridImage} alt="" srcset="" />
      </div>
      <div className="pic-grid">
        <img src={picgridImage} alt="" srcset="" />
      </div>
    </div>
  );
}

export default PicGridSection;
