import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Skill = () => {
  const initialCountValue = parseInt(localStorage.getItem("countValue")) || 0;
  const [count, setCount] = useState(false);
  const [triggerActivated, setTriggerActivated] = useState(false);

  // useEffect(() => {
  //   if (triggerActivated) {
  //     localStorage.setItem("countValue", initialCountValue.toString());
  //   }
  // }, [initialCountValue, triggerActivated]);

  const handleScrollEnter = () => {
    if (!triggerActivated) {
      setTriggerActivated(true);
      // setCount(true);
    }
  };

  const handleScrollExit = () => {
    setTriggerActivated(false);
    // setCount(false);
  };

  return (
    <div>
      {/* <h2 className=" uppercase tracking-wider text-left py-3 font-light">
        skill
      </h2> */}
      <div className=" flex flex-col gap-12">
        {/* Html  */}
        <div className=" flex gap-5 justify-evenly items-center">
          <div className=" w-fit">
            <ScrollTrigger
              onEnter={{ handleScrollEnter }}
              onExit={handleScrollExit}
              // triggerOnLoad={false}
              >
              <h2 className=" flex items-center text-3xl font-medium dark:text-white">
                {count && (
                  <CountUp start={0} end={92} duration={2} delay={0} />
                )}{" "}
                %
              </h2>
            </ScrollTrigger>
          </div>

          <div className=" w-[85%]">
            <p className=" uppercase text-[14px] tracking-wider text-left pb-2 dark:text-white">
              html5, css
            </p>
            <div className=" w-full h-[10px] bg-slate-300">
              <div className=" w-[92%] h-[10px] primary-bg"></div>
            </div>
          </div>
        </div>
        {/* javascript */}
        <div className=" flex justify-evenly gap-5 items-center">
          <div className=" w-fit">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}>
              <h2 className=" flex items-center text-3xl font-medium dark:text-white">
                {count && (
                  <CountUp  start={0} end={85} duration={2} delay={0} />
                )}{" "}
                %
              </h2>
            </ScrollTrigger>
          </div>
          <div className=" w-[85%]">
            <p className=" uppercase text-[14px] tracking-wider dark:text-white text-left pb-2">
              javascript
            </p>
            <div className=" w-full h-[10px] bg-slate-300">
              <div className=" w-[85%] h-[10px] primary-bg"></div>
            </div>
          </div>
        </div>
        {/* react  */}
        <div className=" flex justify-evenly gap-5 items-center">
          <div className=" w-fit">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}>
              <h2 className=" flex items-center text-3xl font-medium dark:text-white">
                {count && (
                  <CountUp start={0} end={90} duration={2} delay={0} />
                )}{" "}
                %
              </h2>
            </ScrollTrigger>
          </div>
          <div className=" w-[85%]">
            <p className=" uppercase text-[14px] tracking-wider text-left pb-2 dark:text-white">
              react js, RTK
            </p>
            <div className=" w-full h-[10px] bg-slate-300">
              <div className=" w-[90%] h-[10px] primary-bg"></div>
            </div>
          </div>
        </div>
        {/* tailwind  */}
        <div className=" flex justify-evenly gap-5 items-center">
          <div className=" w-fit">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}>
              <h2 className=" flex items-center text-3xl font-medium dark:text-white ">
                {count && (
                  <CountUp start={0} end={90} duration={2} delay={0} />
                )}{" "}
                %
              </h2>
            </ScrollTrigger>
          </div>
          <div className=" w-[85%]">
            <p className=" uppercase text-[14px] tracking-wider text-left pb-2 dark:text-white">
              tailwind css, bootstrap
            </p>
            <div className=" w-full h-[10px] bg-slate-300">
              <div className=" w-[90%] h-[10px] primary-bg"></div>
            </div>
          </div>
        </div>
        {/* github  */}
        <div className=" flex justify-evenly gap-5 items-center">
          <div className=" w-fit">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}>
              <h2 className=" flex items-center text-3xl font-medium dark:text-white">
                {count && (
                  <CountUp start={0} end={85} duration={2} delay={0} />
                )}{" "}
                %
              </h2>
            </ScrollTrigger>
          </div>
          <div className=" w-[85%]">
            <p className=" uppercase text-[14px] tracking-wider text-left pb-2 dark:text-white">
              github
            </p>
            <div className=" w-full h-[10px] bg-slate-300">
              <div className=" w-[85%] h-[10px] primary-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
