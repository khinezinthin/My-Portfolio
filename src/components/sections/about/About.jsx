import React from "react";
import kzt from "../../../assets/kzt/66.jpg";
import "./about.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { SiNetlify } from "react-icons/si";
import Banner from "../../Banner/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const About = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center pt-24 bg-[#f7f7ff] dark:bg-[#0e0e17] duration-200">
        <div className=" w-[95%] max-lg:w-[90%] flex justify-center items-center max-lg:flex-col ">
          {/* left img  */}
          <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-[40%] min-[1116px]:w-[35%] max-lg:w-full flex flex-col justify-center item-center gap-8 ">
            {/* img circle  */}
            <div className="max-lg:flex max-lg:justify-center">
              <div className="relative w-[280px] h-[280px] max-[330px]:w-[250px] max-[330px]:h-[250px] max-[300px]:w-[220px] max-[300px]:h-[220px] max-[283px]:w-[190px] max-[283px]:h-[190px]">
                <div className="bg-[#b96636] w-[280px] h-[280px] max-[330px]:w-[250px] max-[330px]:h-[250px] max-[300px]:w-[220px] max-[300px]:h-[220px] max-[283px]:w-[190px] max-[283px]:h-[190px] lg:ml-3 rounded-full border-4 border-blue-600 overflow-hidden ">

                  <img src={kzt} alt="" className="w-[255px] max-[330px]:w-[232px] max-[300px]:w-[200px] max-[283px]:w-[175px] object-cover relative top-[-35px] max-[330px]:top-[-35px] max-[330px]:left-1 max-[300px]:left-2 max-[283px]:left-1 left-2" />
                {/* icon  */}
                <div className="">
                    <div className=" bg-white icon duration-500 cursor-pointer w-8 h-8 rounded-full p-[2px] absolute bottom-[8%] left-[16%] max-lg:left-[11%]">
                        <p className=" bg-[#0b0b13] hover:bg-blue-600 duration-300 w-full h-full flex justify-center items-center text-lg text-white p-1 rounded-full">

                        <BiLogoFacebook />
                      </p>
                    </div>

                    <div className=" bg-white icon duration-500 cursor-pointer w-8 h-8 rounded-full p-[2px] absolute bottom-[-2%] left-[30%] max-lg:left-[25%] max-lg:bottom-[-1%]">
                        <p className=" bg-[#0b0b13] hover:bg-blue-600 duration-300 w-full h-full flex justify-center items-center text-lg text-white p-1 rounded-full">

                        <BiLogoTwitter />
                      </p>
                    </div>

                    <div className= " bg-white icon duration-500 cursor-pointer w-8 h-8 rounded-full p-[2px] absolute bottom-[-5%] right-[42%] max-lg:right-[47%] max-[300px]:right-[45%]">
                        <p className=" bg-[#0b0b13] hover:bg-blue-600 duration-300 w-full h-full flex justify-center items-center text-lg text-white p-1 rounded-full">

                        <BiLogoInstagram />
                      </p>
                    </div>

                    <div className=" bg-white icon duration-500 cursor-pointer w-8 h-8 rounded-full p-[2px] absolute bottom-[-2%] right-[25%] max-lg:right-[30%]">
                        <p className=" bg-[#0b0b13] hover:bg-blue-600 duration-300 w-full h-full flex justify-center items-center text-lg text-white p-1 rounded-full">

                        <BiLogoGithub />
                      </p>
                    </div>

                    <div className=" bg-white icon duration-500 cursor-pointer w-8 h-8 rounded-full p-[2px] absolute bottom-[6%] right-[9%] max-lg:right-[14%] max-lg:bottom-[5%]">
                        <p className=" bg-[#0b0b13] hover:bg-blue-600 duration-300 w-full h-full flex justify-center items-center text-lg text-white p-1 rounded-full">

                        <SiNetlify />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" text-center w-[310px] max-lg:w-full max-lg:mb-12 ">
              <h1 className=" text-gray-800 dark:text-[#b9b9bb]">
                Frontend Developer
              </h1>
              <h1 className=" text-2xl text-[#0b0b13] dark:text-white font-semibold tracking-wide">
                Khine Zin Thin
              </h1>
            </div>
          </div>

          {/*right biography */}
          <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className=" w-[55%] min-[1116px]:w-[60%] max-lg:w-full text-left ">
            <div>
              {/* <h1 className="text-3xl text-black dark:text-white font-bold">
                Biography
              </h1> */}
              <Banner title="Biography" />


              <p className=" text-gray-800 dark:text-[#b9b9bb] text-[16px] leading-6 mt-7 mb-5 max-lg:mt-8">
                Hello, I'm Junior Front-end Web Developer . I'm from Yangon . I code and create web elements for my client . I design and code beautifully simple things and i like what i do . I have teamwork experience and team project from MMS IT Workshop.
              </p>

              {/* <p className=" text-gray-800 dark:text-[#b9b9bb] text-[16px] leading-6 mb-7 max-lg:mb-8">
                Hello, I'm Junior Front-end Web Developer . I'm from Yangon . I code and create web elements for my client . I design and code beautifully simple things and i like what i do . I have teamwork experience and team project from MMS IT Workshop.

              </p> */}
            </div>

            <div className=" flex gap-8 max-sm:flex-col max-sm:gap-2">
              <div className=" flex flex-col gap-2 text-[15px]">
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Name:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#b9b9bb]">
                    Khine Zin Thin
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Birthday:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#b9b9bb]">
                    19th Dec 2002
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Age:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#b9b9bb]">
                    20 years
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Address:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#b9b9bb]">
                    Yangon
                  </span>
                </p>
              </div>

              <div className=" flex flex-col gap-2">
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Phone:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#b9b9bb] text-[15px]">
                    09-254490447
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Email:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#b9b9bb] text-[15px]">
                    khinezinthinfb1@gmail.com
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    skype:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#b9b9bb] text-[15px]">
                    khinezinthin
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Freelance:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#b9b9bb] text-[15px]">
                    Available
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* hr  */}
      <div className=" w-[90%] mx-auto background bg-[url(https://nairo.ibthemespro.com/img/border-dark.png)] dark:invert"></div>
      </div>

      
    </>
  );
};

export default About;
