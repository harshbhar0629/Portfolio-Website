/** @format */

import React from "react";
import About from "./components/About.jsx";
import Works from "./components/Works.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Feedbacks from "./components/Feedbacks.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Tech from "./components/Tech.jsx"
import StarsCanvas from "./components/StarsCanvas.jsx"


function App() {
	return (
    <div className="h-[100vh] w-[100vw]">
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>

        <About></About>
        <Experience></Experience>
        <Tech></Tech>
        <Works></Works>
        <Feedbacks></Feedbacks>

        <div className="relative z-0">
          <Contact></Contact>
          <StarsCanvas></StarsCanvas>
        </div>
      </div>
		</div>
	);
}

export default App;
