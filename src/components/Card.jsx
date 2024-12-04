import React from "react";

const Card = ({ title, description, image, tags }) => {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-col items-center max-w-4xl p-4 md:p-6 border border-slate-800 rounded-lg bg-black bg-opacity-20 shadow-lg overflow-hidden text-white hover:shadow-glow-slate">
      <div className="px-6 sm:px-0 sm:w-2/5 lg:w-full lg:h-60 lg:px-8">
        <img src={image} alt="project image" className="w-full h-full max-h-56 object-contain object-center"/>
      </div>
      <div className="flex flex-col sm:w-3/5 lg:w-full px-4">
        <h2 className="text-lg py-2">{title}</h2>
        <p className="text-base text-justify">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
          {tags[0]}
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
          {tags[1]}
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
          {tags[2]}
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
          {tags[3]}
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
          {tags[4]}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card;
