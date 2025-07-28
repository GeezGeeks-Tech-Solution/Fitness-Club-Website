import React, { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png"
import "./Testimonial.css";
import {animate, motion} from "framer-motion"
const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const tlenght = testimonialsData.length;
  const transition = {type:"spring",duration:3}
  return (
    <section className="testimonial">
      <div className="left-t">
        <span>TESTIMONIAL</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        
        >{testimonialsData[index].review}</motion.span>
        <div>
          <span>{testimonialsData[index].name} - </span>
          <span>{testimonialsData[index].status}</span>
        </div>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{opacity: 1, x :0}}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{...transition, duration:2}}
        ></motion.div>
        <motion.img
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          
          src={testimonialsData[index].image} alt="" />
        <div>
          <img src={leftArrow} alt="left arrow" onClick={() => {
            index==0?setIndex(tlenght-1):setIndex((prev)=>prev-1)
          }} />
          <img src={rightArrow} alt="right arrow" onClick={() => {
            index==tlenght-1?setIndex(0):setIndex(prev=>prev+1)
          }} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
