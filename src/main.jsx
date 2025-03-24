import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import App from "./App.jsx";
import "./index.css";

ReactGA.initialize("G-ZHSE2QM4ZG");

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview",
      page: location.pathname,
      title: "Portfolio"
    });
  }, [location]);

  return null;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <TrackPageView />
      <App />
    </Router>
  </StrictMode>,
);
