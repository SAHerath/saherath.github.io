import React from "react";
import Badge from "./Badge";

const Card = ({ title, description, image, tags }) => {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-col items-center max-w-4xl p-4 md:p-6 border border-slate-800 rounded-lg bg-black bg-opacity-20 shadow-lg overflow-hidden text-white hover:shadow-glow-slate">
      <div className="px-6 sm:px-0 sm:w-2/5 lg:w-full lg:h-60 lg:px-8">
        <img src={image} alt="project image" className="w-full h-full max-h-56 object-contain object-center"/>
      </div>
      <div className="flex flex-col sm:w-3/5 lg:w-full px-4">
        <h2 className="text-lg py-2">{title}</h2>
        <p className="text-base text-justify">{description}</p>
        <div className="flex flex-wrap gap-3 pt-4">
          <Badge>{tags[0]}</Badge>
          <Badge>{tags[1]}</Badge>
          <Badge>{tags[2]}</Badge>
          <Badge>{tags[3]}</Badge>
          <Badge>{tags[4]}</Badge>
        </div>
      </div>
    </div>
  )
}

export default Card;
