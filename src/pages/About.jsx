import React from "react";

const About = () => {
  return ( 
    <section>
        <div className="flex flex-col gap-4 p-16 text-white">
          <h1 className="text-2xl sm:text-3xl text-center">About Me</h1>
          <div className="text-justify sm:text-lg py-8">
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
    </section>
   );
}
 
export default About;