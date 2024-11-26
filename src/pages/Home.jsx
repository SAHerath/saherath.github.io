import {PiHandWaving } from "react-icons/pi";
import ProfileImg from "../assets/images/avatar3.png";


const Home = () => {
  return ( 
    <section>
      <div className="h-screen pt-12 md:px-16 flex items-center justify-around flex-col md:flex-row">

        <div className="font-nunito text-center md:text-left">
          <div className="flex justify-center md:justify-start gap-4 text-4xl sm:text-6xl">
            <h1 className="font-semibold">Hello</h1>
            <PiHandWaving className="animate-wiggle"/>
          </div>
          <div className="py-4">
            <h2 className="text-3xl sm:text-5xl">Im Anuradha Herath</h2>
          </div>
        </div>

        <div className="w-80 bg-gradient-to-t from-black rounded-vl overflow-hidden backdrop-blur-md">
            <img src={ProfileImg} alt="Profile Photo" />
        </div>
      </div>
    </section>
   );
}
 
export default Home;