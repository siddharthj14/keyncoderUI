import Courses from "./Courses";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function Landing({theme}) {
	const handleClick = () => {
		<Courses />;
	};
	return (
		<div className={theme == 'dark' ? 'bg-transparent w-full' : 'bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] w-full'}>
  <div className='mx-10 md:mx-10 mt-0 md:mt-16 p-3 md:p-8 flex flex-col md:flex-row'>

    {/* Left Column (70% width on medium screens and above) */}
    <div className="w-full md:w-7/10 p-4 dark:bg-slate-500">
      <div className="text-lg">Courses</div>
      <div>The complete guide to make a full-stack app with NextJs</div>
    </div>

    {/* Right Column (30% width on medium screens and above) */}
    <div className="w-full md:w-3/10 p-4 dark:bg-slate-500">
      {/* Content for the right column goes here */}
    </div>

  </div>
</div>

	);
}
