import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", height: "100%" }} />
      <div className="f-content">
        <span>For more Information, Projects, References and Questions Do Not hesitate to Contact me, This page will be Updated with my Learned knowledge, Have a Nice Day!</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/jade_code.py/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/JasyFromYt">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/IngJadeUlloaaa">
            <Gitub color="white" size={"3rem"}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
