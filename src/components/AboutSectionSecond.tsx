"use client";
import { Check, CheckCheck, MessageSquare } from "lucide-react";
import React from "react";
import { desVariants, tagVariants, titleVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import AnimatedComponent from "./ui/AnimatedComponent";

const AboutSectionSecond = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3  w-full h-full gap-10 lg:gap-8 ">
      <div className="flex flex-col lg:flex-row lg:col-span-2 relative  w-full h-full gap-10 lg:gap-8">
        <div className=" flex w-full h-fit sticky top-16 lg:h-[80vh] flex-col py-8 justify-center gap-4 rounded-xl shadow-lg border border-gray-200 bg-white  px-6">
          <div className="flex flex-col gap-2 w-[80%]">
            <AnimatedComponent
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className=" px-4 py-2 w-fit rounded-lg font-medium leading-relaxed border border-gray-200 text-xs text-gray-600"
            >
              Good Morning
            </AnimatedComponent>
            <span className="text-[10px]  text-gray-500 leading-snug">
              08:34 AM
            </span>
          </div>
          <div className="flex flex-col w-[80%] gap-2">
            <AnimatedComponent
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className=" px-4 py-2 w-fit rounded-lg font-medium leading-relaxed border border-gray-200 text-xs text-gray-600"
            >
              Hii Kuldeep, <br />I am Anjali. I,m a UI/UX Designer at Exact
              Studio. I have a feeling we may have some very interesting work
              that you may be interested in full-time opportunities?
            </AnimatedComponent>
            <span className="text-[10px] text-gray-500 leading-snug">
              08:34 AM
            </span>
          </div>
          <div className="w-full flex items-center justify-end">
            <div className="flex flex-col w-[80%] gap-2">
              <AnimatedComponent
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className=" px-4 py-2 w-fit font-medium rounded-lg border leading-relaxed bg-primary text-white dark:text-gray-600  border-gray-200 text-xs "
              >
                Hii Anjali, Thank you for offering me the position. I appreciate
                your willingeners to discuss the details of the position with me
                and give me to consider your offer.
              </AnimatedComponent>
              <span className="text-[10px] text-gray-500 flex gap-0.5">
                <CheckCheck className="stroke-blue-600 size-3.5 leading-snug" />{" "}
                11:12 AM
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[80%] gap-2">
            <AnimatedComponent
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className=" px-4 py-2 font-medium w-fit rounded-lg leading-relaxed border border-gray-200 text-xs text-gray-600"
            >
              Your Welcome 👌. So what&apos;s you answer for my offer ?
            </AnimatedComponent>
            <span className="text-[10px] text-gray-500 leading-snug">
              08:34 AM
            </span>
          </div>
        </div>
        <div className="w-full flex h-[80vh] bg-[url(/images/AboutImg.avif)]  bg-center bg-no-repeat py-6 px-4 md:p-6 bg-cover  rounded-xl shadow-lg z-10 border border-gray-200 ">
          <AnimatedComponent
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className=" p-3 md:p-4 h-fit w-full flex items-center  gap-4 bg-white rounded-xl sticky top-20 sm:top-24"
          >
            <div className="flex items-center gap-4 sticky top-20">
              <div className="p-2 rounded-full bg-green-50  ">
                <div className="p-2 rounded-full bg-green-100">
                  <Check className="size-5 stroke-green-400" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-gray-900 text-base leading-snug font-semibold">
                  Successfully applied for a job
                </h3>
                <p className="text-xs text-gray-500 leading-normal font-medium lg:leading-relaxed">
                  Your application is now being carefully reviewed by our team.
                </p>
              </div>
            </div>
          </AnimatedComponent>
        </div>
      </div>
      <div className="flex flex-col w-full h-fit lg:h-[80vh] lg:col-span-1 justify-center items-center text-center lg:items-start lg:justify-start  ">
        <motion.h3
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className=" flex gap-1 items-center  text-primary text-xs font-medium"
        >
          <MessageSquare className="size-3.5 stroke-primary" />
          More about JobArray
        </motion.h3>
        <h2 className="font-semibold dark:text-white lg:text-start text-gray-900 leading-snug  text-2xl lg:text-4xl mt-4">
          The thing you care about job matter to jobstera
        </h2>
        <p className="text-sm text-gray-600  md:font-medium md:text-base  dark:text-gray-50 lg:text-start mt-3 leading-relaxed">
          Unlock your true potential and discover a world of apportunities that
          align with your skills, interests, and aspirations.
        </p>
        <Button
          onClick={() => router.push("/jobs")}
          className="flex h-11 mt-6 items-center w-fit  justify-center px-5"
        >
          Get Started Now
        </Button>
      </div>
    </div>
  );
};

export default AboutSectionSecond;
