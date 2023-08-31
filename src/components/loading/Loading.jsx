import React from 'react'
import "./loading.css"
import { useSelector } from "react-redux";

const Loading = () => {
  const theme = useSelector(state => state.sidebarSlice.theme);

  return (
    <div>
        <div className={` ${theme === "dark" ? "bg-black text-white" : "bg-[#fff] text-black"} h-screen mx-auto flex justify-center items-center`}>
        <div className="custom-loader"></div>
      </div>
    </div>
  )
}

export default Loading