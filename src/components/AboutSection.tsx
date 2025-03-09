"use client";
import { desVariants, tagVariants, titleVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import { FlagIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="w-full mt-12 md:mt-0">
      <div className="grid lg:grid-cols-2 w-full gap-6 md:gap-10 place-items-center">
        <div className=" w-full flex flex-col">
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
          <h2 className="text-2xl text-gray-900 mt-4 font-semibold">
            Unlock Your True Potential And Discover A World Of Opportunities
            That Align With Your Skills, Interests, And Aspirations
          </h2>
          <div className="flex gap-6 w-full  items-center">
            <img
              src="/images/spotify-logo.png"
              alt="spotify-logo"
              className="max-w-[20%] max-h-6"
            />

            <img
              src="/images/microsoft-logo.png"
              alt="spotify-logo"
              className="max-w-[20%] max-w-[20%] max-h-6"
            />
            <img
              src="/images/netflix-logo.png"
              alt="spotify-logo"
              className="max-w-[20%] max-w-[20%] max-h-6"
            />
            <img
              src="/images/g-fiber-logo.png"
              alt="spotify-logo"
              className="max-w-[20%] max-w-[20%] max-h-6"
            />
          </div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="grid grid-cols-2 w-full h-full justify-between gap-4 md:gap-8 "
        >
          <div className="flex flex-col gap-1 p-4 bg-primary bg-opacity-60  text-white  dark:bg-gray-50 rounded-xl">
            <h2 className="  font-bold text-xl md:text-2xl">400K</h2>
            <p className="  dark:text-gray-500 font-medium text-sm md:text-base">
              Job List
            </p>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <h2 className="text-gray-900 font-semibold text-lg md:text-2xl">
              800K
            </h2>
            <p className="text-4ray-900  text-xs md:text-sm">People hired</p>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <h2 className="text-gray-900 font-semibold text-lg md:text-2xl">
              20K
            </h2>
            <p className="text-4ray-900 dark:text-gray-600  text-xs md:text-sm">
              Company
            </p>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <h2 className="text-gray-900 font-semibold text-lg  md:text-2xl">
              120
            </h2>
            <p className="text-4ray-900  text-xs md:text-sm">
              Available country
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
