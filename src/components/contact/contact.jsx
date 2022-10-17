import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <h4>Email</h4>
            <h5>physickness@gmail.com</h5>
            <a href="mailto:physickness@gmail.com">
              Send a Message
            </a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
