import React, { useContext } from "react";
import "./Works.css";
import iconmysql from "../../img/iconmysql.png";
import iconcisco from "../../img/iconcisco.png";
import visualstudio from "../../img/visual-basic.png";
import iconrocket from "../../img/iconrocket.png";
import iconandroid from "../../img/android.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Software Skill
          </span>
          <span>Services and Projects</span>
          <span>
            Hello, it seems that you are still inquiring, relax, nothing is happening.
            <br />
            Ok, This section is about my other Skills,Here is MySQL which I do CRUD, Table Relationships, Entity Relationships, Diagrams and<br/> Relational Models. There is also Rocketbot which is an automation program created in Python which I have mastered 100%<br/>it is a fun and easy to learn software. Cisco Packet Tracer I have University projects on encapsulation, Vlan creation,<br/> IP Addressing and Routing.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={iconmysql} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={iconcisco} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={visualstudio} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={iconrocket} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={iconandroid} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
