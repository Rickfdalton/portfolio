import React from "react";
import "./header.css";
import CTA from "./CTA";
import Jathu from "../../Assets/jathu_pic.png";
import HeaderSocials from "./headerSocials";
import HeaderContacts from "./headerContacts";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h2>Jathavan Mahendrarajah</h2>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <HeaderContacts />
      </div>
      <div className="me">
        <img src={Jathu} alt="jathu" />
      </div>
    </header>
  );
};

export default Header;
