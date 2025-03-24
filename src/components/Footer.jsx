import React, { useState, useEffect } from "react";
import { countPageViews } from "../utils/counter";

const Footer = () => {
  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    const updatedPageViews = countPageViews();
    console.log("views:", updatedPageViews);
    setPageViews(updatedPageViews);
  }, []);

  return (
    <div className="flex items-center justify-between gap-4 pt-24 p-4">
      <h6>V:{pageViews}</h6>
      <h4>© Copyright 2024 Developed by <b>SAH</b></h4>
    </div>
  )
}

export default Footer;