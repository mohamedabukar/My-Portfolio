import React from "react";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Apps from "./components/Apps";
import Resume from "./components/Resume";
import './App.css';
import {useState} from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
