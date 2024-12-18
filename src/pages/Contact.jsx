import React from "react";
import Logo from "../components/Logo";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope} from "react-icons/fa";

const Contact = () => {

  return (
    <section>
      <div className="min-h-screen pt-10 px-6 sm:px-8 md:px-16 xl:px-32">
        <h1 className="py-16 text-2xl sm:text-3xl text-center">Contact Me</h1>

        <div className="flex flex-col justify-center gap-4 sm:text-lg 3xl:text-xl py-8 lg:py-4">
          <p>Let's connect!</p>
          <p>Reach out via email or follow me on social media to discuss projects, ideas, or simply say hello.</p>
        </div>
        
        <div className="flex justify-center items-stretch gap-6 xl:gap-12 3xl:gap-24 rounded-lg p-5 h-32">

          <a href="" className="flex flex-col justify-end items-center w-16 group">
            <span className="text-3xl border-2 rounded-full p-2.5 group-hover:text-4xl group-hover:-translate-y-1 duration-300">
              <FaEnvelope />
            </span>
            <span className="hidden group-hover:block">Email</span>
          </a>

          <a href="" className="flex flex-col justify-end items-center w-16 group">
            <span className="text-3xl border-2 rounded-full p-2.5 group-hover:text-4xl group-hover:-translate-y-1 duration-300">
              <FaLinkedin />
            </span>
            <span className="3xl:text-lg hidden group-hover:block">Linkedin</span>
          </a>

          <a href="" className="flex flex-col justify-end items-center w-16 group">
            <span className="text-3xl border-2 rounded-full p-2.5 group-hover:text-4xl group-hover:-translate-y-1 duration-300">
              <FaGithub />
            </span>
            <span className="hidden group-hover:block">Github</span>
          </a>

          <a href="" className="flex flex-col justify-end items-center w-16 group">
            <span className="text-3xl border-2 rounded-full p-2.5 group-hover:text-4xl group-hover:-translate-y-1 duration-300">
              <FaInstagram />
            </span>
            <span className="hidden group-hover:block">Instagram</span>
          </a>

        </div>

        <div className="flex justify-center pt-16 3xl:pt-32">
          <Logo scale={0.7} animate={1} className="animate-flipv" />
        </div>
      </div>
    </section>
  )
}

export default Contact;
