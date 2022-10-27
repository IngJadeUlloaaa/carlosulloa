import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import portfoliopython from "../../img/port-webscra.png";
import portfoliorocket from "../../img/portfolio-rocket.png";
import portbeautii from "../../img/portf-beauti.png";
import portpython from "../../img/portfolio-python.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={portfoliopython} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portfoliorocket} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portbeautii} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portpython} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
