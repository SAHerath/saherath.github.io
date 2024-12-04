import React from "react";
import P1Img from "../assets/images/p1.png";
import P2Img from "../assets/images/p2.png";
import P3Img from "../assets/images/p3.png";


const Projects = () => {
  return (
    <section>
      <div className="min-h-screen pt-10 px-6 sm:px-8 md:px-16 xl:px-32">
        <h1 className="py-16 text-2xl sm:text-3xl text-center">My Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 xl:gap-16 justify-items-center xl:text-lg">

          <div className="flex flex-col sm:flex-row lg:flex-col items-center max-w-4xl p-4 md:p-6 border border-slate-800 rounded-lg bg-black bg-opacity-30 shadow-lg overflow-hidden text-white hover:shadow-glow-slate">
            <div className="px-6 sm:px-0 sm:w-2/5 lg:w-full lg:h-60 lg:px-8">
              <img src={P1Img} alt="project image" className="w-full h-full max-h-56 object-contain object-center"/>
            </div>
            <div className="flex flex-col sm:w-3/5 lg:w-full px-4">
              <h2 className="text-lg py-2">Indoor Asset Tracking System</h2>
              <p className="text-base text-justify">
                Developed an Indoor Asset Tracking System using Ultra-Wideband (UWB) technology for sub-10-centimeter localization accuracy. Designed two custom PCBs: a base station connected to a web server for centralized tracking and a sensor node with an RFID reader, barcode scanner, display, control buttons, and battery backup for reliable operation.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  Altium
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  Solidworks
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  Neoden4
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  C/C++
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  RP2040
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-center max-w-4xl p-4 md:p-6 border border-slate-800 rounded-lg bg-black bg-opacity-20 shadow-lg overflow-hidden text-white hover:shadow-glow-slate">
            <div className="px-6 sm:px-0 sm:w-2/5 lg:w-full lg:h-60 lg:px-8">
              <img src={P2Img} alt="project image" className="w-full h-full max-h-56 object-contain object-center"/>
            </div>
            <div className="flex flex-col sm:w-3/5 lg:w-full px-4">
              <h2 className="text-lg py-2">Inventory Management and POS System</h2>
              <p className="text-base text-justify">
                Developed a scalable web-based inventory management and point-of-sale (POS) system using object-oriented programming and MVC architecture. Key features include barcode scanning, automated reordering, real-time inventory tracking, role-based login, customer and vendor management, and customized report generation.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  HTML
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  SCSS
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  JavaScript
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  PHP
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  MySQL
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-center max-w-4xl p-4 md:p-6 border border-slate-800 rounded-lg bg-black bg-opacity-30 shadow-lg overflow-hidden text-white hover:shadow-glow-slate">
            <div className="flex gap-2 px-6 sm:px-0 sm:w-2/5 lg:w-full lg:h-60 lg:px-8">
              <img src={P3Img} alt="project image" className="w-full h-full max-h-56 object-contain object-center"/>
            </div>
            <div className="flex flex-col sm:w-3/5 lg:w-full px-4">
              <h2 className="text-lg py-2">Air Quality Monitor</h2>
              <p className="text-base text-justify">
                Designed and assembled a custom PCB and developed embedded firmware in C to monitor air quality by measuring particulate matter, CO2, and other toxic gases. The system supports both wired and wireless connectivity via 4G, WiFi, and Ethernet. Data is visualized in real-time through a web interface, including alerts for critical conditions.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
              <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  Altium
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  Neoden4
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  C/C++
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-normal px-2.5 py-1 rounded-full border border-black">
                  RP2040
                </span>
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </section>
      
  )
}

export default Projects;