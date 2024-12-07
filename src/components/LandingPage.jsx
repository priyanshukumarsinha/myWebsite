import React from "react";
import Navbar from "./Navbar";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collission";

const LandingPage = () => {
  return (
    <div className="App">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="bg-black  z-0">
        <BackgroundBeamsWithCollision
          className={"bg-black z-0 h-[calc(100vh-120px)]"}
        >
          <div>
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
              Hi! I am{" "}
              <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                Priyanshu
              </span>
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center flex flex-wrap px-10">
              A Full Stack Web Developer | Devops Engineer | Cloud Architect
            </p>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </div>
  );
};

export default LandingPage;
