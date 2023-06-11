import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import coca from "../assets/coca.png"
import projectArrow from "../assets/project-arrow.png"
import github from "../assets/github.png"
import ProjectBackground from "../scenes/ProjectBackground";
import SkillsBackground from "./SkillsBackground";

const Projects = () => {
  return (
    
    <section id="projects" className="pt-48  h-[1139px] xl:h-[1600px] z-[12] relative">
    
      <ProjectBackground className="relative z-[11]"/>
      
      <div className=" bg-gradient-to-r from-slate-950 relative z-[12] bottom-[45rem] xl:bottom-[68rem] xxl:bottom-[37.5rem]">
      {/* Project title text */}
      <div className="projects-title w-[90vw]  w-5/6 pb-[12rem] relative left-[8%]">
      <p className="project-title_desc text-[2.7em] w-[100%] font-playfair mb-5 xl:text-[7rem] xl:w-[50%]"><span className="text-red">Flawlessly</span> Fusing <span className="text-red">Creativity</span> and <span className="text-red">Expertise</span></p>
      
      
      </div>
      {/* {Project container} */}
     
      <div className="item-container  relative  w-[82.5%] text-[.65em] ml-[1.5rem] sm:ml-[4rem] md:ml-[5.5rem] lg:ml-[8.2rem] xxl:ml-[10rem] z-[12]">
      
        {/* Project info */}
        <div className="item-info relative z-[12]">
          {/* Project image */}
          <div className="item-image-container relative">
            <div className="item-img  h-[150px] xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xxl:h-[506.66px] relative">
              <img src={coca} className="featured-item-image-inner relative w-[86%] h-[100%]"/>
              </div>
              {/* Project info/ turns into right hand box at 860 width */}
              <div className="item-context p-[20px] relative bottom-[5rem] sm:bg-black xs:bottom-[10rem] sm:p-[20px] sm:w-[15%] sm:h-[100px] sm:bottom-[4rem] sm:left-[80%] sm:h-[100%]">
              {/* Above is the parent container, likely will need to be overaching stats on this above and take them off the below if possible */}
              <div className="item-desc relative m-[0 0 2.5em] text-[0.5rem] leading-[1.3em] text-left font-playfair text-white bottom-[4rem] xs:bottom-[2rem] sm:text-white sm:bottom-[0.8rem]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
     
              <div className="item-title flex m-[0 0 2.5em] w-[70%] mt-[1rem] text-[0.5rem] leading-[1.3em] text-left font-Lato xs:mt-[6rem] text-white sm:text-white sm:mt-[0] sm:w-[100%]">
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="project-links flex relative mt-[0.3rem] ml-[40%] w-[20%] min-w-[20%] xs:left-[20%] xs:w-[10%] sm:block sm:top-[0rem] sm:left-[1rem]">
                <img src={github} alt="" className=" bottom-[0.40rem]  w-[3em] h-[3em] sm:top-[-0.5rem] relative" />
                <img src={projectArrow} alt="" className=" w-[2em] h-[2em] "/>
                
              </div>
              </div>
              
             
              </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;