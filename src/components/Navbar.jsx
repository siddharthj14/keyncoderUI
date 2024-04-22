import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import Toggle from "./Toggle"; // Import the Toggle component
import Sidebar from "./Sidebar";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ theme, handleThemeSwitch }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLinkClick = (index, event) => {
    event.preventDefault(); // Prevents the default action (page refresh)
    setActiveLink(index);
    setIsSidebarOpen(false); // Close the sidebar after clicking a link
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="fixed z-[9999] flex flex-col small:flex-row justify-between items-center backdrop-blur-md h-auto small:h-16 px-8 my-2 mt-0 w-full">
      <div className="flex items-center justify-between w-full small:w-auto">
        <span className="flex items-center gap-2">
          <h1 className="font-semibold text-2xl dark:text-white">keyNcoders</h1>
        </span>
        <span className="small:hidden" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </span>
      </div>
      <span className="hidden small:flex items-center gap-10">
        <ul className="flex gap-7">
          <li>
            <a
              href=""
              className={`font-medium dark:text-white ${
                activeLink === 0
                  ? "text-orange-600 underline decoration-2 decoration-orange-400 underline-offset-8"
                  : ""
              } hover:text-orange-600`}
              onClick={(event) => handleLinkClick(0, event)}
            >
              About us
            </a>
          </li>
          <li>
            <a
              href=""
              className={`font-medium dark:text-white ${
                activeLink === 1
                  ? "text-orange-600 underline decoration-2 decoration-orange-400 underline-offset-8"
                  : ""
              } hover:text-orange-600`}
              onClick={(event) => handleLinkClick(1, event)}
            >
              Batches
            </a>
          </li>
          <li>
            <a
              href=""
              className={`font-medium dark:text-white ${
                activeLink === 2
                  ? "text-orange-600 underline decoration-2 decoration-orange-400 underline-offset-8"
                  : ""
              } hover:text-orange-600`}
              onClick={(event) => handleLinkClick(2, event)}
            >
              Contact Us
            </a>
          </li>
        </ul>
        {/* Replace theme switch button with Toggle component */}
        <Toggle toggled={theme === "dark"} onClick={handleThemeSwitch} />
        <button className="font-medium dark:text-white border-2 border-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white focus:outline-none">
          SignIn
        </button>
      </span>
      {isSidebarOpen && (
        <Sidebar
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
          toggleSidebar={toggleSidebar}
        />
      )}
    </nav>
  );
};

export default Navbar;