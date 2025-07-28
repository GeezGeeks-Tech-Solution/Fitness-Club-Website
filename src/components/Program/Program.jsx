import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";
import rigthArrow from "../../assets/rightArrow.png";
const Program = () => {
  return (
    <section className="program">
      {/* Program Header */}
      <div className="program-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>
      {/* Program Categories */}

      <div className="program-categories">
        {programsData.map((program, id) => {
          const { image, heading, details } = program;
          return (
            <div className="category" key={id}>
              {image}
              <span>{heading}</span>
              <span>{details}</span>
              <div>
                <span>Join Now</span>
                <img src={rigthArrow} alt="right-arrow" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Program;
