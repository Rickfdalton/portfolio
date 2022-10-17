import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const HeaderContacts = () => {
  return (
    <div className="header_contacts">
      <a href="https://www.facebook.com/jathu05">
        <BsFacebook />
      </a>
      <a href="https://www.instagram.com/jathav_j/">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderContacts;
