import React from "react";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Apps from "./components/Apps";
import Resume from "./components/Resume";
import Menu from "./components/Menu";
import './App.css';

function App() {
  return (
      <div className="app">
        <Navbar/>
        <Menu />
        <div className="sections">
          <Bio />
          <Apps />
          <Contact />
          <Resume />
        </div>
      </div>
  );
}

export default App;
