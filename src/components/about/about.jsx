import React from "react";
import "./about.css";
import jathu_img from "../../Assets/IMG_8002.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={jathu_img} alt="jathu" />
          </div>
        </div>
        <div className="about_content">
          <p >
            Third year undergraduate from department of CSE, University of
            Moratuwa. Interested in full stack development. Currently working on
            web3 project.
          </p>
          <p style={{"color":"var(--color-white)"}}>Open-minded, independent and proactive.</p>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: "1rem" }}
          >
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
