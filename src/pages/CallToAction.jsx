import React from "react";
import Footer from "../components/Footer";

function CallToAction() {
	return (
		<div className='flex flex-col min-h-screen'>
			<section className='mt-[100px] flex-grow'>
				<h1 className='font-semibold text-[35px] text-center'>
					Companies Affiliated with <br /> keyNcoders
				</h1>
				<p className='text-[18px] text-[#8A8A8A] text-center'>
					Lorem Ipsum courses we have? lorem ipsum
				</p>
				<div className='w-full mt-[120px] h-[300px] bg-[#D9D9D9] flex flex-row justify-around items-center '>
					<div className='h-[200px] w-[300px] bg-black text-white rounded-lg text-center'>
						Company name/logo
					</div>
					<div className='h-[200px] w-[300px] bg-black text-white rounded-lg text-center'>
						Company name/logo
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default CallToAction;
