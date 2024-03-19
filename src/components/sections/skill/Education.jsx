import React from "react";
import { Timeline, Text } from "@mantine/core";
import { AiFillCheckCircle, AiFillClockCircle } from "react-icons/ai";

const Education = () => {
  return (
    <div>
      {/* <h2 className=" uppercase text-left py-3 ">
        education roadmap
      </h2> */}
      <Timeline active={3} lineWidth={2} bulletSize={18}>
        <Timeline.Item
          title="2018 - 2019"
          className=" text-[16px] text-gray-500"
          bullet={<AiFillCheckCircle size={18} />}
        >
          <Text
            className=" font-semibold tracking-wide text-black dark:text-white"
            size="md"
          >
            Passed Matriculation Examination
          </Text>
          <Text
            size="sm"
            className="text-[16px] text-gray-500 dark:text-[#ccc]"
            mt={4}
          >
            From Aung Thit Sar Private School
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2019 - 2020"
          className=" text-[16px] text-gray-500"
          bullet={<AiFillClockCircle className=" text-white" size={18} />}
        >
          <Text
            className=" font-semibold tracking-wide text-black dark:text-white"
            size="md"
          >
            First Year Student
          </Text>
          <Text
            size="sm"
            className="text-[16px] text-gray-500 dark:text-[#ccc]"
            mt={4}
          >
            I dropped out of university in 1st year
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2022"
          className=" text-[16px] text-gray-500"
          bullet={<AiFillCheckCircle size={18} />}
        >
          <Text
            className=" font-semibold tracking-wide text-black dark:text-white"
            size="md"
          >
            Basic Web Design
          </Text>
          <Text
            size="sm"
            className="text-[16px] text-gray-500 dark:text-[#ccc]"
            mt={4}
          >
            From MMS-IT
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2022 - 2023"
          className=" text-[16px] text-gray-500"
          bullet={<AiFillCheckCircle size={18} />}
        >
          <Text
            className=" font-semibold tracking-wide text-black dark:text-white"
            size="md"
          >
            Special Web Design Certification
          </Text>
          <Text
            size="sm"
            className="text-[16px] text-gray-500 dark:text-[#ccc]"
            mt={4}
          >
            From MMS-IT
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Education;
