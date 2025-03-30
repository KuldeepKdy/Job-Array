"use client";
import { titleVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import TestimonialCard from "./jobs-listing/TestimonialCard";
const TestimonialsSection = () => {
  const router = useRouter();
  return (
    <div className=" w-full h-fit flex-col flex lg:flex-row gap-10 lg:gap-32 items-center">
      <div className="flex flex-col w-full h-fit  justify-center ">
        <motion.h3
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className=" flex gap-1 items-center  text-primary text-xs font-medium"
        >
          <MessageSquare className="size-3.5 stroke-primary" />
          Testiminial
        </motion.h3>
        <h2 className="font-semibold dark:text-white text-gray-900 leading-snug text-2xl lg:text-4xl mt-4">
          Reviews of people who get jobs using Job Array
        </h2>
        <p className=" text-sm md:text-base md:font-medium  dark:text-gray-50  text-gray-600 mt-4 leading-relaxed">
          Unlock your true potential and discover a world of apportunities that
          align with your skills, interests, and aspirations
        </p>
        <Button
          onClick={() => router.push("/jobs")}
          className="flex h-11 mt-8 items-center w-fit  justify-center px-5"
        >
          More stories
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 relative  md:grid-cols-2 gap-6">
        {[0, 1, 2, 3].map((value) => (
          <TestimonialCard key={value} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
