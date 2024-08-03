import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const LaptopSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="relative mt-16">
      <img
        src="../images/laptop.png"
        alt="Laptop Slider"
        className="w-full rounded-lg"
      />
      <div className="slider-container absolute top-7 w-[460px] left-[4.9rem]">
        <Slider {...settings}>
        <div className="">
          <img
            src="../../public/images/slider-CE.png"
            alt=""
            className="w-[460px] h-[285px]"
          />
        </div>
        <div className="">
          <img
            src="../../public/images/slider-VE.png"
            alt=""
            className="w-[460px] h-[285px]"
          />
        </div>
        <div className="">
          <img
            src="../../public/images/slider-pf.png"
            alt=""
            className="w-[460px] h-[285px]"
          />
        </div>
        </Slider>
      </div>
    </div>
  );
};

export default LaptopSlider;
