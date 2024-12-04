import React from "react";
import Card from "../components/Card";
import P1Img from "../assets/images/p1.png";
import P2Img from "../assets/images/p2.png";
import P3Img from "../assets/images/p3.png";


const Projects = () => {
  return (
    <section>
      <div className="min-h-screen pt-10 px-6 sm:px-8 md:px-16 xl:px-32">
        <h1 className="py-16 text-2xl sm:text-3xl text-center">My Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 xl:gap-16 justify-items-center xl:text-lg">

          <Card
            image={P1Img}
            title={"Indoor Asset Tracking System"}
            tags={["Altium", "Solidworks","Neoden4", "C/C++", "RP2040"]}
            description={"Developed an Indoor Asset Tracking System using Ultra-Wideband (UWB) technology for sub-10-centimeter localization accuracy. Designed two custom PCBs: a base station connected to a web server for centralized tracking and a sensor node with an RFID reader, barcode scanner, display, control buttons, and battery backup for reliable operation."}
            />
          
          <Card 
            image={P2Img}
            title={"Inventory Management and POS System"}
            tags={["HTML", "SCSS","JavaScript", "PHP", "MySQL"]}
            description={"Developed a scalable web-based inventory management and point-of-sale (POS) system using object-oriented programming and MVC architecture. Key features include barcode scanning, automated reordering, real-time inventory tracking, role-based login, customer and vendor management, and customized report generation."}
            />
          
          <Card 
            image={P3Img}
            title={"Air Quality Monitor"}
            tags={["Altium","Neoden4", "C/C++", "RP2040"]}
            description={"Designed and assembled a custom PCB and developed embedded firmware in C to monitor air quality by measuring particulate matter, CO2, and other toxic gases. The system supports both wired and wireless connectivity via 4G, WiFi, and Ethernet. Data is visualized in real-time through a web interface, including alerts for critical conditions."}
            />
            
        </div>
      </div>
    </section>
      
  )
}

export default Projects;