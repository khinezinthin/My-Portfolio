import React, { useEffect, useState } from "react";
import "./App.css";
import SkillAndEducation from "./components/sections/skill/SkillAndEducation";
import Experience from "./components/sections/experience/Experience";
// import Sidebar from "./components/sidebar/Sidebar";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/sections/about/About";
import ProjectShow from "./components/sections/projectShow/ProjectShow";
import DarkMode from "./components/darkMode/DarkMode";

import MoreSkill from "./components/sections/more-skill/MoreSkill";

import Landing from "./components/sections/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Testimonial from "./components/sections/Testimonial/Testimonial";
import Loading from "./components/loading/Loading";

const App = () => {

  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
        setLoading(false);
    },[3000])
  },[])
  
  return (
    <>
      {loading ? 
      (
        <div>
          <Loading/>
        </div>
      )
      : 
      (
        <div>
        <div className="">
        <div>
          {/* <Sidebar /> */}
          <Navbar/>
        </div>

        <div className="w-full">
          <DarkMode />

          <section id="0" className=" overflow-hidden">
            <Landing />
          </section>

          <div className=" bg-[#FFFFFF] dark:bg-[#000000] duration-200">
          <section id="1">
            <About />
            <MoreSkill />
          <Testimonial />
          </section>
          </div>

          <div className=" bg-[#FFFFFF] dark:bg-[#000000] duration-200">
            <section id="2">
              <Experience />
              <SkillAndEducation />
            </section>

          <section id="3">
            <ProjectShow />
          </section>
          </div>


          <section id="4">
            <Contact />
          </section>

          <Footer />
        </div>
      </div>
        </div>
      )}
    </>
  );
};

export default App;
