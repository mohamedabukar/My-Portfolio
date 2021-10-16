import React from "react";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Apps from "./components/Apps";
import Resume from "./components/Resume";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Bio />
      <Apps />
      <Contact />
      <Resume />
    </>
  );
}

export default App;
