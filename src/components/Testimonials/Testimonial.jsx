import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/belen.jpg";
import profilePic2 from "../../img/luis.jpg";
import profilePic3 from "../../img/oscar.jpg";
import profilePic4 from "../../img/Jhon.jpg";
import profilePic5 from "../../img/nor.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I address in the most attentive way that Carlos Ulloa performs well his work as a Developer, I make an exact reference to the fact that he works in an orderly manner and his work is efficient.",
    },
    {
      img: profilePic2,
      review:
        "I am pleased to attribute Carlos Ulloa does an excellent job in application development, his skills as a programmer have proven to be amazing, following best practices and giving a good user experience.",
    },
    {
      img: profilePic3,
      review:
        "I would like to inform you that Carlos Ulloa is an honest, responsible and very capable person in the performance of his duties as Programmer, showing a good relationship with his colleagues and with a very good disposition.",
    },
    {
      img: profilePic4,
      review:
        "Thanks to the Engineer Carlos Ulloa and the designs he showed me, I finished my web page, taking into account his creativity and his teamwork, apart from his readable code and his teaching.",
    },

    {
      img: profilePic5,
      review:
        "The database project has been very interesting, with great expectations, I recommend it, meets my expectations, good implementation and diagram, very good work Carlos Ulloa.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients Always get </span>
        <span>Exceptional Work </span>
        <span>From Me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
