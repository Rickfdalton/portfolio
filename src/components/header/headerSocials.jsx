import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsStackOverflow, BsLinkedin } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/Rickfdalton">
        <AiOutlineGithub />
      </a>
      <a href="https://stackoverflow.com/users/17065309/rickfdalton">
        <BsStackOverflow />
      </a>
      <a href="https://www.linkedin.com/in/jathavan-mahendrarajah-9a3596181/">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
