import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Project1 from "../assets/project-1.jpeg"
import projectArrow from "../assets/project-arrow.png"
import github from "../assets/github.png"


const Projects = () => {
  return (
    
    <section id="projects" className="pt-48 pb-48 z-[12] relative bottom-[1500px]">
      <div className="projects-title w-[90vw]  ml-[1.5rem] pb-[12rem]">
      <p className="project-title_desc text-[2.7em] w-[100%] font-playfair mb-5"><span className="text-red">Flawlessly</span> Fusing <span className="text-red">Creativity</span> and <span className="text-red">Expertise</span></p>
      
      <div className="project-title-para">
        <p className="project-title-para-text w-[262px] h-[35px] text-[1.1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima consequatur, eius nobis odit accusantium.</p>
      </div>
      </div>
      
      <div className="item-container w-[100%] text-[.65em] ml-[1.5rem]">
        <div className="item-info">
          <div className="item-image-container relative">
            <div className="item-img h-[150px] xs:h-[200px] sm:h-[250px] relative">
              <img src={Project1} className="featured-item-image-inner relative w-[70%] h-[100%]"/>
              </div>
              <div className="item-context p-[20px] relative bottom-[10rem]">
              <div className="item-desc relative m-[0 0 2.5em] text-[0.5rem] leading-[1.3em] text-left font-playfair text-black bottom-[-1rem] xs:bottom-[2rem]  sm:bottom-[5rem]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
     
              <div className="item-title relative m-[0 0 2.5em] top-[5rem] text-[0.5rem] leading-[1.3em] text-left font-Lato text-black">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="project-arrow relative top-[7rem]">
                <img src={projectArrow} alt="" className="absolute left-[11rem] bottom-[34px] w-[1em] h-[1em]"/>
                <img src={github} alt="" className="absolute left-[10.6rem] bottom-[60px] w-[2em] h-[2em]" />
              </div>
             
              </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Projects;