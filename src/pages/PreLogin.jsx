import React, {useState, useEffect} from "react";
import Navbar from "../utilities/Navbar";
import Landing from "../components/Landing";
import Courses from "../components/Courses";
import Mentors from "../components/Mentors";
import Reason from "../components/Reason";
import CallToAction from "../components/CallToAction";
import Testimonial from "../components/Testimonial";

function PreLogin() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<div className='flex flex-col w-full h-full overflow-x-hidden bg-white text-black dark:bg-[#2E2727] dark:text-white'>
			<Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
			<section className=' h-screen'>
				<Landing />
			</section>
			<section className=' h-screen'>
				<Courses />
			</section>
			<section className=' h-screen'>
				<Testimonial />
			</section>
			<section className=' h-screen'>
				<Mentors />
			</section>

			<section className=' h-screen'>
				<Reason />
			</section>
			<section className=' h-screen'>
				<CallToAction theme={theme} />
			</section>
		</div>
	);
}

export default PreLogin;
