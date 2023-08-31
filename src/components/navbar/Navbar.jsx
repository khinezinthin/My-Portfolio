import React from "react";
import {RxHome} from "react-icons/rx"
import {BsPerson} from "react-icons/bs"
import {AiOutlineFileText} from "react-icons/ai"
import {MdOutlineWorkOutline} from "react-icons/md"
import {AiOutlineContacts} from "react-icons/ai"
// import { NavHashLink as Link } from 'react-router-hash-link'
import {Link} from 'react-scroll'
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../../redux/sidebarSlice";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import "./navbar.css"


export const Navbar = ()=>{
    const dispatch = useDispatch();
    const active = useSelector(state => state.sidebarSlice.value);
    const theme = useSelector(state => state.sidebarSlice.theme);

  const [showBackToTop,setShowBackToTop] = useState(false);
  // back to top
  const backToTop = ()=>{
    document.documentElement.scrollTop = 0;
  }

  // back to top show 
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 500){
        setShowBackToTop(true);
      }else{
        setShowBackToTop(false);
      }
    })
  },[])

  // mantine burger 
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

    return(
        <>
        {/* navbar  */}
        <div className="  bg-white dark:bg-[#0c0c14] shadow-md dark:shadow-[#000000] duration-200 fixed w-full z-40 ">
            <nav className=" flex justify-between items-center">
                <Link to={"0"}>
                    <h1 className=" cursor-pointer text-white px-8 bg-[#242859] py-5 text-4xl font-semibold">
                        K
                    </h1>
                </Link>

                <ul className=" flex gap-5 mr-11 text-black dark:text-white max-lg:hidden">
                    <Link to={"0"} activeClass={theme === "dark" ? "activeDark" : "activeLight"} spy={true} offset={-80} className="navlink">
                        <li onClick={() => dispatch(setActive(0))} className={`hover:text-[#525fe1] hover:dark:bg-[#191c26] hover:bg-[#f5f5f5] w-[110px] rounded-md cursor-pointer font-medium flex justify-center`}>
                            <div className=" flex items-center gap-2 py-3">
                            <RxHome className=" text-lg"/>
                            <p>Home</p>
                            </div>
                        </li>
                    </Link>

                    <Link to={"1"} activeClass={theme === "dark" ? "activeDark" : "activeLight"} spy={true} offset={-80} className="navlink">
                        <li onClick={() => dispatch(setActive(1))} className={`hover:text-[#525fe1] hover:dark:bg-[#191c26] hover:bg-[#f5f5f5] w-[110px] rounded-md cursor-pointer font-medium flex justify-center`}>
                            <div className=" flex items-center gap-2 py-3">
                            <BsPerson className=" text-lg"/>
                            <p>About</p>
                            </div>
                        </li>
                    </Link>

                    <Link to={"2"} activeClass={theme === "dark" ? "activeDark" : "activeLight"} spy={true} offset={-80} className="navlink">
                        <li onClick={() => dispatch(setActive(1))} className={`hover:text-[#525fe1] hover:dark:bg-[#191c26] hover:bg-[#f5f5f5] w-[110px] rounded-md cursor-pointer font-medium flex justify-center`}>
                        <div className=" flex items-center gap-2 py-3">
                            <AiOutlineFileText className=" text-lg"/>
                            <p>Resume</p>
                        </div>
                        </li>
                    </Link>

                    <Link to={"3"} activeClass={theme === "dark" ? "activeDark" : "activeLight"} spy={true} offset={-80} className="navlink">
                        <li onClick={() => dispatch(setActive(3))} className={`hover:text-[#525fe1] hover:dark:bg-[#191c26] hover:bg-[#f5f5f5] w-[110px] rounded-md cursor-pointer font-medium flex justify-center`}>
                            <div className=" flex items-center gap-2 py-3">
                            <MdOutlineWorkOutline className=" text-lg"/>
                            <p>Project</p>
                            </div>
                        </li>
                    </Link>
                    
                    <Link to={"4"} activeClass={theme === "dark" ? "activeDark" : "activeLight"} spy={true} offset={-80} className="navlink">
                        <li onClick={() => dispatch(setActive(4))} className={`hover:text-[#525fe1] hover:dark:bg-[#191c26] hover:bg-[#f5f5f5] w-[110px] rounded-md cursor-pointer font-medium flex justify-center`}>
                            <div className=" flex items-center gap-2 py-3">
                            <AiOutlineContacts className=" text-lg"/>
                            <p>Contact</p>
                            </div>
                        </li>
                    </Link>
                </ul>

                {/* menu burger */}
            <div className='z-50 hidden max-lg:block mr-5 '>
                <div className=' cursor-pointer w-[60px] h-[60px] text-center pt-3 rounded-full'>
                <Burger opened={opened} onClick={toggle} aria-label={label} color={theme === "dark" ? "#fff" : "#000"}  />
                </div>
            </div>
            </nav>
        </div>

        {/* sidebar  */}
        <div className={`${opened ? "fixed left-0" : " left-[-500px]"} hidden max-lg:block w-[280px] max-[400px]:w-[230px] max-[340px]:w-[200px] h-screen z-50 fixed bg-[#f5f5f5] dark:bg-[#0a0d1a] shadow-md dark:shadow-[#000] duration-500`}>
            <div>
            <Link to={"0"}>
                    <h1 className=" cursor-pointer h-[80px] flex items-center text-white pl-14 max-[400px]:pl-11 max-[340px]:pl-8 bg-[#242859] py-5 text-2xl">
                        My Portfolio
                    </h1>
                </Link> 
            </div>

            <ul className=" mt-6 mx-4 max-[340px]:mx-0 gap-5 flex-col flex text-black dark:text-white">
                    <Link to={"0"} activeClass={theme === "dark" ? "activeDark" : "activeLightSiebar"} spy={true} offset={-80}className="navlink">
                        <li onClick={() => dispatch(setActive(0))} className={` hover:text-[#525fe1] hover:dark:bg-[#191c26] hover:bg-white duration-200 rounded-md cursor-pointer font-medium flex `}>
                            <div className=" flex items-center gap-2 py-3 ml-10">
                            <RxHome className=" text-lg"/>
                            <p className=" text-lg">Home</p>
                            </div>
                        </li>
                    </Link>

                    <Link to={"1"} activeClass={theme === "dark" ? "activeDark" : "activeLightSiebar"} spy={true} offset={-80} className="navlink">
                        <li onClick={() => dispatch(setActive(1))} className={` hover:text-[#525fe1] hover:dark:bg-[#191c26] hover:bg-white duration-200 rounded-md cursor-pointer font-medium flex`}>
                            <div className=" flex items-center gap-2 py-3 ml-10">
                            <BsPerson className=" text-lg"/>
                            <p  className=" text-lg">About</p>
                            </div>
                        </li>
                    </Link>

                    <Link to={"2"} activeClass={theme === "dark" ? "activeDark" : "activeLightSiebar"} spy={true} offset={-80} className="navlink">
                        <li onClick={() => dispatch(setActive(2))} className={` hover:text-[#525fe1] hover:dark:bg-[#191c26] hover:bg-white duration-200 rounded-md cursor-pointer font-medium flex`}>
                            <div className="  flex items-center gap-2 py-3 ml-10">
                            <AiOutlineFileText className=" text-lg"/>
                            <p  className=" text-lg">Resume</p>
                            </div>
                        </li>
                    </Link>

                    <Link to={"3"} activeClass={theme === "dark" ? "activeDark" : "activeLightSiebar"} spy={true} offset={-80} className="navlink">
                        <li onClick={() => dispatch(setActive(3))} className={`  hover:text-[#525fe1] hover:dark:bg-[#191c26] hover:bg-white duration-200 rounded-md cursor-pointer font-medium flex`}>
                            <div className=" flex items-center gap-2 py-3 ml-10">
                            <MdOutlineWorkOutline className=" text-lg"/>
                            <p  className=" text-lg">Project</p>
                            </div>
                        </li>
                    </Link>
                    
                    <Link to={"4"} activeClass={theme === "dark" ? "activeDark" : "activeLightSiebar"} spy={true} offset={-80} className="navlink">
                        <li onClick={() => dispatch(setActive(4))} className={` hover:text-[#525fe1] hover:dark:bg-[#191c26] hover:bg-white duration-200 rounded-md cursor-pointer font-medium flex`}>
                            <div className=" flex items-center gap-2 py-3 ml-10">
                            <AiOutlineContacts className=" text-lg"/>
                            <p  className=" text-lg">Contact</p>
                            </div>
                        </li>
                    </Link>
            </ul>

            <h1 className="fixed bottom-0 font-extralight border-t dark:border-[#25252C] w-[280px] max-[400px]:w-[230px] max-[340px]:w-[200px] h-[80px] flex items-center justify-center dark:text-white py-5 text-black text-sm tracking-wider">
                khinezinthinfb1@gmail.com
            </h1>

        </div>


        {/* back to top  */}
        <div className={`${showBackToTop ? "block" : "hidden"}`}>
            <div onClick={backToTop} className='z-50 fixed right-5 bottom-6'>
            <div className=' cursor-pointer primary-bg w-[50px] h-[50px] flex justify-center item-center pt-2 rounded-full'>
            <MdOutlineKeyboardArrowUp className="text-3xl text-white font-bold"/>
            </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;