import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import resumeLogo from "./../assets/resume.jpg";

const AboutMePage = () => {
  return (
    <div className=" dark:bg-black bg-black  dark:bg-grid-white/[0.1] bg-grid-white/[0.1] flex flex-col lg:flex-row justify-center items-center">
      <div className="lg:w-1/2  lg:pt-12 lg:px-10 p-10">
        <p className="text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var ">
          Whoami?
        </p>
        <div>
          <p className="text-sm md:text-md mt-4 text-white font-normal inter-var flex flex-wrap ">
            👋 Hi, I’m Priyanshu — a Full Stack Developer passionate about
            crafting impactful solutions. I specialize in ReactJS, NextJS,
            Docker, AWS, and DSA, building scalable apps and solving complex
            problems.
          </p>
          <p className="text-sm md:text-md mt-4 text-white font-normal inter-var flex flex-wrap ">
            Beyond coding, I’ve led as Vice President of Udbhava, organizing
            tech events and mentoring students through workshops.
          </p>
          <p className="text-sm md:text-md mt-4 text-white font-normal inter-var flex flex-wrap ">
            Highlights: Hack-o-Rama Top 5, website for Mudita, and weekly
            deployed full-stack projects.
          </p>
          <p className="text-sm md:text-md mt-4 text-white font-normal inter-var flex flex-wrap ">
            🚀 Let’s connect and create something extraordinary!!!!!!!
          </p>
        </div>
        <div className="flex gap-5">
          <button className="text-white my-10 border px-5 py-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-500 ease-in-out">
            LinkedIn
          </button>
          <button className="text-white my-10 border px-5 py-2 hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
            Github
          </button>
          <button className="hover:bg-white/50 text-black bg-white my-10 border px-5 py-2 transition-all duration-500 ease-in-out">
            Download Resume
          </button>
        </div>
      </div>
      <CardContainer className="inter-var lg:w-full h-screen">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl  border  ">
          <CardItem className="bg-gray-50 dark:bg-black dark:text-white dark:border-white/[0.2] border-black/[0.1] rounded-xl p-3">
            <img src={resumeLogo} alt="react-logo" className="w-full" />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default AboutMePage;
