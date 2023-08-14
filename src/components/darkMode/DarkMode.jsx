import React, { useEffect, useState } from "react";
import "./darkMode.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../redux/sidebarSlice";

const DarkMode = () => {
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  // );

  const theme = useSelector(state => state.sidebarSlice.theme);
  const dispatch = useDispatch();

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  onWindowMatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    // setTheme(theme === "dark" ? "light" : "dark");
    dispatch(setTheme(theme === "dark" ? "light" : "dark"))

  };
  // console.log(theme);
  return (
    <div className=" fixed right-0 top-[45%] z-50">
      <button
        onClick={handleThemeSwitch}
        className={`bgTransparent1 w-16 h-12 rounded-l-full flex justify-center items-center`}>
        {theme === "dark" ? (
          <FaSun className=" text-2xl text-white" />
        ) : (
          <FaMoon className=" text-2xl text-black" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
