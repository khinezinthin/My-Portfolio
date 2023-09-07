import React, { useEffect, useRef, useState } from "react";
import "./landing.css";
import kzt from "../../../assets/kzt/22.jpg";
import cv from "../../../assets/kzt-cv-resume.pdf"
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { PiMessengerLogoLight } from "react-icons/pi";
// console.log(animateTextList);
import "../contact/contact.css";
import "../about/about.css"
import { useSelector } from "react-redux";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Landing = () => {
  const theme = useSelector(state => state.sidebarSlice.theme);

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
          className=" w-[90%] pt-20  mx-auto bg-transparent -z-20 flex justify-between"
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
        className={`h-screen max-[640px]:h-full max-[640px]:pb-24 max-[640px]:pt-[98px] max-[463px]:pb-6 max-[463px]:pt-28 max-[340px]:pt-22 max-[340px]:pb-2 relative select-none w-full overflow flex justify-center flex-col items-center dark:bg-black  duration-200`}
      >
        {/* bg-img  */}
          <div className={`${theme == "light" ? "hidden" : "block"} bg-img w-full h-full absolute max-[640px]:right-[-30px] max-[480px]:right-[-58px] max-sm:scale-[0.9] max-sm:bottom-[-30px] max-[432px]:bottom-[-50px] max-[400px]:scale-[1] max-[360px]:bottom-[-60px] max-[340px]:bottom-[-65px] max-[332px]:bottom-[-70px]
          opacity-[.7] max-lg:opacity-[.5] max-sm:opacity-[.4]`}>
         </div>

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
                      Junior Frontend Web Developer
                    </span>
                    <span className={`text-2xl  py-2 span`}>
                      Junior Frontend Web Developer
                    </span>
                    <span className={`text-2xl  py-2 span`}>
                      Junior Frontend Web Developer
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
                I develop the frontend projects, using react library ,
                <br /> CSS framework like bootstrap, tailwindCSS specialize in frontend language HTML, CSS, JS, SASS.
              </div>
              {/* btn */}
              <div>
                <button className="go-up py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                  <a href={cv} download>DOWNLOAD CV</a>
                </button>
              </div>
            </div>
          </div>
          {/* <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className={` w-[40%] max-lg:w-[50%] max-md:hidden items-center justify-center lg:flex`}
          >
            <div className="leftImg hidden mx-auto w-[55%] max-lg:w-[65%] h-[400px] flex justify-center items-center flex-col">
              <img
                data-aos="fade-up"
                data-aos-duration="1200"
                src={kzt}
                className=" object-cover z-20 block rounded shadow-lg"
                alt=""
              />
              <div
                className=" flex gap-2 items-center mt-3 z-10"
              >
                <a href="https://github.com/khinezinthin" target="_blank">
                    <div className=" bg-white icon duration-500 cursor-pointer w-8 h-8 rounded-full p-[2px]">
                        <p className=" bg-[#0b0b13] hover:bg-blue-600 duration-300 w-full h-full flex justify-center items-center text-lg text-white p-1 rounded-full">
                        <BiLogoGithub />
                      </p>
                    </div>
                </a>
                <a href="https://facebook.com/khinezin.thin.75" target="_blank">
                    <div className=" bg-white icon duration-500 cursor-pointer w-8 h-8 rounded-full p-[2px]">
                        <p className=" bg-[#0b0b13] hover:bg-blue-600 duration-300 w-full h-full flex justify-center items-center text-lg text-white p-1 rounded-full">

                        <BiLogoFacebook />
                      </p>
                    </div>
                    </a>

                    <a href="https://www.facebook.com/messages/t/100015696700631" target="_blank">
                    <div className=" bg-white icon duration-500 cursor-pointer w-8 h-8 rounded-full p-[2px]">
                        <p className=" bg-[#0b0b13] hover:bg-blue-600 duration-300 w-full h-full flex justify-center items-center text-xl text-white p-1 rounded-full">

                        <PiMessengerLogoLight />
                      </p>
                    </div>
                    </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Landing;
