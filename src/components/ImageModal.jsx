import React, { useState, useEffect } from "react";

const ImageModal = ({ imageSrc, onClose }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setScrollY(window.scrollY);
    document.body.style.overflow = "hidden"; //scroll off

    return () => {
      document.body.style.overflow = "auto"; // scroll on
    };
  }, []);

  return (
    <div onClick={onClose} className="fixed left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center cursor-pointer"
      style={{
        top: `${scrollY+20}px`,
      }}
    >
      {/* <button onClick={onClose} className="absolute top-20 right-16 text-white text-4xl font-bold" >
        &times;
      </button> */}
      <div className="relative sm:w-11/12 md:w-4/5 max-w-[700px] p-4 rounded-2xl shadow-lg">
        <img src={imageSrc} alt="enlarged image" className="w-full max-h-[600px] object-contain object-center rounded-lg" />
      </div>
    </div>
  );
};

export default ImageModal;