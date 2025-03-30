"use client";
import { titleVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import { FlagIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const AdvantageSection = () => {
  const router = useRouter();
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 items-center w-full gap-2 lg:gap-6 ">
      <div className=" w-full h-fit lg:col-span-2  items-center text-center lg:items-start lg:text-start flex flex-col">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className=" flex gap-1 items-center  text-primary text-xs font-medium"
        >
          <FlagIcon className="size-3.5 stroke-primary" />
          Job Array advantages
        </motion.h2>
        <h1 className="font-semibold dark:text-white text-gray-900 leading-snug text-2xl lg:text-4xl mt-4">
          We Empower Job Seekers Like You To Streamline And Supercharge Your{" "}
          <br /> Job Search.
        </h1>
      </div>
      <div className="flex flex-col lg:col-span-1 w-full h-fit justify-center items-center text-center lg:items-start lg:text-start ">
        <p className="text-gray-600 md:font-medium md:text-base  text-sm dark:text-gray-50 leading-relaxed">
          Unlock your true potential and discover a world of opportunities that
          align with your skills, interests, and aspirations
        </p>
        <Button
          onClick={() => router.push("/jobs")}
          className="flex h-11 mt-6  items-center w-fit  justify-center px-5"
        >
          Get started now
        </Button>
      </div>
    </div>
  );
};

export default AdvantageSection;
