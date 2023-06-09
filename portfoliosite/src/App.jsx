import { useEffect, useState } from "react"
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import MySkills from './scenes/MySkills';
import LineGradient from './components/LineGradient'
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from './scenes/Navbar'
import Projects from './scenes/Projects'

import Contact from "./scenes/Contact"
import Footer from "./scenes/Footer";
import StarsCanvas from "./scenes/StarsCanvas.jsx";
import ProjectBackground from "./scenes/ProjectBackground.jsx"
import SkillsBackground from "./scenes/SkillsBackground";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
   <div className="app ">
    
    <Navbar 
    isTopOfPage={isTopOfPage}   
    selectedPage ={selectedPage} 
    setSelectedPage={setSelectedPage}
    /> 
    <div className="w-5/6 mx-auto md:h-full ">
    
      {isAboveMediumScreens && (
        <DotGroup
          selectedPage = {selectedPage}
          setSelectedPage = {setSelectedPage}
        />
      )}
      
      <Landing setSelectedPage={setSelectedPage} />
    </div>
    
   
   <div className="w-5/6 mx-auto md:h-full ">
   
        <MySkills />
       
   </div>
   
   <div className="w-6/6 mx-auto">
  
    <Projects />
   </div>

 
   


 
   <div className="w-5/6 mx-auto md:h-full">
    <Contact />
   </div>
        <Footer />
</div>
  )
}

export default App
