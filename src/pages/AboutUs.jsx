import Navbar from "../utilities/Navbar";

function AboutUs({handleThemeSwitch, theme}) {
	return (
		<>
			<Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
			<section className='bg-[#D9D9D9] min-h-screen p-10 md:p-20'>
				<h1 className='text-gray-700 text-[40px] md:text-[85px] text-center font-bold mt-20 md:mt-40 mb-4'>
					Revolutionizing Education
				</h1>
				<p className='text-black text-md md:text-lg text-justify m-auto w-[90%] md:w-[60%]'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book.
				</p>
			</section>
			<section className='bg-black h-fit'>
				<div className='flex flex-col md:flex-row p-10 md:p-20 justify-around'>
					<div className='h-[200px] md:h-[500px] w-full md:w-[600px] rounded-3xl bg-gray-200 mb-10 md:mb-0'></div>
					<div className='w-full md:w-[600px] flex flex-col items-start p-5 md:p-20'>
						<div className='flex justify-center gap-5 items-center mb-4'>
							<div className='h-[60px] w-[6px] bg-[#FF0000]'></div>
							<h1 className='text-[#FF0000] text-[30px] md:text-[40px]'>
								🔄 A LITTLE HISTORY
							</h1>
						</div>
						<p className='text-[#9F9E9E] w-full md:w-[90%] text-left'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s. Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s.
						</p>
					</div>
				</div>
			</section>
			<section className='bg-black h-fit'>
				<div className='flex flex-col md:flex-row p-10 md:p-20 justify-around'>
					<div className='w-full md:w-[600px] flex flex-col items-start p-5 md:p-20'>
						<div className='flex justify-center gap-5 items-center mb-4'>
							<div className='h-[60px] w-[6px] bg-[#2BB79D]'></div>
							<h1 className='text-[#2BB79D] text-[30px] md:text-[40px]'>
								🚀 THE PROBLEM
							</h1>
						</div>
						<p className='text-[#9F9E9E] w-full md:w-[90%] text-justify'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s. Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s.
						</p>
					</div>
					<div className='w-full md:w-[600px] flex flex-col items-start p-5 md:p-20'>
						<div className='flex justify-center gap-5 items-center mb-4'>
							<div className='h-[60px] w-[6px] bg-[#0132E0]'></div>
							<h1 className='text-[#0132E0] text-[30px] md:text-[40px]'>
								💡 THE SOLUTION
							</h1>
						</div>
						<p className='text-[#9F9E9E] w-full md:w-[90%] text-justify'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s. Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s.
						</p>
					</div>
				</div>
			</section>
			<section className='bg-black h-fit p-10 md:p-20'>
				<h1 className='text-white font-bold text-[30px] md:text-[40px] text-center mb-10'>
					Meet Our Founders
				</h1>
				<div className='flex flex-col md:flex-row items-center md:items-start justify-around'>
					<div className='md:w-1/2 mb-10 md:mb-0'>
						<h2 className='text-[#FF6652] font-semibold text-[20px] md:text-[30px] mb-4'>
							Lorem Ipsum
						</h2>
						<p className='text-[#9F9E9E] text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
							suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
							lacus vel facilisis consectetur adipiscing elit. <br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
							suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
							lacus vel facilisis consectetur adipiscing elit. <br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
							suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
							lacus vel
						</p>
					</div>
					<img src='/images/human.png' alt='Founders' className='rounded-lg' />
				</div>
			</section>
			<section className='bg-black'>
				<div className='relative'>
					<svg
						width='100%'
						height='100%'
						color='#ED374D'
						id='svg'
						viewBox='0 0 1440 300' // Changed the viewBox to better fit the wave
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
							fill={"url(#gradient)"}
							fillOpacity='1'></path>
					</svg>
				</div>
			</section>
			<section className='dark:bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] bg-[#1d1534] dark:text-black text-white'>
				<div className='dark:text-white text-center text-3xl font-semibold mb-6'>
					Who are we?
				</div>
				<p className='text-center max-w-md mx-auto mb-8'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it to
				</p>
				<div className='flex flex-wrap justify-center gap-8'>
					<div className='w-full md:w-[400px] rounded-3xl bg-gray-200 mb-10 md:mb-0 p-6'>
						<p className='text-gray-800'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat
							maiores debitis earum vitae quia a. Eos rerum consequatur dolor nam
							veritatis, ducimus dolores in distinctio neque repellat corrupti id!
						</p>
					</div>
					<div className='w-full md:w-[400px] rounded-3xl bg-gray-200 mb-10 md:mb-0 p-6'>
						<p className='text-gray-800'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat
							maiores debitis earum vitae quia a. Eos rerum consequatur dolor nam
							veritatis, ducimus dolores in distinctio neque repellat corrupti id!
						</p>
					</div>
					<div className='w-full md:w-[400px] rounded-3xl bg-gray-200 mb-10 md:mb-0 p-6'>
						<p className='text-gray-800'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat
							maiores debitis earum vitae quia a. Eos rerum consequatur dolor nam
							veritatis, ducimus dolores in distinctio neque repellat corrupti id!
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutUs;
