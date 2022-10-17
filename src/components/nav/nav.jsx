import React from "react";
import { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { ImStack } from "react-icons/im";

const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={setActive.bind(this, "#")}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={setActive.bind(this, "about")}
        className={active === "about" ? "active" : ""}
      >
        <BiUserCircle />
      </a>
      <a
        href="#experience"
        onClick={setActive.bind(this, "experience")}
        className={active === "experience" ? "active" : ""}
      >
        <ImStack />
      </a>
      <a
        href="#projects"
        onClick={setActive.bind(this, "projects")}
        className={active === "projects" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#contact"
        onClick={setActive.bind(this, "contact")}
        className={active === "contact" ? "active" : ""}
      >
        <BiMessageRoundedDots />
      </a>
    </nav>
  );
};

export default Nav;
