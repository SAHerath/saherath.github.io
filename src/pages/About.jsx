import React from "react";
import WorkspaceImg from "/images/workspace.png";

const About = ({data}) => {
  // console.log(data);

  return ( 
    <section>
      <div className="min-h-screen pt-10 px-6 sm:px-10 md:px-16 lg:px-10 xl:px-20 flex flex-col-reverse lg:flex-row lg:justify-around items-center gap-8 xl:gap-16">

        <div className="w-2/3 lg:w-2/5 max-w-lg">
          <img src={data?.photo} alt="Workspace Photo"/>
        </div>

        <div className="flex flex-col gap-4 lg:w-3/5 text-white">
          <h1 className="py-16 text-2xl sm:text-3xl text-center">About Me</h1>
          <div className="text-justify sm:text-lg 3xl:text-xl 2xl:py-12">
            {data.bio?.map((item, index) => (
              <React.Fragment key={index}>
                <p>{item}</p>
                <br />
              </React.Fragment>
            ))
            }
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default About;