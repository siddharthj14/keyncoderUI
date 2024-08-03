import Courses from "./Courses";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Landing({ theme }) {
  const handleClick = () => {
    <Courses />;
  };
  return (
			<div
				className={
					theme == "dark"
						? " bg-[#131313]"
						: " bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] "
				}>
				<div className='mx-10 min-h-screen md:mx-12 mt-1 p-6 pb-0 md:p-12 flex flex-col medium:flex-row items-center justify-between'>
					<div className='space-y-4 md:space-y-10'>
						<h1 className='text-4xl pt-8 leading-[1.1] md:text-5xl md:leading-[1.3] font-bold text-zinc-900 dark:text-white'>
							From Classroom
							<br />
							to Career
						</h1>
						<p className='text-white dark:text-[#A4A4A4] md:text-[28px] max-w-lg mb-5'>
							Building Bridges Between Education and Industry for Tomorrow's Tech
							Leaders, keyNcoders Connects You with Tech Success.
						</p>
						<div className='flex flex-row justify-center items-center mx-auto w-full'>
							<button className='dark:bg-orange-600 bg-orange-500 shadow-custom hover:shadow-lg hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg md:mt-0 mt-10'>
								Join Now
							</button>
						</div>
					</div>

					<div className='mt-0 bottom-0'>
						<img
							src='../images/hero2.png'
							alt='Person pointing'
							className='max-w-xs md:max-w-lg lg:max-w-xl m-6 medium:m-2 rounded-lg '
						/>
					</div>
				</div>
				<div className='relative'>
					<svg
						width='100%'
						height='100%'
						color='#ED374D'
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
			</div>
		);
}
