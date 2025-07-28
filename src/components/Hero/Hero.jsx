import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import CountUp from "react-countup"
import { Link } from "react-scroll";
const Hero = () => {
  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <section className="hero">
      <div className="left-h">
        <Header />
        <div className="blur blur-hero"></div>
        {/* The best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div className="hero-sub-text">
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest.
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <CountUp start={80} end={140} duration={3} prefix="+"></CountUp>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <CountUp start={800} end={975} duration={4} prefix="+"></CountUp>
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <CountUp start={0} end={50} duration={2} prefix="+"></CountUp>
            </span>
            <span>fitness programs </span>
          </div>
        </div>
        {/* Hero buttons */}
        <div className="hero-btns">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ ...transition, duration: 0.2 }}
            className="btn"
          >
            <Link to = "email-container" smooth = {true}> Get Started</Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ ...transition, duration: 0.2 }}
            className="btn"
          >
            Learn More
          </motion.button>
        </div>
      </div>
      <div className="right-h">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ ...transition, duration: 0.2 }}
          className="btn"
        >
          <Link to="email-container" smooth={true}>
            Join Now
          </Link>
        </motion.button>
        {/* Heart Rate */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="heart-image" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* Hero Image */}
        <div>
          <img src={hero_image} alt="hero-image" className="hero-image" />
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            src={hero_image_back}
            alt="hero-image-back"
            className="hero-image-back"
          />
        </div>
        {/* Calories */}
        <motion.div
          initial={{ right: "56rem" }}
          whileInView={{ right: "42rem" }}
          transition={{ ...transition, type: "tween" }}
          className="calories animate-right"
        >
          <img src={calories} alt="" className="calories-image" />
          <div>
            <span>Caloires Burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
