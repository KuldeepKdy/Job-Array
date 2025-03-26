"use client";
import {  titleVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import { FlagIcon } from "lucide-react";
import AnimatedComponent from "./ui/AnimatedComponent";

const AboutSection = () => {
  return (
    <div className="w-full mt-12 md:mt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 place-items-center">
        <div className=" w-full flex flex-col items-center lg:items-start">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className=" flex gap-1 items-center  text-primary text-xs font-medium"
          >
            <FlagIcon className="size-3.5 stroke-primary" />
            More about JobArray
          </motion.h2>
          {/* <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className=" tracking-wider uppercase text-gray-400 mt-3"
          >
            World Award
          </motion.p> */}
          {/* <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className=" pt-4"
          >
            This is a company engaged in the field of interior design. We
            provide the best interior design for your home. We have been trusted
            by many people to design their homes. We have also received many
            awards from various countries for our work.
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className=""
          >
            This is a company engaged in the field of interior design. We
            provide the best interior design for your home. We have been trusted
            by many people to design their homes. We have also received many
            awards from various countries for our work.
          </motion.p> */}
          <h2 className=" text-2xl leading-snug dark:text-white  text-center lg:text-start  md:text-4xl md:leading-snug text-gray-900 mt-4 font-semibold">
            Unlock Your True Potential And Discover A World Of Opportunities
            That Align With Your Skills, Interests, And Aspirations
          </h2>
          <div className="flex gap-6 w-full mt-8  items-center justify-center lg:justify-start">
            <img
              src="/images/spotify-logo.png"
              alt="spotify-logo"
              className="max-w-[20%] max-h-6 object-fill"
            />

            <img
              src="/images/microsoft-logo.png"
              alt="spotify-logo"
              className="max-w-[20%]  max-h-6"
            />
            <img
              src="/images/netflix-logo.png"
              alt="spotify-logo"
              className="max-w-[20%]  max-h-6"
            />
          </div>
        </div>
        <AnimatedComponent
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="grid grid-cols-2 w-full lg:w-[70%] bg-gray-100 rounded-lg lg:bg-white dark:bg-transparent py-2 lg:py-0 h-full justify-between gap-4 md:gap-8 "
        >
          <div className="flex flex-col gap-2 p-4 text-center">
            <h2 className="  text-gray-900 dark:text-white font-semibold  text-2xl md:text-3xl">
              400K
            </h2>
            <p className="  font-medium text-gray-400 dark:text-gray-50   text-xs md:text-sm">
              Job List
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 text-center">
            <h2 className="text-gray-900 dark:text-white font-semibold text-2xl md:text-3xl">
              800K
            </h2>
            <p className="font-medium text-gray-400 dark:text-gray-50  text-xs md:text-sm">
              People hired
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 text-center">
            <h2 className="text-gray-900 font-semibold dark:text-white text-2xl md:text-3xl">
              20K
            </h2>
            <p className="font-medium text-gray-400 dark:text-gray-50    text-xs md:text-sm">
              Company
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 text-center">
            <h2 className="text-gray-900 font-semibold dark:text-white text-2xl  md:text-3xl">
              120
            </h2>
            <p className="font-medium text-gray-400  dark:text-gray-50 text-xs md:text-sm">
              Available country
            </p>
          </div>
        </AnimatedComponent>
      </div>
    </div>
  );
};

export default AboutSection;
