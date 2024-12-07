import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";

import AboutMePage from "./components/AboutMePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative">
      <LandingPage />
      <AboutMePage />
    </div>
  );
}

export default App;
