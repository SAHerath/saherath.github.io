import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("src/data/projectData.json") 
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);


  return (
    <section>
      <div className="min-h-screen pt-10 px-6 sm:px-8 md:px-16 xl:px-32">
        <h1 className="py-16 text-2xl sm:text-3xl text-center">My Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 xl:gap-16 justify-items-center 2xl:py-10">
          
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              tags={project.tags}
              description={project.description}
            />
          ))}
    
        </div>
 
      </div>
    </section>
      
  )
}

export default Projects;