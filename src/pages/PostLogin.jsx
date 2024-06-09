import React from "react";
import Navbar from "../utilities/Navbar";
import PostloginCard from "../components/PostloginCard";

const PostLogin = ({ theme, handleThemeSwitch }) => {
  return (
    <div
      className={`flex flex-col w-full h-full overflow-x-hidden ${
        theme === "dark" ? "bg-[#131313] text-white" : "bg-white text-black"
      }`}
    >
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <PostloginCard theme={theme} />
    </div>
  );
};

export default PostLogin;
