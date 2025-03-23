
import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch("src/data/contactData.json");
        const data = await response.json();

        // Dynamically import icons
        const updatedData = await Promise.all(
          data.map(async (item) => {
            const iconModule = await import("react-icons/fa");
            return {
              ...item,
              icon: iconModule[item.icon] || null
            };
          })
        );

        setContacts(updatedData);
      } catch (error) {
        console.error("Error loading contacts:", error);
      }
    };

    fetchContactData();
  }, []);

  return (
    <section>
      <div className="min-h-screen pt-10 px-6 sm:px-8 md:px-16 xl:px-32">
        <h1 className="py-16 text-2xl sm:text-3xl text-center">Contact Me</h1>

        <div className="flex flex-col justify-center gap-4 sm:text-lg 3xl:text-xl py-8 lg:py-4 2xl:py-10">
          <p>Let's connect!</p>
          <p>Reach out via email or follow me on social media to discuss projects, ideas, or simply say hello.</p>
        </div>
        
        <div className="flex justify-center items-stretch gap-6 xl:gap-12 3xl:gap-24 rounded-lg p-5 h-32">

        {contacts.map((item, index) => (
          <a key={index} href={item.link} className="flex flex-col justify-end items-center w-16 group">
            <span className="text-3xl border-2 rounded-full p-2.5 group-hover:text-4xl group-hover:-translate-y-1 duration-300">
              <item.icon />
            </span>
            <span className="hidden group-hover:block">{item.title}</span>
          </a>
        ))
        }
        </div>

        <div className="flex justify-center pt-16 3xl:pt-32">
          <Logo scale={0.7} animate={1} className="animate-flipv" />
        </div>
      </div>
    </section>
  )
}

export default Contact;
