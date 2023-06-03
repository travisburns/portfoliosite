import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/project-1.jpeg"




const Projects = () => {
  return (
    
    <section id="projects" className="pt-48 pb-48">
      
      <div className="projects-section xl: w-[69.997%]">
        <div className="project height-[448.2px] xl: w-[100%] relative left-[5rem]">
          <img src={project1} alt="" className="xl: w-[85%]  h-[350px] "/>
          <div className="project-info xl: w-[360px] min-h-[202px] p-[40px 26px] bg-black relative left-[45rem] bottom-[8rem] ">
          
          <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Projects;