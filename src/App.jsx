import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Spotlight from "./components/ui/Spotlight";
import { WavyBackground } from "./components/ui/wavy-background";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collission";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App relative">
      <div className="sticky top-0 left-0">
        <Navbar />
      </div>
      <div className="bg-black  z-0">
        <BackgroundBeamsWithCollision className={"bg-black z-0"}>
          {/* <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            What&apos;s cooler than Beams?{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Exploding beams.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Exploding beams.</span>
              </div>
            </div>
          </h2> */}

          <div>
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
              Hi! I am Priyanshu
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
              A Full Stack Web Developer | Devops Enthusiast | Cloud Curious
            </p>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
      <div className="h-screen bg-black flex flex-col justify-center items-center">
        {/* <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        /> */}
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Hi! I am Priyanshu
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          A Full Stack Web Developer | Devops Enthusiast | Cloud Curious
        </p>
      </div>
      <div className="h-screen dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2]">
        {/* <Card /> */}
      </div>
    </div>
  );
}

export default App;
