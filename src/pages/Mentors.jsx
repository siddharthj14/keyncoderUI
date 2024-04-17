import MentorCard from "../components/MentorCard";

function Mentors() {
	return (
		<section className='max-h-full mt-[100px]'>
			<h1 className='text-[50px] font-sans font-semibold text-center'>
				Lorem Ipsum
			</h1>
			<p className='text-[#8A8A8A] text-center text-[20px]'>
				Lorem Ipsum courses we have? lorem ipsum
			</p>
			<div className='flex flex-row justify-center gap-[100px] mt-[100px]'>
				<MentorCard />
                <MentorCard/>
			</div>
		</section>
	);
}

export default Mentors;
