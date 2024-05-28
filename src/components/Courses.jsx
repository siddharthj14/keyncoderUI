import React, { Children } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCarousel from "../utilities/CourseCaraousel";

function Courses({children,theme}) {
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
				breakpoint: 1400,
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
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<div className='relative'>
				<svg
					width='100%'
					height='100%'
					color="#ED374D"
					id='svg'
					viewBox='0 0 1440 310' // Changed the viewBox to better fit the wave
					xmlns='http://www.w3.org/2000/svg'>
					<defs>
						<linearGradient id='gradient' x1='0%' y1='50%' x2='100%' y2='50%'>
							<stop offset='0%' stopColor='#ED374D'></stop>
							<stop offset='51%' stopColor='#FA793F'></stop>
							<stop offset='100%' stopColor='#FCB900'></stop>
						</linearGradient>
					</defs>
					<path
						d='M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
						stroke='none'
						strokeWidth='0'
						fill={theme === "dark" ? "url(#gradient)" : "#1D1534"}
						fillOpacity='1'></path>
				</svg>
			</div>

			<section className=' dark:bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] bg-[#1d1534] dark:text-black text-white '>
				<h1 className='mb-[40px] text-center font-bold text-[50px]'>Our Courses</h1>
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
				{children}
				{theme==='dark'?<div className='relative'>
					<svg
						width='100%'
						height='100%'
						id='svg'
						viewBox='0 0 1440 310' // Changed the viewBox to better fit the wave
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
							stroke='none'
							strokeWidth='0'
							fill={theme === "dark" ? "#131313" : "#1d1534"}
							fillOpacity='1'></path>
					</svg>
				</div>:''}
				
			</section>
		</>
	);
}

export default Courses;
