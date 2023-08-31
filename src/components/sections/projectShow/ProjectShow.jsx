import React from "react";
import pj1 from "../../../assets/projectPhoto/pj1.png";
import pj2 from "../../../assets/projectPhoto/pj2.png";
import pj3 from "../../../assets/projectPhoto/pj3.png";
import "./projectShow.css";
import Banner from "../../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ProjectShow = () => {
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
        className="w-[70%] mx-auto text-[#0B0B13] dark:text-[#ccc] text-center tracking-wider text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem
          culpa nulla unde voluptatum. Iusto dolorum omnis unde debitis minima?
          Odio provident vel voluptatibus magni, sint minus repudiandae facilis
          et.
        </p>
      </div>
      <div
        className="w-[90%] flex max-lg:flex-wrap max-sm:flex-col max-lg:gap-14 justify-between mb-24 mx-auto"
      >
        {/* project card  */}
        <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="cursor-pointer w-[32%] max-lg:w-[45%] max-sm:w-[100%]">
        <a
          href="https://edu-pro-dashboard2.netlify.app"
          className=" card dark:card-shadow duration-300 overflow-hidden py-5 flex flex-col gap-3 bg-[#F7F7FF] dark:bg-[#0B0B13] rounded-md shadow-md"
        >
          <img src={pj2} className="w-[100%]" />
          <h1 className="text-[#0B0B13] dark:text-[#FFFFFF] text-lg tracking-wide font-medium text-center">
            Dashboard Web Design
          </h1>
          <div className="flex my-3 gap-5 mx-auto">
            <a
              href="https://edu-pro-dashboard2.netlify.app"
              className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded"
            >
              Demo
            </a>
            <a
              href="https://github.com/khinezinthin/Edu_Pro_Dashboard"
              className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded"
            >
              Git Hub
            </a>
          </div>
        </a>
        </div>

        <div
        className="cursor-pointer w-[32%] max-lg:w-[45%] max-sm:w-[100%]"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="50">
        <a
          href="https://eduvide.netlify.app"
          className=" card duration-300 overflow-hidden py-5 flex flex-col gap-3 bg-[#F7F7FF] dark:bg-[#0B0B13] rounded-md shadow-md"
        >
          <img src={pj1} className="w-[100%]" />
          <h1 className="text-[#0B0B13] dark:text-[#FFFFFF] text-lg tracking-wide font-medium text-center">
            Frontend Web Design
          </h1>
          <div className="flex my-3 gap-5 mx-auto">
            <a
              href="https://eduvide.netlify.app"
              className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded"
            >
              Demo
            </a>
            <a
              href="https://github.com/khinezinthin/Edu-Pro"
              className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded"
            >
              Git Hub
            </a>
          </div>
        </a>
        </div>

        <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        className="cursor-pointer w-[32%] max-lg:w-[45%] max-sm:w-[100%] max-lg:mx-auto">
        <a
          href="https://contact-web1.netlify.app"
          className=" card duration-300 overflow-hidden py-5 flex flex-col gap-3 bg-[#F7F7FF] dark:bg-[#0B0B13] rounded-md shadow-md"
        >
          <img src={pj3} className="w-[100%]" />
          <h1 className="text-[#0B0B13] dark:text-[#FFFFFF] text-lg tracking-wide font-medium text-center">
            Contact Web Design
          </h1>
          <div className="flex my-3 gap-5 mx-auto">
            <a
              href="https://contact-web1.netlify.app"
              className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded"
            >
              Demo
            </a>
            <a
              href="https://github.com/khinezinthin/Contact-web"
              className="go-up cursor-pointer py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded"
            >
              Git Hub
            </a>
          </div>
        </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
