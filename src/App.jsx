import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
    </div>
  );
};

export default App;

// className="overflow-x-hidden text-neural-300 antialiased slec bg-cyan-300 selection:text-cyan-900"