import React from "react";
import pj1 from "../../../assets/projectPhoto/pj1.png";
import pj2 from "../../../assets/projectPhoto/pj2.png";
import pj3 from "../../../assets/projectPhoto/pj3.png";
import pj4 from "../../../assets/projectPhoto/pj4.png";
import "./projectShow.css";
import Banner from "../../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ProjectShow = () => {
  const projects = [
    {id: 4, name: "Web POS", demo: "https://webpos1.netlify.app", git: "https://github.com/khinezinthin/Web-Pos", img: pj4 },
    {id: 2, name: "EduVibe Web Design", demo: "https://eduvide.netlify.app", git: "https://github.com/khinezinthin/Edu-Pro", img: pj2 },
    {id: 3, name: "Dashboard Web Design", demo: "https://edu-pro-dashboard2.netlify.app", git: "https://github.com/khinezinthin/Edu_Pro_Dashboard", img: pj3 },
    {id: 1, name: "Contact Web", demo: "https://contact-web1.netlify.app", git: "https://github.com/khinezinthin/Contact-web", img: pj1 },
  ]
  return (
    <div className="w-[100%] flex flex-col gap-16 justify-center bg-[#FFFFFF] dark:bg-[#000000] duration-200">
      <div
        className="w-[90%] pt-14 flex gap-7 flex-col justify-center mx-auto"
      >
        <h1 className=" text-center">
          <Banner title="Recent Project" />
        </h1>
        <p
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-once="true"
        className="w-[70%] mx-auto text-[#0B0B13] dark:text-[#ccc] text-center tracking-wider text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem
          culpa nulla unde voluptatum. Iusto dolorum omnis unde debitis minima?
          Odio provident vel voluptatibus magni, sint minus repudiandae facilis
          et.
        </p>
      </div>
      <div
        className="w-[90%] flex flex-wrap gap-9 max-sm:flex-col max-lg:gap-14 justify-center mb-24 mx-auto"
      >
        {/* project card  */}
        {projects?.map(pj => {
          return(
            <div key={pj?.id}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
        className="cursor-pointer w-[30%] max-lg:w-[45%] max-sm:w-[100%]">
        <a target="_blank"
          href={pj?.demo}
          className=" card dark:card-shadow duration-300 overflow-hidden py-5 flex flex-col gap-3 bg-[#F7F7FF] dark:bg-[#0B0B13] rounded-md shadow-md"
        >
          <img src={pj?.img} className="w-[100%]" />
          <h1 className="text-[#0B0B13] dark:text-[#FFFFFF] text-lg tracking-wide font-medium text-center">
            {pj?.name}
          </h1>
          <div className="flex my-3 gap-5 mx-auto">
            <a target="_blank"
              href={pj?.demo}
              className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded"
            >
              Demo
            </a>
            <a target="_blank"
              href={pj?.git}
              className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded"
            >
              Git Hub
            </a>
          </div>
        </a>
        </div>
          )
        })}

      </div>
    </div>
  );
};

export default ProjectShow;
