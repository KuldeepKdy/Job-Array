"use client";
import { desVariants, tagVariants, titleVariants } from "@/utils/animations";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="w-full mt-12 md:mt-0">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-10 place-items-center">
        <div className="items-center">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className=" text-3xl font-extrabold leading-tight lg:text-5xl"
          >
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
          <motion.p
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
          </motion.p>
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
