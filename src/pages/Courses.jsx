import CourseCarousel from "../components/CourseCaraousel"

function Courses() {
  return (
			<section className='max-h-full mt-[100px]'>
				<h1 className='text-[50px] font-sans font-semibold text-center'>Our Courses</h1>
				<p className='text-[#8A8A8A] text-center text-[20px]'>Lorem Ipsum courses we have? lorem ipsum</p>
				<div className='flex flex-row justify-around mt-[100px]'>
					<CourseCarousel />
					<CourseCarousel />
					<CourseCarousel />
				</div>
			</section>
		);
}

export default Courses
