import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Technologies I've worked with</h5>
      <h2>Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <h4>HTML</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <h4>CSS</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <h4>JavaScript</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <h4>Bootstrap</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <h4>React</h4>
              <small>Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <h4>Node.js</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <h4>MySQL</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <h4>MongoDB</h4>
              <small>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
