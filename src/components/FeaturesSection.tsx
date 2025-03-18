"use client";
import { FlagIcon, MenuSquare } from "lucide-react";
import JobCard from "./jobs-listing/JobCard";
import { fetchJobsForRecruiterAction } from "@/actions";
import { useState } from "react";

import { useEffect } from "react";

const FeaturesSection = () => {
  const [jobList, setJobList] = useState<{ _id: string; title: string }[]>([]);
  const [selctedTitle, setselctedTitle] = useState<string>("");

  useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await fetchJobsForRecruiterAction();
      setJobList(jobs);
      console.log(jobs, "JobList");
    };
    fetchJobs();
  }, []);
  return (
    <div className="flex flex-col w-full h-fit items-center justify-center bg-gray-50 rounded-xl px-4 py-6 md:py-10  md:px-10">
      <h2
        // initial="offscreen"
        // whileInView={"onscreen"}
        // variants={titleVariants}
        className=" flex gap-1 items-center  text-primary text-xs font-medium"
      >
        <FlagIcon className="size-3.5 stroke-primary" />
        Job Array features
      </h2>
      <h1 className="font-semibold text-gray-900 text-center  leading-snug text-2xl lg:text-4xl mt-4">
        We Empower Job Seekers Like You To Streamline And Supercharge Your Job
        Search.
      </h1>
      <p className="text-gray-600 text-sm mt-2 lg:mt-4 text-center leading-relaxed">
        Unlock your true potential and discover a world of opportunities that
        align with your skills, interests, and aspirations
      </p>
      <div className=" w-full flex whitespace-nowrap mt-10 overflow-x-scroll gap-2 no-scrollbar  scroll-smooth">
        {[
          ...new Map(
            jobList?.map((job: { _id: string; title: string }) => [
              job.title,
              job,
            ]) // Create a Map with unique titles as keys
          ).values(),
        ]?.map((job: { _id: string; title: string }) => {
          return (
            <button
              onClick={() => setselctedTitle(job?.title)}
              key={job._id}
              className="px-3 py-2 flex hover:bg-gray-50 whitespace-nowrap items-center rounded-full gap-1 bg-white border border-gray-200"
            >
              <MenuSquare className="size-4" />
              <p className="text-gray-800 text-sm font-medium">{job.title}</p>
            </button>
          );
        })}
      </div>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {jobList
          ?.filter((job) => job.title === selctedTitle)
          .map((value: { _id: string; title: string }, index: number) => (
            <JobCard key={index} data={value} />
          ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
