import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import myskills from '../assets/skills-image.png'
import StarsCanvas from "./StarsCanvas";
import StarsCanvas2 from "./StarsCanvas2";
import StarsCanvas3 from "./StarsCanvas3";
import StarsCanvas4 from "./StarsCanvas4";
import SkillsBackground from "./SkillsBackground";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    
    <section id="skills" className="pt-10 pb-24px relative  z-[12] ">
    <SkillsBackground className=''/>
      {/* HEADER AND IMAGE SECTION */}
      <div className=" md:flex md:justify-between md:gap-16 mt-32">
      
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>
        
        <div className="mt-16 md:mt-0">
        
          {isAboveLarge ? (
            
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              
              <img
                alt="skills"
                className="z-10"
                src={myskills}
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={myskills} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-3">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
                
              </p>
              
            </div>
            
          </div>
          <div className="mt-5">
            <p>
            Extensive experience in React, building dynamic and interactive web applications. 
            Leveraging component-based architecture and state management, 
            delivering efficient solutions for seamless user experiences and optimized performance.
            </p>
          </div>
          <StarsCanvas2 className="canvas-2 w-1/2 md:w-3/4 h-32 relative bottom-[25px] right-0 top-0 z-[11]" />
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
                
              </p>
             
            </div>
            <StarsCanvas3 className="canvas-2 w-1/2 md:w-3/4 h-32 relative bottom-[25px] right-0 top-0 z-[11]" />
          </div>
          <div className="mt-5">
            <p>
            Through innovative thinking, Consistently striving to push boundaries and explore new possibilities. 
            Embracing emerging technologies and creative solutions, bringing fresh perspectives and transformative 
            change to deliver impactful results.
            </p>
          </div>
        </motion.div>
        {/* IMAGINATIVE */}

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <StarsCanvas4 className="w-1/2 md:w-3/4 h-32 relative bottom-[25px] right-0 top-0 z-[11]" />
            
          </div>
          <div className="mt-5">
            <p>
            With an imaginative approach, bringing forth unique and creative ideas, weaving them into captivating web experiences. 
            Through innovative design and storytelling, striving to leave a lasting impression, making the ordinary extraordinary.
            </p>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default MySkills;