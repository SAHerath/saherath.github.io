
import React from "react";
import Logo from "../components/Logo";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import * as FaIcons from "react-icons/fa";

const Contact = ({data}) => {
  // console.log(data);

  const icons = {
    FaEnvelope: <FaEnvelope />,
    FaLinkedin: <FaLinkedin />,
    FaGithub: <FaGithub />,
    FaInstagram: <FaInstagram />,
  };

  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {

  //   const fetchContacts = async () => {
  //     try {
  //       const response = await fetch(import.meta.env.BASE_URL + "data/contactData.json");
  //       if (!response.ok) throw new Error("Failed to load contacts");
        
  //       const data = await response.json();

  //       // Map icons dynamically
  //       const updatedData = data.map((item) => ({
  //         ...item,
  //         icon: FaIcons[item.icon] || FaIcons.FaQuestionCircle, // Fallback icon
  //       }));

  //       setContacts(updatedData);
  //     } catch (error) {
  //       console.error("Error loading contacts:", error);
  //     }
  //   };

  //   fetchContacts();
  // }, []);

  return (
    <section>
      <div className="min-h-screen pt-10 px-6 sm:px-8 md:px-16 xl:px-32">
        <h1 className="py-16 text-2xl sm:text-3xl text-center">Contact Me</h1>

        <div className="flex flex-col justify-center gap-4 sm:text-lg 3xl:text-xl py-8 lg:py-4 2xl:py-10">
          <p>Let's connect!</p>
          <p>Reach out via email or follow me on social media to discuss projects, ideas, or simply say hello.</p>
        </div>
        
        <div className="flex justify-center items-stretch gap-6 xl:gap-12 3xl:gap-24 rounded-lg p-5 h-32">

        {data?.map((item, index) => (
          <a key={index} href={item.link} className="flex flex-col justify-end items-center w-16 group">
            <span className="text-3xl border-2 rounded-full p-2.5 group-hover:text-4xl group-hover:-translate-y-1 duration-300">
              {icons[item.icon] || "?"}
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
