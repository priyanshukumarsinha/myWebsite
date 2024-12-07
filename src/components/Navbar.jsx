import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" py-5 px-7 shadow-sm shadow-[#242424] flex justify-between bg-black/80 z-50">
      <div className="text-2xl text-[#757d8b]  flex gap-5">
        <FaLinkedin className="hover:text-gray-200 transition-all duration-300 ease-in-out " />
        <FaXTwitter className="hover:text-gray-200 transition-all duration-300 ease-in-out " />
        <FaGithub className="hover:text-gray-200 transition-all duration-300 ease-in-out " />
        <FaInstagram className="hover:text-gray-200 transition-all duration-300 ease-in-out " />
      </div>
      <div>
        <ul className="flex gap-7 font-light">
          <li className="hover:text-gray-200 transition-all duration-300 ease-in-out text-[#7f7de4] text-sm">
            Home
          </li>
          <li className="hover:text-gray-200 transition-all duration-300 ease-in-out text-white text-sm">
            About
          </li>
          <li className="hover:text-gray-200 transition-all duration-300 ease-in-out text-white text-sm">
            Skills
          </li>
          <li className="hover:text-gray-200 transition-all duration-300 ease-in-out text-white text-sm">
            Projects
          </li>
          <li className="hover:text-gray-200 transition-all duration-300 ease-in-out text-white text-sm">
            Achievements
          </li>
          <li className="hover:text-gray-200 transition-all duration-300 ease-in-out text-white text-sm">
            Experience
          </li>
          <li className="hover:text-gray-200 transition-all duration-300 ease-in-out text-white text-sm">
            OpenSource
          </li>
          <li className="hover:text-gray-200 transition-all duration-300 ease-in-out text-white text-sm">
            Volunteering
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
