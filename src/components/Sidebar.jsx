import React from "react";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Toggle from "./Toggle";

const Sidebar = ({
	activeLink,
	handleLinkClick,
	toggleSidebar,
	theme,
	handleThemeSwitch,
}) => {
	return (
		<div className='flex flex-col fixed top-0 right-0 h-screen w-[300px] bg-zinc-900 text-white font-sans'>
			<div className='flex justify-between items-center p-5 border-b border-zinc-700'>
				<h1 className='text-lg font-bold'>keyNcoders</h1>
				<button className='text-zinc-400 hover:text-white' onClick={toggleSidebar}>
					<FontAwesomeIcon icon={faXmark} className='text-[30px]' />
				</button>
			</div>
			<ul className='flex flex-grow flex-col p-5 space-y-2'>
				<li>
					<a
						href='#'
						className={`flex justify-between items-center p-2 hover:bg-zinc-700 rounded ${
							activeLink === 0 ? "bg-zinc-700" : ""
						}`}
						onClick={(event) => handleLinkClick(0, event)}>
						About Us <span>▼</span>
					</a>
				</li>
				<li>
					<a
						href='#'
						className={`flex justify-between items-center p-2 hover:bg-zinc-700 rounded ${
							activeLink === 1 ? "bg-zinc-700" : ""
						}`}
						onClick={(event) => handleLinkClick(1, event)}>
						Batches <span>▼</span>
					</a>
				</li>
				<li>
					<a
						href='#'
						className={`flex justify-between items-center p-2 hover:bg-zinc-700 rounded ${
							activeLink === 2 ? "bg-zinc-700" : ""
						}`}
						onClick={(event) => handleLinkClick(2, event)}>
						Contact Us <span>▼</span>
					</a>
				</li>
				<li className='flex flex-row'>
					Theme: <Toggle toggled={theme === "dark"} onClick={handleThemeSwitch} />
				</li>
			</ul>
			<div className='flex flex-col items-center justify-self-end p-5 border-t border-b border-zinc-700'>
				<p className='mb-4'>keyncoders@email.com</p>
				<p className='mb-4'>+0 (123) 456 78 90</p>
				<div className='flex space-x-4'>
					<a href='#' className='text-zinc-400 hover:text-white'>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href='#' className='text-zinc-400 hover:text-white'>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a href='#' className='text-zinc-400 hover:text-white'>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href='#' className='text-zinc-400 hover:text-white'>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>
					<button className='font-medium mt-3 dark:text-white border-2 border-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white focus:outline-none'>
						SignIn
					</button>
			</div>
		</div>
	);
};

export default Sidebar;
