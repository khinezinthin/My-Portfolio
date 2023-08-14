import React, { useEffect, useRef, useState } from "react";
import "./landing.css";
import landingImg from "../../../assets/kzt/22.jpg";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
// console.log(animateTextList);
import "../contact/contact.css";
import "../about/about.css"

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Landing = () => {
  const animateRef = useRef();
  const [time, setTime] = useState(new Date());
  const [time2, setTime2] = useState(new Date());
  let index = 0;
  const textOut = (animateTextList) => {
    for (let i = 0; i < animateTextList.length; i++) {
      animateTextList[i].classList.remove("text-out");
    }

    animateTextList[index].classList.add("text-out");

    console.log();
    if (index == animateTextList.length - 1) {
      index = 0;
    } else {
      index++;
    }
  };
  const textIn = (animateTextList) => {
    for (let i = 0; i < animateTextList.length; i++) {
      animateTextList[i].classList.remove("text-in", "text-out");
    }

    animateTextList[index].classList.add("text-in");

    console.log();
    if (index == animateTextList.length - 1) {
      index = 0;
    } else {
      index++;
    }
  };

  useEffect(() => {
    const animateTextList = [...animateRef?.current?.children];
    animateTextList[1].classList.add("text-in");
    const interval = setInterval(() => {
      setTime(new Date());
      textIn(animateTextList);
    }, 3000);
    const interval2 = setInterval(() => {
      textOut(animateTextList);
      // console.log("out");
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  return (
    <>
      <div className=" dark:bg-black bg-[#FFFFFF] duration-200">
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" w-[90%] pt-20 mx-auto bg-transparent -z-20 flex justify-between"
        >
          {/* <div className="flex max-[400px]:flex-col max-[400px]:gap-0 justify-between gap-8 pt-5">
            <p className=" dark:text-white pt-3  hover:text-[#525fe1] active:text-[#303aad]">
              09-254490447
            </p>
            <p className=" dark:text-white pt-3  hover:text-[#525fe1] active:text-[#303aad] ">
              khinezinthinfb1@gmail.com
            </p>
          </div> */}
        </div>
      </div>
      <div
        className={`h-screen select-none w-full overflow flex justify-center flex-col items-center dark:bg-black bg-[#FFFFFF] duration-200`}
      >
        <div
          className={`w-[90%] py-5 lg:landing-Bg-After relative max-md:flex-col-reverse max-lg:gap-20 flex mx-auto justify-between items-center`}
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`w-[55%] max-lg:w-[60%] max-md:w-full`}
          >
            {/* left side body */}
            <div className="flex sm:lbg flex-col gap-y-4 md:gap-y-5 lg:gap-y-8">
              <div className={`text-[#0B0B13]  dark:text-white`}>
                Hello ~ My name is
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
                className={`font-bold tracking-wider lg:text-5xl md:text-4xl text-3xl dark:text-white text-[#0B0B13]`}
              >
                Khine Zin Thin
              </div>
              {/* left text design body */}
              <div className=" ">
                <div
                  className={` flex-col flex w-[90%] relative primary-text font-semibold overflow-hidden  `}
                >
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    ref={animateRef}
                    className=" flex flex-col justify-center "
                  >
                    <span className={`text-2xl py-2 span`}>
                      Junior FrontEnd Web Developer
                    </span>
                    <span className={`text-2xl  py-2 span`}>
                      Junior FrontEnd Web Developer
                    </span>
                    <span className={`text-2xl  py-2 span`}>
                      Junior FrontEnd Web Developer
                    </span>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
                className={`text-[#0B0B13] dark:text-[#b9b9b9]  pb-4 lg:pb-0 md:pb-0`}
              >
                I develop the front-end projects, using react framework ,
                <br /> CSS library like bootstrap,tailwindCSS, mantine, specialize in front-end language HTML, CSS,JS, SASS.
              </div>
              {/* btn */}
              <div>
                <button className="go-up py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                  <a href={landingImg} download>DOWNLOAD CV</a>
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className={` w-[40%] max-lg:w-[50%] max-md:hidden items-center justify-center lg:flex`}
          >
            <div className="leftImg mx-auto w-[55%] max-lg:w-[65%] h-[400px] flex justify-center items-center flex-col">
              <img
                data-aos="fade-up"
                data-aos-duration="1200"
                src={landingImg}
                className=" object-cover z-20 block rounded shadow-lg"
                alt=""
              />
              <div
                className=" flex gap-2 items-center mt-3"
              >
                <p className=" bg-[#0b0b13] dark:border-blue-100 dark:border-2 w-8 h-8 flex justify-center items-center text-lg text-white p-1 rounded-full hover:bg-blue-600 icon cursor-pointer">
                  <BiLogoGithub />
                </p>
                <p className=" bg-[#0b0b13] dark:border-blue-100 dark:border-2 w-8 h-8 flex justify-center items-center text-lg text-white p-1 rounded-full hover:bg-blue-600 icon cursor-pointer">
                  <BiLogoTwitter />
                </p>
                <p className=" bg-[#0b0b13] dark:border-blue-100 dark:border-2 w-8 h-8 flex justify-center items-center text-lg text-white p-1 rounded-full hover:bg-blue-600 icon cursor-pointer">
                  <BiLogoInstagram />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
