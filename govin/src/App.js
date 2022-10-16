import "./App.css";
//import About from "./components/About";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#370736";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        title="GovIntranet"
        contact="GvoinTeam"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
        <Homepage title="converting text into various formats" mode={mode} />
        {/*<About />*/}
      </div>
    </>
  );
}

export default App;
