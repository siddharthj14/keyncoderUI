import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
	return (
		<footer className='text-zinc-600 body-font mt-[30px] bottom-0'>
			<div className='flex flex-row justify-between ml-[20px] mt-2'>
				<p className='text-[14px]'>
					©2024 <br />
					keyNcoders
				</p>
				<span className='h-[24px] bg-[#111B47] text-white p-1 mr-[30px] flex items-center mt-2'>
					Purchase Now
				</span>
			</div>
			<hr className='w-full mt-3 bg-gray-300' />

			<div className='container mx-auto py-4 px-5 flex flex-row items-center justify-between'>
				<p className='text-black font-bold text-[26px] text-center self-center flex flex-row gap-8 items-center mr-[20px]'>
					<img
						src='https://placehold.co/10'
						alt='Placeholder'
						className=' w-[20px] h-[20px]'
					/>
					keyNcoders
				</p>
				<span className='inline-flex gap-[20px] ml-[50px] items-center self-start'>
					<a href='#' className='text-[24px] text-[#120E0E]'>
						About us
					</a>
					<a href='#' className='ml-4 text-[#120E0E] text-[24px]'>
						Batches
					</a>
					<a href='#' className='ml-4 text-[#120E0E] text-[24px]'>
						Contact Us
					</a>
				</span>
				<div className='flex flex-row gap-[20px]'>
					<FontAwesomeIcon icon={faFacebook} className='text-[#B0B8BC] h-[20px]' />
					<FontAwesomeIcon icon={faLinkedin} className='text-[#B0B8BC] h-[20px]' />
					<FontAwesomeIcon icon={faTwitter} className='text-[#B0B8BC] h-[20px]' />
					<FontAwesomeIcon icon={faYoutube} className='text-[#B0B8BC] h-[20px]' />
					<FontAwesomeIcon icon={faInstagram} className='text-[#B0B8BC] h-[20px]' />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
