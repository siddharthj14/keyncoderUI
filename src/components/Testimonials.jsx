import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      text: "Lorem ipsum courses we have? Lorem ipsum Loremodorigh vodfiy idfjvbid idfjblvsidjfvb sjdfivjsidbfvkjisdifvsj sidjsi isdjbfjsdbfid sidjfbsijbdf sjdfjsbijdsifd sdjofjhosjdhf sjdbfsjdfijs sdfjsbijsfdusjdfisjhfs sdjghfgso sdjf",
      name: "Aaron Dessner",
      image: "path/to/aaron_image.jpg", // replace with actual image path
    },
    {
      text: "Lorem ipsum courses we have? Lorem ipsum Loremodorigh vodfiy idfjvbid idfjblvsidjfvb sjdfivjsidbfvkjisdifvsj sidjsi isdjbfjsdbfid sidjfbsijbdf sjdfjsbijdsifd sdjofjhosjdhf sjdbfsjdfijs sdfjsbijsfdusjdfisjhfs sdjghfgso sdjf",
      name: "Kesh Werawil",
      image: "path/to/kesh_image.jpg", // replace with actual image path
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonial-slider text-center bg-gray-900 py-10">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-slide max-w-xl mx-auto p-6 bg-gray-800 rounded-lg relative"
          >
            <p className="testimonial-text text-lg mb-4 text-gray-400">
              {testimonial.text}
            </p>
            <div className="testimonial-author flex items-center justify-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image w-12 h-12 rounded-full mr-4"
              />
              <p className="testimonial-name text-white">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
