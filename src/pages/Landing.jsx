import Courses from "./Courses";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function Landing() {
	const handleClick = () => {
		<Courses />;
	};
	return (
		<div className='bg-white mx-10 md:mx-12 mt-8 md:mt-16 dark:bg-transparent p-6 md:p-12'>
			<div className='flex flex-col medium:flex-row items-center justify-between'>
				<div className='space-y-6 md:space-y-10'>
					<h1 className='text-3xl leading-[1.1] md:text-5xl md:leading-[1.3] font-bold text-zinc-900 dark:text-white'>
						Unlock your
						<br />
						Knowledge
					</h1>
					<p className='text-[#A4A4A4] text-[28px] max-w-lg'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra,
						phasellus imperdiet fringilla turpis lectus risus erat. Commodo purus, eu
						sed suspendisse fermentum.
					</p>
					<div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
						<button className='bg-orange-600 shadow-custom hover:shadow-lg hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg'>
							Lorem ipsum
						</button>
						<button className='bg-transparent hover:bg-orange-500 text-orange-600 hover:text-white border border-orange-600 py-2 px-4 rounded-lg flex items-center shadow-custom'>
							<FontAwesomeIcon icon={faCartShopping} onClick={handleClick} />
							Add to cart
						</button>
					</div>
				</div>
				<div className='mt-12 medium:mt-[100px]'>
					<img
						src='../public/images/hero.png'
						alt='Person pointing'
						className='max-w-xs medium:max-w-lg m-6 medium:m-2 rounded-lg shadow-lg'
					/>
				</div>
			</div>
		</div>
	);
}
