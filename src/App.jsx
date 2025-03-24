import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  const [data, setData] = useState({});
  const [fetchLoader, setFetchLoader] = useState(true);
  const [timerlodaer, setTimerLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerLoader(false);
    }, 1500);

    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.BASE_URL + "data/myData.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setFetchLoader(false);
      }
    };

    fetchData();

    return () => {
      clearTimeout(timer);
    }
  }, [])

  if(timerlodaer || fetchLoader) {
    return <Loader />;
  }

  return (
    <>
      <Header data={data.header} />
      <main>
        <Element name="home">
          <Home data={data.home} />
        </Element>
        <Element name="about">
          <About data={data.about} />
        </Element>
        <Element name="projects">
          <Projects data={data.projects} />
        </Element>
        <Element name="contact">
          <Contact data={data.contacts} />
        </Element>
      </main>
      <Footer />
    </>
  );
}

export default App;
