"use client";
import { titleVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import { FlagIcon, MenuSquare } from "lucide-react";
import JobCard from "./jobs-listing/JobCard";
const FeaturesSection = () => {
  return (
    <div className="flex flex-col w-full h-fit items-center justify-center bg-gray-50 rounded-xl py-10 px-10">
      <motion.h2
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
        className=" flex gap-1 items-center  text-primary text-xs font-medium"
      >
        <FlagIcon className="size-3.5 stroke-primary" />
        Job Array features
      </motion.h2>
      <h1 className="font-semibold text-gray-900 text-center leading-snug text-4xl mt-4">
        We Empower Job Seekers Like You To Streamline And Supercharge Your Job
        Search.
      </h1>
      <p className="text-gray-600 text-sm mt-2 lg:mt-4 leading-relaxed">
        Unlock your true potential and discover a world of opportunities that
        align with your skills, interests, and aspirations
      </p>
      <div className=" w-full flex whitespace-nowrap mt-10 overflow-x-scroll gap-2 no-scrollbar  scroll-smooth">
        <div className=" px-3 py-2 flex whitespace-nowrap items-center rounded-full gap-1 bg-white border border-gray-200 ">
          <MenuSquare className="size-4" />
          <p className="text-gray-800 text-sm font-medium">Developer</p>
        </div>
        <div className=" px-3 py-2 flex whitespace-nowrap items-center rounded-full gap-1 bg-white border border-gray-200 ">
          <MenuSquare className="size-4" />
          <p className="text-gray-800 text-sm font-medium">Developer</p>
        </div>
        <div className=" px-3 py-2 flex whitespace-nowrap items-center rounded-full gap-1 bg-white border border-gray-200 ">
          <MenuSquare className="size-4" />
          <p className="text-gray-800 text-sm font-medium">Developer</p>
        </div>
        <div className=" px-3 py-2 flex whitespace-nowrap items-center rounded-full gap-1 bg-white border border-gray-200 ">
          <MenuSquare className="size-4" />
          <p className="text-gray-800 text-sm font-medium">Developer</p>
        </div>
        <div className=" px-3 py-2 flex whitespace-nowrap items-center rounded-full gap-1 bg-white border border-gray-200 ">
          <MenuSquare className="size-4" />
          <p className="text-gray-800 text-sm font-medium">Developer</p>
        </div>
        <div className=" px-3 py-2 flex whitespace-nowrap items-center rounded-full gap-1 bg-white border border-gray-200 ">
          <MenuSquare className="size-4" />
          <p className="text-gray-800 text-sm font-medium">Developer</p>
        </div>
        <div className=" px-3 py-2 flex whitespace-nowrap items-center rounded-full gap-1 bg-white border border-gray-200 ">
          <MenuSquare className="size-4" />
          <p className="text-gray-800 text-sm font-medium">Developer</p>
        </div>
      </div>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {[1, 2, 3, 4, 5, 6].map((value: any) => (
          <JobCard key={value} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
