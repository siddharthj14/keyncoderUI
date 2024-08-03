import React, { useState } from "react";
import PostloginCard from "../components/PostloginCard";
import CustomCalendar from "../components/CustomCalendar";
import Statistics from "../components/Statistics";
import CircularProgress from "../components/CircularProgress";
import PostloginNavbar from "../utilities/PostloginNavbar";
import PostloginCourseCard from "../utilities/PostloginCourseCard";
import LaptopSlider from "../components/LaptopSlider";
import Footer from "../utilities/Footer";

const PostLogin = ({ theme, handleThemeSwitch }) => {
  const [showStats, setShowstats] = useState(false);
  return (
    <div
      className={`flex flex-col w-full h-full overflow-x-hidden ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      }`}
    >
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />

      {showStats ? (
        <div>
          <div className="flex ">
            <PostloginCard theme={theme} />
            <CustomCalendar theme={theme} />
          </div>
          <div className="text-2xl font-bold dark:white ml-[3%] mt-2">
            My Statistics
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col w-[40rem] ml-8">
              <div className="flex w-full">
                <Statistics theme={theme} />
                <div className="flex flex-col justify-evenly items-center h-[300px]">
                  <div className="bg-[#D8D8D8] py-2 rounded-2xl">
                    <CircularProgress
                      label="Productivity"
                      value="100"
                      width="100"
                    />
                  </div>
                  <div className="bg-[#D8D8D8] py-2 rounded-2xl">
                    <CircularProgress label="Quiz" value="75" width="100" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center bg-[#D8D8D8] w-[40rem] rounded-3xl p-3 mb-10">
                <img
                  src="../images/dsa-postlogin.png"
                  alt=""
                  className="w-20"
                />
                <div className="mr-48">
                  <h3 className="font-bold">DSA</h3>
                  <div>1.1.1a Longest Subsequence</div>
                </div>
                <CircularProgress label="Practice" value="50" width="60" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center  w-[43.5rem] mr-8 h-fit">
              <PostloginCourseCard
                theme={theme}
                course="JAVA"
                topic="Bitwise Operator"
                img="network"
                play={false}
              />
              <PostloginCourseCard
                theme={theme}
                course="DSA"
                topic="Linked List"
                img="dsa-postlogin"
                play={true}
              />
              <PostloginCourseCard
                theme={theme}
                course="UI/UX"
                topic="Auto Layout"
                img="hack"
                play={false}
              />
              <PostloginCourseCard
                theme={theme}
                course="PYTHON"
                topic="Basics of Python Programming"
                img="network"
                play={true}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-[3.9rem]">
          <div
            className={`w-full h-[90vh] ${
              theme == "dark"
                ? "bg-[#1D1534]"
                : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]"
            }`}
          >
            <div className=" mx-10 md:mx-12 flex flex-col medium:flex-row items-center justify-between">
              <div className="">
                <h1 className="max-w-xl text-4xl leading-[1.1] md:text-5xl md:leading-[1.3] font-bold text-white dark:text-white">
                  Hey{" "}
                  <span className="text-black dark:text-yellow-200">Sara!</span>{" "}
                  seems you haven't enrolled yet
                </h1>
                <p className="text-[#FFB453] font-semibold mt-4 dark:text-[#e87f7f] md:text-[28px] max-w-sm mb-5">
                  Don't hesitate - Join now and get the finest available
                </p>
                <button className="dark:bg-orange-600 bg-orange-500 shadow-lg hover:bg-orange-600 dark:hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg md:mt-0 mt-10">
                  Home
                </button>
              </div>
              <LaptopSlider />
            </div>
            <div className="absolute bottom-0 left-0 w-full z-10">
              <svg
                width="100%"
                height="100%"
                id="svg"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                  >
                    <stop offset="0%" stopColor="#ED374D"></stop>
                    <stop offset="51%" stopColor="#FA793F"></stop>
                    <stop offset="100%" stopColor="#FCB900"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                  stroke="none"
                  strokeWidth="0"
                  fill={theme === "dark" ? "#232222" : "#E6E6E6"}
                  fillOpacity="1"
                ></path>
              </svg>
            </div>
          </div>
          <Footer theme={theme} />
        </div>
      )}
    </div>
  );
};

export default PostLogin;
