import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import coca from "../assets/coca.png"
import projectArrow from "../assets/project-arrow.png"
import github from "../assets/github.png"
import ProjectBackground from "../scenes/ProjectBackground";
import SkillsBackground from "./SkillsBackground";
import ProjectBStars1 from "./ProjectBackgroundStars/ProjectBStars1";


const Projects = () => {
  return (
    
    <section id="projects" className="  h-[1139px] xl:h-[1600px] z-[12] relative">
    
      <ProjectBackground className="relative z-[11]"/>
      
      <div className=" bg-gradient-to-r from-slate-950 relative z-[12] bottom-[13rem] h-[16rem] md:bottom-[5rem] md:h-[25rem] xl:bottom-[59rem] xl:h-[38.2rem] xxl:bottom-[77.5rem]">
      {/* Project title text */}
      <div className="projects-title w-[90vw]  w-5/6 pb-[12rem] relative left-[8%] ">
      <p className="project-title_desc text-[2.7em] w-[100%] font-playfair mb-5 sm:w-[50%] md:w-[40%] md:text-[3.7rem] lg:text-[4rem] xl:text-[6rem] xl:w-[50%] xl:mt-[40rem]">
        <motion.span className="text-red"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={ {duration: 1.5 }}
        variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, scale: 100 }
        }}
      >Flawlessly</motion.span> Fusing <span className="text-red">Creativity</span> and <span className="text-red">Expertise</span></p>
      
      
      </div>
      {/* {Project container} */}
       <ProjectBStars1 className="relative z-[11]"/>
      <div className="item-container  relative bottom-[45rem] w-[82.5%] text-[.65em] ml-[1.5rem] sm:ml-[4rem] md:ml-[5.5rem] lg:ml-[8.2rem] xxl:ml-[10rem]  z-[12]">
      
    
        {/* Project info */}
        <motion.div className="item-info relative z-[12]"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, amount: 0.5 }}
         transition={ {duration: 1.5 }}
         variants={{
             hidden: { opacity: 0, y: 50 },
             visible: { opacity: 1, y: 0, }
         }}
        >
          {/* Project image */}
          <div className="item-image-container relative">
            <div className="item-img  h-[150px] xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xxl:h-[706.66px] xxl:top-[-10rem] relative z-[12] ">
              <img src={coca} className="featured-item-image-inner relative w-[86%] h-[100%]"/>
              </div>
              {/* Project info/ turns into right hand box at 860 width */}
             
          </div>
        </motion.div>

      </div>
      <motion.div className="item-context p-[20px] relative z-[13] bottom-[51rem] left-[1rem] sm:bg-black xs:bottom-[55rem] sm:p-[20px] sm:w-[15%] sm:h-[100px] sm:bottom-[50rem] sm:left-[70%] sm:h-[100%] xxl:w-[420px] xxl:min-h-[236px] xxl:p-[50px 30px] xxl:bottom-[65rem] xxl:left-[65%]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={ {duration: 1.5 }}
        variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, }
        }}
      >
              {/* Above is the parent container, likely will need to be overaching stats on this above and take them off the below if possible */}
              <div className="item-desc relative m-[0 0 2.5em] text-[0.5rem] leading-[1.3em] text-left font-playfair text-white bottom-[4rem] xs:bottom-[2rem] sm:text-white sm:bottom-[0.8rem] xxl:text-[1rem]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
     
              <div className="item-title flex m-[0 0 2.5em] w-[70%] mt-[1rem] text-[0.5rem] leading-[1.3em] text-left font-Lato xs:mt-[6rem] text-white sm:text-white sm:mt-[0] sm:w-[100%] xxl:text-[1rem] xxl:mt-[4rem] ">
                <p className="">Lorem ipsum dolor sit amet.</p>
                <div className="project-links flex relative mt-[0.3rem] ml-[40%] w-[20%] min-w-[20%] xs:left-[20%] xs:w-[10%] sm:block sm:top-[0rem] sm:left-[1rem]">
                <img src={github} alt="" className=" bottom-[0.40rem]  w-[3em] h-[3em] sm:top-[-0.5rem] relative" />
                <img src={projectArrow} alt="" className=" w-[2em] h-[2em] "/>
                
              </div>
              </div>
              
             
              </motion.div>
      </div>
    </section>
  );
};

export default Projects;