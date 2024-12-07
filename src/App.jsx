import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutMePage from "./components/AboutMePage";
import SkillsPage from "./components/SkillsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative">
      <LandingPage />
      <AboutMePage />
      <SkillsPage />
    </div>
  );
}

export default App;
