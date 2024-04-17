import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faLongArrowAltDown} from "@fortawesome/free-solid-svg-icons";
const Landing = () => {
	return (
		<section className='ml-[100px] mt-[100px]'>
			<div className='font-sans font-bold text-[#333] text-[85px] dark:text-white'>
				Lorem Ipsum
				<br />
				<span className='text-[#666] text-[70px]'>lorem ipsum</span>
			</div>
			<p className=' w-[700px] text-[25px] font-normal text-[#afaeae] text-wrap'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam cum
				atque dolore, at tenetur aspernatur? Nostrum, voluptatibus harum placeat
				tempore distinctio a, autem sint animi ipsam dolore laboriosam nobis!
			</p>
			<div className='mt-20 mr-6'>
				<button className=' font-sans border-2  border-orange-400 px-4 py-2 rounded-xl  bg-orange-600 shadow-custom text-white hover:bg-orange-500 hover:text-white mr-[50px] '>
					lorem ipsum
				</button>
				<button className='bg-transparent text-orange-500 border-2 border-orange-500  px-4 py-2 rounded-xl font-sans shadow-custom hover:bg-orange-500 hover:text-white'>
					<FontAwesomeIcon icon={faCartShopping} />
					<span className=''> Add to Cart</span>
				</button>
			</div>
			<div className='mt-[100px] ml-[100px] animate-bounce text-[35px] w-[60px] h-[60px] font-light border-2 border-slate-700 dark:border-white rounded-full  text-center'>
				<FontAwesomeIcon icon={faLongArrowAltDown} />
			</div>
		</section>
	);
};

export default Landing;
