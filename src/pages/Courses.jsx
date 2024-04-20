import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCarousel from "../components/CourseCaraousel";

function Courses() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <h3 className=" text-center">Course 1</h3>
        <CourseCarousel />
      </div>
      <div>
        <h3 className=" text-center">Course 2</h3>
        <CourseCarousel />
      </div>
      <div>
        <h3 className=" text-center">Course 3</h3>
        <CourseCarousel />
      </div>
    </Slider>
  );
}

export default Courses;
