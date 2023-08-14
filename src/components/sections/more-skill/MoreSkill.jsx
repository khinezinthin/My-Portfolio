import React from "react";
import "./test.css";
import Test from "./Test";
import Banner from "../../Banner/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const MoreSkill = () => {
  return (
    <div className=" w-full bg-[#f7f7ff] dark:bg-[#0e0e17] duration-200 pb-10">
      <div className=" w-[90%]  mx-auto">
        {/* <h2 className=" text-left text-3xl font-bold dark:text-white">
          
        </h2> */}
        <Banner title="My Best Skills" />
        <div className="  mt-12">
          {/* Communication  */}
          <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
            {/* <h2 className=" border-4 border-yellow-800 rounded-full w-12 h-12 flex justify-center items-center"><span className=" border border-red-400 rounded-full w-10 h-10 flex justify-center items-center">90%</span></h2> */}
            <p
            data-aos="fade-right"
            data-aos-duration="1000"
            className=" flex flex-col justify-center items-center gap-3 font-semibold text-gray-500 dark:text-[#ffffffcc]">
              <Test progress={88} />
              <span className="">Communication</span>
            </p>
            <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="50"
            className=" flex flex-col justify-center items-center gap-3 font-semibold text-gray-500 dark:text-[#ffffffcc]">
              <Test progress={85} /> <span className="">Teamwork</span>{" "}
            </p>
            <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            className=" flex flex-col justify-center items-center gap-3 font-semibold text-gray-500 dark:text-[#ffffffcc]">
              <Test progress={80} /> <span className=" "> Problem-solving</span>
            </p>
            <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="150"
            className=" flex flex-col justify-center items-center gap-3 font-semibold text-gray-500 dark:text-[#ffffffcc]">
              <Test progress={85} /> <span className=" ">Fast Learning</span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* hr  */}
      <div className=" w-[90%] pb-0 mt-12 mb-2 mx-auto background bg-[url(https://nairo.ibthemespro.com/img/border-dark.png)] dark:invert">
      </div>

    </div>
  );
};

export default MoreSkill;
