import React, { useState } from 'react';
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import footer from '../utilities/Footer';

export default function Landing({ theme }) {
  const [paragraphStates, setParagraphStates] = useState({
    paragraph1: false,
    paragraph2: false,
    paragraph3: false,
    // Add more as needed for each paragraph
  });

  const toggleParagraph = (paragraph) => {
    setParagraphStates(prevState => ({
      ...prevState,
      [paragraph]: !prevState[paragraph]
    }));
  };

  return (
    <>
    <div className={theme === 'dark' ? 'bg-transparent w-full' : 'bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] w-full'}>
      <div className='mx-10 md:mx-10 mt-0 md:mt-16 p-3 md:p-8 flex flex-col md:flex-row'>

        {/* Left Column (70% width on medium screens and above) */}
        <div className="w-full md:w-7/10 p-4 dark:bg-slate-500">
        <div className="text-lg">Courses</div>
  <div className="text-4xl font-extrabold">The complete guide to building a full-stack app with NextJs</div>
  <div>Learn, Analyse and Implement Data Structure using C and C++. Learn Recursion and Sorting.</div>
  <div className="flex justify-start">
        <svg
          className="w-4 h-4 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
        </svg>
        <svg
          className="w-4 h-4 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
        </svg>
        <svg
          className="w-4 h-4 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
        </svg>
        <svg
          className="w-4 h-4 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
        </svg>
        <svg
          className="w-4 h-4 text-yellow-200"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
        </svg>
        <div className="font-extrabold ml-2">4.9</div>
      </div>
      <div className="text-lg">Created by <span className="font-bold">Marry Smith</span></div>
</div>

        {/* Right Column (30% width on medium screens and above) */}
        <div className="w-full md:w-3/10 p-4 dark:bg-slate-500 flex justify-end">
            <img className="h-auto w-auto " src="../images/teacher_video.png" alt="" />
        </div>

      </div>

      {/* What you'll learn section */}
      <div className="container mx-auto p-4 dark:bg-slate-800">
        <div className="w-full">
          <span className="text-4xl font-extrabold">What you'll learn</span>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-2">
            <ul>
              <li className="flex ">
                <span className="text-red-500 mr-2 font-bold">✔️</span>
                Learn various popular Data Structures and their Algorithms
              </li>
              <li className="flex ">
                <span className="text-red-500 mr-2 font-bold">✔️</span>
                Learn recursive Algorithm on data structure
              </li>
              <li className="flex ">
                <span className="text-red-500 mr-2 font-bold">✔️</span>
                Implementation of Data Structure on C and C++
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <ul>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✔️</span>
                Develop Your Analytical skills on Data structure and use them effectively
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✔️</span>
                Learn about various Sorting Algorithm
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Course details section */}
      <div>
        <div className='text-5xl mt-6 ml-[7%]'>This Course Includes:</div>
        <div className='text-2xl mt-4 mb-4 ml-[6%]'>
        <ul class="flex items-center ml-4 space-x-4 ">
      <li className='pr-2'>23 sections</li>
      <li class="list-disc pr-4">390 lectures</li>
      <li class="list-disc pr-4">56h 38m</li>
      <li class="list-disc pr-4">Total length</li>
      <li className='text-right dark:text-[#F28D6D]'>Expand the content</li>
      </ul>
        </div>
        {/* List of paragraphs */}
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div key={item} className="container mx-auto p-4 rounded shadow bg-slate-600 mt-1">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Module {item}</h2>
              <button onClick={() => toggleParagraph(`paragraph${item}`)} className="focus:outline-none">
                {paragraphStates[`paragraph${item}`] ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
              </button>
            </div>
            {paragraphStates[`paragraph${item}`] && (
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                suscipit, justo sed malesuada posuere, turpis arcu ultrices lectus,
                eget fringilla justo mi eu est. Phasellus fermentum, arcu vel
                pharetra facilisis, sem purus ultricies lacus, nec vestibulum velit
                ex sit amet lacus. In hac habitasse platea dictumst.
              </p>
            )}
          </div>
        ))}
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
        <div className={theme === 'dark' ? 'bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] w-full' : 'bg-black'}>
           <div className='text-3xl dark:text-white ml-[5%] text-white'>Description:</div>
           <div className='ml-[5%] dark:text-[#050608] mt-4 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </div>
           <div className='text-3xl dark:white ml-[5%]'>About the instructor</div>
           <div className='max-w-xl mx-auto p-6 mb-10 md:mb-4  bg-gradient-to-r from-[#ED374D] to-[#FA793F] w-full dark:  shadow-lg rounded-lg ml-[5%]'>
			<div className='flex '>
				<div className='mr-4'>
					<img
						src="./images/Marry.png"
						className='w-screen h-40 rounded-3x1 border-slate-800 border-[3px]'
					/>
          <div className="text-center mt-2 ml-[10%] dark:text-black text-lg font-bold">Marry</div>
					<div className="text-center mt-0 ml-[7%] text-lg font-bold">Hello</div>
				</div>
				<div>
					<div className="text-2xl mt-0 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolor voluptatem, eveniet accusantium dolore eius libero molestiae et commodi doloremque vel omnis neque placeat nam adipisci debitis optio, consequuntur laudantium.</div>
				
				</div>
			</div>
		</div>
    <div className="text-3xl text-white mb-4 mt-2 ml-[5%]">Featured Review</div>
      <div className='max-w-xl mx-auto p-6 mb-10 md:mb-4  bg-gradient-to-r from-[#ED374D]  to-[#FA793F]  shadow-lg rounded-lg ml-[5%]'>
			<blockquote className='italic text-zinc-600 text-lg dark:text-gray-300'>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum animi voluptate cum quis voluptatibus, labore eos et veniam autem soluta quibusdam fuga ex quasi officiis ut deserunt deleniti reprehenderit porro?</p>
			</blockquote>
			<div className='flex items-center mt-4'>
				<img
					src="./images/Marry.png"
					className='w-20 h-16 rounded-full mr-4 border-slate-800 border-[3px]'
				/>
				<div>
					<div className='ml-1 text-zinc-700 dark:text-white'>Ram</div>
					<div className='flex items-center'>
					</div>
				</div>
			</div>
		</div>
        </div>
        <div className='relative bottom-0'>
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
					</div>
        
    </div>
    <footer/>
    </>
  );
};
