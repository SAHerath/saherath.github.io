import React from "react";
import {PiHandWaving } from "react-icons/pi";
import ProfileImg from "../assets/images/avatar3.png";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return ( 
    <section>
      <div className="min-h-screen pt-12 md:px-16 flex items-center justify-around flex-col md:flex-row">

        <div className="font-nunito text-center md:text-left">
          <div className="flex justify-center md:justify-start gap-4 text-4xl sm:text-6xl">
            <h1 className="font-semibold">Hello</h1>
            <PiHandWaving className="animate-wiggle"/>
          </div>
          <div className="py-4 md:pr-8">
            <h2 className="text-3xl sm:text-5xl">Im Anuradha Herath</h2>
          </div>
          <div className="pt-10 text-2xl sm:text-3xl">
            <Typewriter options={{
                        strings: ['Full-Stack Developer', 'DevOps Engineer', 'Embedded Systems Engineer', 'Hardware Design Engineer', 'Electronics R&D Engineer', 'IoT Systems Engineer', 'Freelancer'],
                        autoStart: true,
                        loop: true,
                      }}
            />
          </div>
        </div>

        <div className="w-80 2xl:w-96 bg-gradient-to-t from-black rounded-vl overflow-hidden backdrop-blur-md">
            <img src={ProfileImg} alt="Profile Photo" />
        </div>
      </div>
    </section>
   );
}
 
export default Home;