import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Courses from "./Courses";
import {
  faCartShopping,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  const handleClick = () => {
    <Courses/>
  };
  return (
			<section className='mx-10 md:mx-12 mt-8 md:mt-16'>
				<div className='font-sans font-bold text-[#333] text-3xl md:text-5xl  dark:text-white mt-[120px] lg:ml-[120px] '>
					Lorem Ipsum
					<br />
					<span className='text-[#666] text-2xl md:text-4xl ml-[5px]'>
						lorem ipsum
					</span>
				</div>
				<p className='mt-4 md:mt-6 max-w-[700px] text-base md:text-lg font-normal text-[#afaeae] lg:ml-[119px]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam cum
					atque dolore, at tenetur aspernatur? Nostrum, voluptatibus harum placeat
					tempore distinctio a, autem sint animi ipsam dolore laboriosam nobis!
				</p>
				<div className='mt-8 md:mt-12 flex flex-col md:flex-row'>
					<button className='font-sans border-2 border-orange-400 px-2 md:px-4 py-2 rounded-xl bg-orange-600 shadow-custom text-white hover:bg-orange-500 hover:text-white mb-4 md:mb-0 md:mr-4 lg:ml-[110px]'>
						lorem ipsum
					</button>

					<button className='bg-transparent text-orange-500 border-2 border-orange-500 px-2 md:px-4 py-2 rounded-xl font-sans shadow-custom hover:bg-orange-500 hover:text-white flex justify-center items-center lg:ml-2 md:ml-2 md:w-auto'>
						<FontAwesomeIcon icon={faCartShopping} className='mr-2' />
						<span>Add to Cart</span>
					</button>
				</div>

				<div
					className='mt-8 md:mt-12 mx-auto animate-bounce text-2xl md:text-4xl w-10 h-10 md:w-12 md:h-12 font-light border-2 border-slate-700 dark:border-white rounded-full text-center '
					onClick={handleClick}>
					<FontAwesomeIcon icon={faLongArrowAltDown} />
				</div>
			</section>
		);
};

export default Landing;
