import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import pythontrans from "../../img/glaspython.png";
import reactser from "../../img/iconreact.png";
import csharp from "../../img/glascsharp.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import CV from './Ulloa_CV.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Favorite</span>
        <span>Skills</span>
        <span>
        My skills in the Software world are: Python is the language I use the most and I practice Machine Learning and Automation<br/> C# I have a wide knowledge but I have not polished it<br/> Front End I have experience creating web pages for university students<br/> Backend I can register information from the pages or from MySQL or through programming languages<br/> React Native I have basic experience creating applications.
        </span>
        <a href={CV} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={pythontrans}
            heading={"Python"}
            detail={"Algorithms, Interfaces, Sqlite3, Pandas, Automation, MySQL"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={reactser}
            heading={"React"}
            detail={"Html, Css, JavaScript, React Native, Nodejs"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={csharp}
            heading={"C#"}
            detail={
              "Interfaces, Algorithms, Forms and Programming"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
