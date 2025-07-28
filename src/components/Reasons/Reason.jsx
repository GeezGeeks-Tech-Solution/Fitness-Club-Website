import React from "react";
import "./reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

const Reason = () => {
  return (
    <section className="reason">
      {/* Left images */}
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      {/* Why choose us */}
      <div className="right-r">
        <div>
          <span>Some reasons</span>
          <div className="why-us">
            <span className="stroke-text">Why</span>
            <span>choose us?</span>
          </div>
          <div className="offer-list">
            <div>
              <img src={tick} alt="" />
              <span>over 140+ experts coachs</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>train smarter and faster than before</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>1 free program for new member</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>reliable partners</span>
            </div>
          </div>
          {/* partners */}
          <div className="partners">
            <span>OUR PARTNERS</span>
            <div>
              <img src={nb} alt="" />
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
