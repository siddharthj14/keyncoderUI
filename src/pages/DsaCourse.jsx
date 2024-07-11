import Navbar from "../utilities/Navbar";
import Instructors from "../components/Instructors";
import StudentsReview from "../components/StudentsReview";
import Footer1 from "../utilities/Footer";

function DsaCourse({ theme, handleThemeSwitch }) {
  return (
    <div
      className={`flex flex-col w-full h-full overflow-x-hidden ${
        theme === "dark"
          ? "bg-[#131313] text-white"
          : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-black"
      }`}
    >
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
    </div>
  );
}

export default DsaCourse;
