import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Project1 from "../assets/project-1.jpeg"
import projectArrow from "../assets/project-arrow.png"
import github from "../assets/github.png"


const Projects = () => {
  return (
    
    <section id="projects" className="pt-48 pb-48 z-[12] relative bottom-[1500px]">
      {/* Project title text */}
      <div className="projects-title w-[90vw]  w-5/6 pb-[12rem]">
      <p className="project-title_desc text-[2.7em] w-[100%] font-playfair mb-5"><span className="text-red">Flawlessly</span> Fusing <span className="text-red">Creativity</span> and <span className="text-red">Expertise</span></p>
      
      <div className="project-title-para">
        <p className="project-title-para-text w-[262px] h-[35px] text-[1.1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima consequatur, eius nobis odit accusantium.</p>
      </div>
      </div>
      {/* {Project container} */}
      <div className="item-container w-[100%] text-[.65em] ml-[1.5rem] sm:ml-[4rem] md:ml-[5.5rem] lg:ml-[6.5rem]">
        {/* Project info */}
        <div className="item-info">
          {/* Project image */}
          <div className="item-image-container relative">
            <div className="item-img h-[150px] xs:h-[200px] sm:h-[250px] relative">
              <img src={Project1} className="featured-item-image-inner relative w-[70%] h-[100%]"/>
              </div>
              {/* Project info/ turns into right hand box at 860 width */}
              <div className="item-context p-[20px] relative bottom-[5rem] sm:bg-black sm:p-[20px] sm:w-[15%] sm:h-[100px] sm:top[-3rem] sm:left-[30rem]">
              {/* Above is the parent container, likely will need to be overaching stats on this above and take them off the below if possible */}
              <div className="item-desc relative m-[0 0 2.5em] text-[0.5rem] leading-[1.3em] text-left font-playfair text-black bottom-[7rem] xs:bottom-[2rem] sm:text-white sm:bottom-[0.8rem]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
     
              <div className="item-title relative m-[0 0 2.5em] top-[0rem] text-[0.5rem] leading-[1.3em] text-left font-Lato text-black sm:text-white sm:top-[1rem]">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="project-links relative top-[7rem] xs:left-[5rem] sm:flex sm:top-[1rem] sm:left-[3.5rem]">
              <img src={github} alt="" className="  bottom-[60px] w-[2em] h-[2em] sm:top-[-0.5rem] relative" />
                <img src={projectArrow} alt="" className=" bottom-[34px] w-[1em] h-[1em] "/>
                
              </div>
             
              </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Projects;