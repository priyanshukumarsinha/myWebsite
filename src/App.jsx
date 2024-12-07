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

      <div className="h-screen dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2]">
        {/* <Card /> */}
      </div>
    </div>
  );
}

export default App;
