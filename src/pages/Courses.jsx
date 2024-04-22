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
				breakpoint: 1400, // Adjusted from 1024px to 1200px
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1225,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600, // New breakpoint added
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Slider {...settings}>
			<div className='mx-auto w-full'>
				<h3 className='text-center'>Course 1</h3>
				<CourseCarousel />
			</div>
			<div className='mx-auto w-full'>
				<h3 className='text-center'>Course 2</h3>
				<CourseCarousel />
			</div>
			<div className='mx-auto w-full'>
				<h3 className='text-center'>Course 3</h3>
				<CourseCarousel />
			</div>
		</Slider>
	);
}

export default Courses;
