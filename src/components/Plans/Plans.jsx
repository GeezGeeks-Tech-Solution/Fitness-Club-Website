import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import {motion} from "framer-motion"

const Plans = () => {
  const transition = {duration: 2}
  return (
    <section className="plans">
      <div className="blur blur-plans-1"></div>
      <div className="blur blur-plans-2"></div>
      {/* Plans header */}
      <div className="plans-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      {/* plans card */}
      <div className="plans-card">
        {plansData.map((plan, id) => {
          const { icon, name, price, features } = plan;
          return (
            <div className="card" key={id}>
              {icon}
              <span>{name}</span>
              <span>$ {price}</span>
              {features.map((feature, i) => (
                <div className="features" key={i}>
                  <img src={whiteTick} />
                  <span>{feature}</span>
                </div>
              ))}
              <div className="card-lower-section">
                <span>See more benefits -&gt;</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                whileTap ={{ scale: 0.89 }}
                  className="btn">Join Now</motion.button>
              </div>
            </div>
          );
        })}
             
      </div>
    </section>
  );
};

export default Plans;
