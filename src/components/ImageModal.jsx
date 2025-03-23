import React, { useState, useEffect } from "react";

const ImageModal = ({ imageSrc, onClose }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setScrollY(window.scrollY);
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`; // remove horizontal shift
    document.body.style.overflow = "hidden"; //scroll off

    return () => {
      document.body.style.overflow = "auto"; // scroll on
      document.body.style.paddingRight = "";
    };
  }, []);

  return (
    <div onClick={onClose} className="absolute inset-0 w-full h-full z-50 bg-black bg-opacity-70 flex justify-center items-center cursor-pointer"
      style={{
        top: `${scrollY}px`,
      }}
    >
      <div className="relative sm:w-11/12 md:w-4/5 max-w-[700px]">
        <img src={imageSrc} alt="enlarged image" className="w-full max-h-[550px] object-contain object-center rounded-lg" />
      </div>
    </div>
  );
};

export default ImageModal;