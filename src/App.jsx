import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";   

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/sah-portfolio" element={<Home />} />
        <Route path="/sah-portfolio/about" element={<About />} />
      </Routes>


    </>
  );
}

export default App;
