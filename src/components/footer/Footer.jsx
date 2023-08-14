import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./footer.css"

const Footer = () => {
  const backToTop = ()=>{
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="relative">
    {/* back to top
    <div onClick={backToTop} className="hidden max-md:flex z-1 cursor-pointer shadow-light justify-center">
        <div className=" p-2 text-xl hover:bg-gray-900 dark:hover:bg-[#DBD9D9] duration-500 bg-black text-white dark:bg-white dark:text-black rounded top-[-20px] absolute dark:shadow">
        <AiOutlineArrowUp/>
        </div>
    </div> */}

      {/* footer  */}
    <div className=" bg-white dark:bg-[#0B0B13] flex justify-center border-t dark:dark:border-[#25252C]">
      <div className="w-[90%] flex max-md:flex-col max-md:gap-4 justify-between mb-6 mt-6 max-md:mt-9">
        <div className=" flex gap-4 max-md:mx-auto flex-wrap">
          <BiLogoFacebook className=" text-black dark:text-white hover:text-[#525FE1] duration-300 text-lg cursor-pointer" />
          <BiLogoTwitter className=" text-black dark:text-white hover:text-[#525FE1] duration-300 text-lg cursor-pointer" />
          <BiLogoInstagramAlt className=" text-black dark:text-white hover:text-[#525FE1] duration-300 text-lg cursor-pointer" />
          <BiLogoLinkedin className=" text-black dark:text-white hover:text-[#525FE1] duration-300 text-lg cursor-pointer" />
          <BiLogoPinterestAlt className=" text-black dark:text-white hover:text-[#525FE1] duration-300 text-lg cursor-pointer" />
        </div>
        <p className=" max-md:mx-auto text-center text-sm text-black dark:text-gray-300">
          © 2023 . All rights reserved by KZT
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
