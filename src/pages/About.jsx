import React from "react";
import WorkspaceImg from "/images/workspace.png";

const About = () => {

  return ( 
    <section>
      <div className="min-h-screen pt-10 px-6 sm:px-10 md:px-16 lg:px-10 xl:px-20 flex flex-col-reverse lg:flex-row lg:justify-around items-center gap-8 xl:gap-16">

        <div className="w-2/3 lg:w-2/5 max-w-lg">
          <img src={WorkspaceImg} alt="Workspace Photo"/>
        </div>

        <div className="flex flex-col gap-4 lg:w-3/5 text-white">
          <h1 className="py-16 text-2xl sm:text-3xl text-center">About Me</h1>
          <div className="text-justify sm:text-lg 3xl:text-xl 2xl:py-12">
            <p>
              I’m an electronics engineer turned software developer, with over five years of experience in hardware design and a passion for innovation. My journey began with developing embedded systems and IoT solutions, where I refined my expertise in PCB design, firmware development, and wireless sensor networks. Throughout my career, I’ve been driven by a self-motivated and adaptable mindset, thriving on learning and tackling new challenges.
            </p>
            <br />
            <p>
              As my interest in software development grew, I transitioned into web development, earning a second degree in IT while balancing hands-on work in both hardware and software domains. This unique blend of expertise allows me to approach challenges holistically, bridging the gap between hardware and software to create integrated solutions.
            </p>
            <br />
            <p>
              Currently pursuing a master’s in Computer Science, I am focused on developing innovative, efficient, and scalable systems, ranging from low-level programming to crafting user-friendly web applications. My goal is to apply my experience and knowledge to deliver meaningful solutions and make a lasting impact in the IT field.
            </p>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default About;