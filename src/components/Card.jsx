import React from "react";
import Badge from "./Badge";

const Card = ({ title, description, image, tags, onImageClick }) => {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-col items-center max-w-4xl p-4 md:p-6 border border-slate-800 rounded-lg bg-black bg-opacity-20 shadow-lg overflow-hidden text-white hover:shadow-glow-slate">
      <div className="relative group px-6 sm:px-0 sm:w-2/5 lg:w-full lg:h-60 lg:px-8">
        <img onClick={onImageClick} src={image} alt="project image" className="w-full h-full max-h-56 object-contain object-center cursor-pointer"/>
        <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-60 text-slate-200 hidden group-hover:block text-center py-1">
          <p>Click to Enlarge</p>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 mx-6 bg-black bg-opacity-60 text-slate-200 hidden group-hover:block">
          <p>Click to Enlarge</p>
        </div> */}
      </div>
      <div className="flex flex-col sm:w-3/5 lg:w-full px-4">
        <h2 className="text-lg 3xl:text-xl py-2">{title}</h2>
        <p className="text-base 3xl:text-lg text-justify">{description}</p>
        <div className="flex flex-wrap gap-3 pt-4">
        {tags.map((tag,i) => (
          <Badge key={i}>{tag}</Badge>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Card;
