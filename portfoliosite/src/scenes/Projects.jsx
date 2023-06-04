import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Project1 from "../assets/project-1.jpeg"
import projectArrow from "../assets/project-arrow.png"



const Projects = () => {
  return (
    
    <section id="projects" className="pt-48 pb-48">
      
      <div className="item-container w-[100%]">
        <div className="item-info">
          <div className="item-image-container relative">
            <div className="item-img h-[150px]">
              <img src={Project1} className="featured-item-image-inner relative w-[100%] h-[100%]"/>
              </div>
              <div className="item-context p-[20px] relative bottom-[10rem]">
              <div className="item-desc relative m-[0 0 2.5em] text-[0.9rem] leading-[1.3em] text-left font-playfair text-black">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
     
              <div className="item-title relative m-[0 0 2.5em] top-[5rem] text-[0.7rem] leading-[1.3em] text-left font-Lato text-black">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="project-arrow relative top-[7rem] left-[2rem]">
                <img src={projectArrow} alt="" className="absolute right-[30px] bottom-[34px] w-[1em] h-[1em]"/>
              </div>
              </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Projects;