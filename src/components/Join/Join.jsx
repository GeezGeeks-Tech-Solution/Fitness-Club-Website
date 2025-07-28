import React, { useRef, useState } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion"
const Join = () => {
  const transition = {duration: 0.5}
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get("user_name")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("Phone_number")?.trim();
    let errorMsg = "";
    if (!name) {
      errorMsg = "Please enter your full name.";
    } else if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      errorMsg = "Please enter a valid email address.";
    } else if (!phone || !/^\d{7,15}$/.test(phone.replace(/\D/g, ""))) {
      errorMsg = "Please enter a valid phone number (7-15 digits).";
    }
    if (errorMsg) {
      setError(true);
      setErrorMessage(errorMsg);
      return;
    } else {
      setError(false);
      setErrorMessage("");
    }

    emailjs
      .sendForm("service_at3rebb", "template_cvzegbc", form.current, {
        publicKey: "JyCTi4z-uAq3-palW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
    );
    

  };
  return (
    <section className="join">
      <div className="left-j">
        <div></div>
        <div>
          <div>
            <span className="stroke-text">READY TO</span>
            <span>YOUR BODY</span>
          </div>
          <div>
            <span>LEVEL UP</span>
            <span className="stroke-text">WITH US</span>
          </div>
        </div>
      </div>

      {/* right section */}
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <div className="error-display">
            {error && <span>{errorMessage}</span>}
          </div>
          <label htmlFor="user_name">Full Name</label>
          <input type="text" placeholder="Enter full name" name="user_name" />

          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="text"
            name="Phone_number"
            id=""
            placeholder="Enter your phone number"
          />
          <motion.button className="btn" whileHover = {{scale: 1.1}} whileTap = {{scale: 0.8}}>Join Now</motion.button>
        </form>
      </div>
    </section>
  );
};

export default Join;
