import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      console.log("initial loading complete!");
    }, 1500);

    // cleanup timeout
    return () => clearTimeout(timeout);
  }, []); // runs only once

  return (
    <>
      {loading &&
      <Loader/>
      }
      {!loading &&
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
        <Footer />
      </>
      }

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
