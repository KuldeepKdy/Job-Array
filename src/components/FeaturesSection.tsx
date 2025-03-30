"use client";
import { FlagIcon, MenuSquare } from "lucide-react";
import JobCard from "./jobs-listing/JobCard";

import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface featureInterface {
  jobList: {
    _id: string;
    companyName: string;
    title: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    skills: string;
    recruiterId: string;
    applicants: [
      {
        name: string;
        email: string;
        userId: string;
        status: string;
      }
    ];
  }[];
  profileInfo: {
    userId: string;
    role: string;
    email: string;
    isPreminumUser: boolean;
    memberShipType: string;
    memberShipStartDate: string;
    memberShipEndDate: string;
    recruiterInfo: {
      name: string;
      companyName: string;
      companyRole: string;
    };
    candidateInfo: {
      name: string;
      currentJobLocation: string;
      preferedJobLocation: string;
      currentSalary: string;
      noticePeriod: string;
      skills: string;
      currentCompany: string;
      previousCompanies: string;
      totalExperience: string;
      college: string;
      collageLocation: string;
      graduatedYear: string;
      linkedinProfile: string;
      githubProfile: string;
      resume: string;
    };
  };
}
const FeaturesSection = ({ jobList, profileInfo }: featureInterface) => {
  const [selctedTitle, setselctedTitle] = useState<string>(
    `${jobList[0]?.title}`
  );
  const router = useRouter();

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
      <p className="text-gray-600 text-sm mt-2 md:font-medium md:text-base lg:mt-5 text-center leading-relaxed">
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
              className={` ${
                selctedTitle == job?.title
                  ? "text-white bg-primary dark:bg-primary-foreground"
                  : "text-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary-foreground dark:hover:text-white"
              } px-3  py-2 flex hover:bg-primary  whitespace-nowrap items-center rounded-full gap-2 transition-all duration-200 ease-linear  border border-gray-200 `}
            >
              <MenuSquare className="size-4" />
              <p className=" text-sm font-medium">{job.title}</p>
            </button>
          );
        })}
      </div>
      <div className=" grid w-full items-start justify-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {jobList
          ?.filter((job) =>
            selctedTitle == "All" ? " " : job.title === selctedTitle
          )
          .map((value) => (
            <JobCard
              key={value._id}
              data={value}
              role={profileInfo?.role}
              footerContent={
                <Button
                  onClick={() =>
                    profileInfo?.role === "candidate"
                      ? router.push("/jobs")
                      : toast(
                          <div className="text-red-600">
                            Login as candidate to see more details
                          </div>,
                          {
                            description: (
                              <p className="text-gray-600">
                                You loged as a recruiter. Please login as
                                candidate to see more details of the job
                                posting.
                              </p>
                            ),
                            action: {
                              label: <span className="text-red-600">Try</span>,
                              onClick: () => (window.location.href = "/jobs"),
                            },
                          }
                        )
                  }
                  className="flex  mt-4 dark:bg-primary-foreground dark:text-white items-center w-full text-xs  justify-center px-5"
                >
                  Apply now
                </Button>
              }
            />
          ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
