import React, { useEffect } from "react";
import img from "../../../assets/team-1.jpg";
import img1 from "../../../assets/team-2.jpg";
import img2 from "../../../assets/team-4.jpg";
import { Carousel } from "@mantine/carousel";
import { Group, Pagination, rem } from "@mantine/core";
import "./Testimonial.css";
import Banner from "../../Banner/Banner";
// import { usePagination } from "@mantine/hooks";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      image: img,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corporis nesciunt quidem veritatis tempore quae.",
      name: "Khine Zin Thin",
      work: "React Developer ",
    },
    {
      id: 2,
      image: img1,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corporis nesciunt quidem veritatis tempore quae.",
      name: "Khine Wutyi win",
      work: "C# programmer",
    },
    {
      id: 3,
      image: img2,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corporis nesciunt quidem veritatis tempore quae.",
      name: "Phyo Wunna Lin",
      work: "Website Developer",
    },
  ];

  return (
    <div className="dark:bg-[#0E0E17] bg-[#F7F7FF] w-full pt-5 pb-20">
      <div className=" w-[90%]  mx-auto flex flex-col items-center justify-center gap-16 ">
        <div className="w-full relative flex flex-col items-center justify-center gap-20">
          <div className=" w-full relative ">
            {/* just circle */}
            <Banner title={"Testimonials"} />
          </div>
          <div className=" w-[90%] lg:w-full md:w-full flex  ">
            <Carousel
              withIndicators
              className="mx-auto "
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
                { maxWidth: "lg", slideSize: "80%" },
                { maxWidth: "md", slideSize: "50%" },
                { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
              ]}>
              {data.map((each) => {
                return (
                  <Carousel.Slide
                    key={each.id}
                    className="   w-[40%] lg:w-[50%] md:w-[50%]"
                    size="50%">
                    <div className="  flex gap-4 lg:gap-0  bg-white dark:bg-black text-dark dark:text-white shadow-lg rounded-lg flex-col lg:flex-row md:flex-row lg:items-start md:items-start  p-6 ">
                      <div className="mx-auto   lg:mx-px md:mx-px">
                        <div className="md:scale-75 lg:h-36 lg:w-36 w-24 h-24 overflow-hidden rounded-[50%] bg-orange-400 ">
                          <img
                            src={each.image}
                            alt=""
                            className=" h-full w-full rounded-[50%] object-cover"
                          />
                        </div>
                      </div>
                      <div className="lg:w-[80%] md:w-[80%] w-full   flex flex-col  gap-8 lg:h-40">
                        <div className=" tracking-wide ">
                          {each.description}
                        </div>
                        <div className=" flex flex-col gap-4 my-auto">
                          <h1 className=" mx-auto lg:mx-px ">{each.name}</h1>
                          <div className=" mx-auto lg:mx-px">{each.work}</div>
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
