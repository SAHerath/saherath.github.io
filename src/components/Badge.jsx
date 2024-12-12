import React from "react";

const Badge = ({children}) => {
  return (
    <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
      {children}
    </span>
  )
}

export default Badge;