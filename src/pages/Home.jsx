import ProfileImg from "../assets/images/avatar3.png";

const Home = () => {
  return ( 
    <section>
      <div className="pt-12 md:px-16 flex items-center justify-around flex-col md:flex-row">
        <div className="font-nunito text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl font-semibold">Hello</h1>
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