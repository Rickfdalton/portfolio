import React from "react";
import "./projects.css";
import issuer_img from "../../Assets/issuer-img.png";
import bank_img from "../../Assets/bank-img.png";
import mobile_app from "../../Assets/mobile.png";
import airline from "../../Assets/airline.png";
import tournament from "../../Assets/tournament.png";
import traffic from "../../Assets/traffic.png";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={issuer_img} alt="issuer-image" />
          </div>
          <h3>Person Verification Digital Platform - Issuer</h3>
          <a
            href="https://github.com/PersonVerfication-Digital-Platform/Person-Verification-Digital-Platform-Issuer"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={bank_img} alt="bank-site-image" />
          </div>
          <h3>Person Verification Digital Platform - Bank</h3>
          <a
            href="https://github.com/PersonVerfication-Digital-Platform/https-github.com-neth99-coder-Person-Verification-Digital-Platform-Bank"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={mobile_app} alt="mobile-image" />
          </div>
          <h3>Person Verification Digital Platform - Mobile app</h3>
          <a
            href="https://github.com/PersonVerfication-Digital-Platform/https-github.com-neth99-coder-Person-Verification-Digital-Platform-Bank"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={airline} alt="airline-image" />
          </div>
          <h3>Airline Reservation System</h3>
          <a
            href="https://github.com/Ishad-M-I-M/airline-reservation"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={tournament} alt="tournament-image" />
          </div>
          <h3>Tournament Management System</h3>
          <a
            href="https://github.com/neth99-coder/Tournament-Management-System"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={traffic} alt="traffic-detection-image" />
          </div>
          <h3>Traffic Accident Detection</h3>
          <a
            href="https://github.com/Rickfdalton/Traffic_Accident_Detection"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Projects;
