import React, { useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.css";   

function App() {

  return (
    <>
        <Header />
        <main>
          <Element name="home">
            <Home/>
          </Element>
          <Element name="about">
            <About/>
          </Element>
          <Element name="projects">
            <Projects/>
          </Element>
          <Element name="contact">
            <Contact/>
          </Element>
        </main>


      {/* <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main> */}


    </>
  );
}

export default App;
