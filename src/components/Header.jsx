import React, {useState} from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import {PiListBold, PiXBold} from "react-icons/pi";
import Logo from "/logo/AH.svg";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => { 
        setMenuOpen(!menuOpen);
    }
    const handleResume = () => {
        console.log("hello handleResume!");
    }
     
    return ( 
        <header className="fixed w-full z-40 bg-gradient-to-b from-gray-800 from-5% backdrop-blur-lg shadow-xl">
            <nav className="font-nunito text-slate-300">
                <div className="h-16 flex justify-between items-strech px-4">
                    <h1 className="self-center">
                        <a href="" className=" hover:shadow-glow">
                            <img src={Logo} className="block h-10 text-white" alt="My Logo" />
                        </a>
                    </h1>
                    <ul className="hidden sm:flex items-center">
                        <li>
                            <LinkScroll activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={-50} className="block w-20 md:w-24 py-5 rounded-t-lg hover:border-b-2 text-white">Home</LinkScroll>
                        </li>
                        <li>
                            <LinkScroll className="block w-20 md:w-24 py-5 rounded-t-lg hover:border-b-2" to="about">About</LinkScroll>
                        </li>
                        <li>
                            <LinkScroll className="block w-20 md:w-24 py-5 rounded-t-lg hover:border-b-2" to="projects">Projects</LinkScroll>
                        </li>
                        <li>
                            <LinkScroll className="block w-20 md:w-24 py-5 rounded-t-lg hover:border-b-2" to="contact">Contact</LinkScroll>
                        </li>
                    </ul>
                    <ul className="flex self-center gap-3 ">
                        <li>
                            <a onClick={handleResume} className="px-4 py-2 rounded-md cursor-pointer text-white bg-green-600 hover:text-black hover:shadow-glow-green">Resume</a>
                        </li>
                        <li className="sm:hidden">
                            <a onClick={toggleMenu} className={"cursor-pointer text-2xl group" + (menuOpen ? " open" : "")}>
                                <i className="block group-[.open]:hidden"><PiListBold/></i>
                                <i className="hidden group-[.open]:block"><PiXBold/></i>
                            </a>
                        </li>
                    </ul>
                </div>
                {menuOpen && 
                <div className="pb-2 sm:hidden">
                    <ul className="flex flex-col items-stretch px-8 sm:px-16 text-lg">
                        <li>
                            <LinkScroll onClick={toggleMenu} to="home" spy={true} smooth={true} duration={500} className="block py-1 rounded-full hover:bg-gradient-to-t from-black text-white">Home</LinkScroll>
                        </li>
                        <li>
                            <LinkScroll onClick={toggleMenu} to="about" spy={true} smooth={true} duration={500} className="block py-1 rounded-full hover:bg-gradient-to-t from-black">About</LinkScroll>
                        </li>
                        <li>
                            <LinkScroll onClick={toggleMenu} to="projects" spy={true} smooth={true} duration={500} className="block py-1 rounded-full hover:bg-gradient-to-t from-black">Projects</LinkScroll>
                        </li>
                        <li>
                            <LinkScroll onClick={toggleMenu} to="contact" spy={true} smooth={true} duration={500} className="block py-1 rounded-full hover:bg-gradient-to-t from-black">Contact</LinkScroll>
                        </li>
                    </ul>
                </div>
                }

            </nav>

        </header>
     );
}
 
export default Header;