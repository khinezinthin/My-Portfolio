import React from "react";
import "./experience.css";
import Banner from "../../Banner/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Experience = () => {
  const experience = [
    {id:1, name: "Contact Web"},
    {id:2, name: "EduVibe Education Website Design"},
    {id:3, name: "EduVibe Dashboard Design"},
    {id:4, name: "Web POS"},
  ]
  return (

    <div className=" bg-[#FFFFFF] dark:bg-[#000000] duration-200 pt-20">

      <div className=" w-[90%] mx-auto">
        {/* <h2 className=" text-left text-3xl font-bold dark:text-white  ">
         
        </h2> */}
        <Banner title="Experience"  />
        <div className=" flex flex-col gap-5 mt-10">
          {/* contact web  */}
          <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" bg-[#f7f7ff] dark:bg-[#0b0b13] rounded p-7 flex flex-col md:flex-row  justify-center items-start gap-10">
            <div className=" w-full md:w-[30%] flex flex-col gap-2 items-start">
              <h2 className=" font-semibold text-xl dark:text-white">
                Jnr . Frontend Developer
              </h2>
              <h2 className=" italic text-[16px] text-slate-600 dark:text-[#ffffffcc]">
                MMS IT / Workshop
              </h2>
              <h2 className=" text-slate-600 text-[16px] dark:text-[#ccc]">
                2023 - Present
              </h2>
              <button className="text-[16px] primary-bg px-3 py-1 rounded text-white">
                Intern
              </button>
            </div>
            <div className=" w-full md:w-[70%]">
              <ul className=" tracking-wider flex flex-col gap-3 max-md:pl-4 dark:text-white">
                {experience?.map(exp => {
                  return(
                    <li key={exp?.id} className=" list-disc">{exp?.name}</li>
                  )
                })}
              </ul>
              {/* <p className="text-[16px] text-slate-600 dark:text-[#ccc]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                quam nesciunt labore veritatis minus delectus iure assumenda
                optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                At ratione nulla hic.{" "}
              </p> */}
            </div>
          </div>
          
        </div>
      </div>
      {/* hr  */}
      <div className=" w-[90%] mx-auto background bg-[url(https://nairo.ibthemespro.com/img/border-dark.png)] dark:invert"></div>
    </div>
  );
};

export default Experience;
