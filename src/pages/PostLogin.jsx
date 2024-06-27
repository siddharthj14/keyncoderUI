import React from "react";
import Navbar from "../utilities/Navbar";
import PostloginCard from "../components/PostloginCard";
import CustomCalendar from "../components/CustomCalendar";
import Statistics from "../components/Statistics";
import CircularProgress from "../components/CircularProgress";

const PostLogin = ({ theme, handleThemeSwitch }) => {
  return (
    <div
      className={`flex flex-col w-full h-full overflow-x-hidden ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      }`}
    >
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div className="flex flex-col">
        <div className="flex">
          <PostloginCard theme={theme} />
          <CustomCalendar theme={theme} />
        </div>
        <div className="flex">
          <Statistics theme={theme} />
          <div className="flex flex-col">
          <CircularProgress label="Productivity" value="90"/>
          <CircularProgress label="Quiz" value="75"/></div>
        </div>
      </div>
    </div>
  );
};

export default PostLogin;
