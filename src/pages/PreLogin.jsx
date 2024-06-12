import Navbar from "../utilities/Navbar";
import Landing from "../components/Landing";
import Courses from "../components/Courses";
import Mentors from "../components/Mentors";
import Reason from "../components/Reason";
import CallToAction from "../components/CallToAction";
import Testimonial from "../components/Testimonial";

function PreLogin({theme, handleThemeSwitch}) {
	return (
		<div
			className={`flex flex-col w-full h-full overflow-x-hidden${
				theme === "dark"
					? "bg-[#131313] text-white" 
					: "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-black"
			}`}>
			<Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
			<Landing theme={theme} />
			<Courses theme={theme}>
				<Testimonial />
			</Courses>
			<Mentors />
			<Reason theme={theme} />
			<CallToAction theme={theme} />
		</div>
	);
}

export default PreLogin;
