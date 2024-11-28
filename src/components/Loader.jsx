import React from "react";
import Logo from "./Logo";

const Loader = () => {
  return (
    <div className="fixed w-full h-full z-50 flex flex-col justify-center items-center">
      <h2 className="text-2xl py-4"></h2>
      <Logo scale={1} animate={1}/>
    </div>
  )
}

export default Loader;