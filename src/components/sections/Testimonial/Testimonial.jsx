import React, { useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import { Group, Pagination, rem } from "@mantine/core";
import "./Testimonial.css";
import Banner from "../../Banner/Banner";
// import { usePagination } from "@mantine/hooks";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
import tpp from "../../../assets/tpp/1.jpg";
import pwl from "../../../assets/pwl/1.png";
import kwyw from "../../../assets/kwyw/kwyw-removebg.png";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      image: pwl,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corporis nesciunt quidem veritatis tempore quae.",
      name: "Phyo Wunna Lin",
      work: "React Developer ",
    },
    {
      id: 2,
      image: kwyw,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corporis nesciunt quidem veritatis tempore quae.",
      name: "Khaing Wutyi win",
      work: "C# programmer",
    },
    {
      id: 3,
      image: tpp,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corporis nesciunt quidem veritatis tempore quae.",
      name: "Thae Pann Phyu",
      work: "Website Developer",
    },
  ];

  return (
    <div className="bg-[#F7F7FF] dark:bg-[#0E0E17] duration-200 w-full pt-5 pb-20">
      <div className=" w-[90%]  mx-auto flex flex-col items-center justify-center gap-16 ">
        <div
          className="w-full relative flex flex-col items-center justify-center gap-20">
          <div className=" w-full relative ">
            {/* just circle */}
            <Banner title={"Testimonials"} />
          </div>
          <div className=" w-[90%] lg:w-full md:w-full flex main ">
            <Carousel
              withIndicators
              className=" mx-auto items"
              slideGap="lg"
              loop
              align="start"
              slidesToScroll={1}
              // mx="auto"
              styles={{
                indicator: {
                  width: rem(12),
                  height: rem(4),
                  transition: "width 250ms ease",
                  display: "none",
                  "&[data-active]": {
                    width: rem(40),
                  },
                },
              }}
              breakpoints={[
                { maxWidth: "lg", slideSize: "50%" },
                { maxWidth: "md", slideSize: "50%" },
                { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
              ]}>
              {data.map((each) => {
                return (
                  <Carousel.Slide
                    key={each.id}
                    className="   w-[40%] lg:w-[50%] md:w-[50%]"
                    size="50%">

                    <div
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      className=" flex gap-4 lg:gap-0 bg-white dark:bg-[#010101] shadow-lg rounded-lg flex-col lg:flex-row md:flex-row lg:items-start md:items-start  p-6 ">
                      <div className="mx-auto lg:mx-px md:mx-px">
                        <div className="md:scale-75 lg:h-36 lg:w-36 w-24 h-24 overflow-hidden rounded-[50%] bg-blue-600 ">
                          <img
                            src={each.image}
                            alt=""
                            className=" h-full w-full rounded-[50%] object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="lg:w-[80%] md:w-[80%] w-full flex flex-col justify-start gap-4 lg:h-40">
                        <div className=" max-md:text-center text-[15px] leading-6 text-black dark:text-[#ccc]">
                          {each.description}
                        </div>
                        <div className=" max-md:text-center flex flex-col gap-1">
                          <h1 className=" tracking-wide lg:mx-px text-lg font-semibold text-black dark:text-white">{each.name}</h1>
                          <div className=" lg:mx-px text-[15px] text-black dark:text-[#ccc]">{each.work}</div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Slide>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
