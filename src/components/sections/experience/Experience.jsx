import React from "react";
import "./experience.css";
import Banner from "../../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Experience = () => {
  const experience1 = [
    {
      id: 1,
      name: "Web POS",
      used: "react, react-redux, mantine, chart-js, react-hot-toast, sweetalert2, react-router-dom",
    },
    {
      id: 2,
      name: "EduVibe Education Website and Dashboard Design",
      used: "react, react-redux, react-router-dom, mantine, AOS, swiper",
    },
  ];

  const experience2 = [
    {
      id: 1,
      name: "E-Commerce",
      used: "react, react-redux, mantine, sweetalert2, venobox, react-lazy-load, react-router-dom",
    },
    {
      id: 2,
      name: "TFS Website",
      used: "react, react-redux, shadcn, react-lazy-load",
    },
    {
      id: 3,
      name: "Cyber Profile Website",
      used: "next, react-icons, react-scroll, AOS",
    },
  ];

  return (
    <div className=" bg-[#FFFFFF] dark:bg-[#000000] duration-200 pt-20">
      <div className=" w-[90%] mx-auto">
        {/* <h2 className=" text-left text-3xl font-bold dark:text-white  ">
         
        </h2> */}
        <Banner title="Experience" />
        <div className=" flex flex-col gap-5 mt-10">
          {/* 1 */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" bg-[#f7f7ff] dark:bg-[#0b0b13] rounded p-7 flex flex-col md:flex-row  justify-center items-start gap-10"
          >
            <div className=" w-full md:w-[30%] flex flex-col gap-2 items-start">
              <h2 className=" font-semibold text-xl dark:text-white">
                Mid Frontend Developer
              </h2>
              <h2 className=" italic text-[16px] text-slate-600 dark:text-[#ffffffcc]">
                MMS IT / Workshop
              </h2>
              <h2 className=" text-slate-600 text-[16px] dark:text-[#ccc]">
                2022
              </h2>
            </div>
            <div className=" w-full md:w-[70%]">
              <ul className=" tracking-wider flex flex-col gap-3 max-md:pl-4 dark:text-white">
                {experience1?.map((exp) => {
                  return (
                    <div key={exp?.id}>
                      <li className=" list-disc">{exp?.name}</li>
                      <p>({exp?.used})</p>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* 2 */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" bg-[#f7f7ff] dark:bg-[#0b0b13] rounded p-7 flex flex-col md:flex-row  justify-center items-start gap-10"
          >
            <div className=" w-full md:w-[30%] flex flex-col gap-2 items-start">
              <h2 className=" font-semibold text-xl dark:text-white">
                Freelance Frontend Developer
              </h2>
              <h2 className=" italic text-[16px] text-slate-600 dark:text-[#ffffffcc]">
                Yangon Software House
              </h2>
              <h2 className=" text-slate-600 text-[16px] dark:text-[#ccc]">
                2023
              </h2>
            </div>
            <div className=" w-full md:w-[70%]">
              <ul className=" tracking-wider flex flex-col gap-3 max-md:pl-4 dark:text-white">
                {experience2?.map((exp) => {
                  return (
                    <div key={exp?.id}>
                      <li className=" list-disc">{exp?.name}</li>
                      <p>({exp?.used})</p>
                    </div>
                  );
                })}
              </ul>
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
