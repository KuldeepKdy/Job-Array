"use client";

import { Laptop } from "lucide-react";
import CommonCard from "../CommonCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface candidateActivity {
  jobList: Array<{
    applicants: string[];
    companyName: string;
    description: string;
    experience: string;
    location: string;
    recruiterId: string;
    skills: string;
    title: string;
    type: string;
    __v: number;
    _id: string;
  }>;
  jobApplicants: Array<{
    JobAppliedDate: string;
    candidateUserID: string;
    email: string;
    jobID: string;
    name: string;
    recruiterUserID: string;
    status: string[];
    __v: number;
    _id: string;
  }>;
}

const CandidateActivity = ({ jobList, jobApplicants }: candidateActivity) => {
  console.log(jobList, jobApplicants);
  const uniqueStatusArray = [
    ...new Set(
      jobApplicants.map((jobApplicantItem) => jobApplicantItem.status).flat(1)
    ),
  ];
  console.log(uniqueStatusArray);
  return (
    <div className="mx-auto max-w-7xl">
      <Tabs defaultValue="Applied" className="w-full">
        <div className="flex items-baseline justify-between border-b dark:border-white pb-6 pt-24">
          <h1 className="text-3xl dark:text-white font-bold tracking-tight text-gray-950">
            Your Activity
          </h1>
          <TabsList>
            {uniqueStatusArray.map((status) => (
              <TabsTrigger key={status} value={status} className="">
                {status}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="pb-24 pt-6">
          <div className="container mx-auto p-0  w-full h-full space-y-8">
            <div className=" flex flex-col gap-4">
              {uniqueStatusArray.map((status, index) => (
                <TabsContent
                  value={status}
                  key={index}
                  className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {jobList
                    .filter(
                      (jobItem) =>
                        jobApplicants
                          .filter(
                            (jobApplicantion) =>
                              jobApplicantion.status.indexOf(status) > -1
                          )
                          .findIndex(
                            (filteredItemByStatus) =>
                              jobItem._id === filteredItemByStatus.jobID
                          ) > -1
                    )
                    .map((finalFilteredData, index) => (
                      <div
                        key={index}
                        className="group p-4 flex flex-col shadow-md bg-gray-100  hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-gray-600/10 transition-all duration-200 ease-linear gap-2 border border-gray-100  rounded-lg"
                      >
                        <div className="flex justify-between">
                          <h3 className="text-xl font-bold text-gray-800">
                            {finalFilteredData.title}
                          </h3>
                          <span className="bg-white group-hover:bg-gray-100 text-primary text-sm font-medium px-3 py-1 rounded-full">
                            {finalFilteredData.companyName}
                          </span>
                        </div>

                        <div className="flex items-center mt-1 text-gray-500">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>{finalFilteredData.location}</span>
                          <span className="mx-2">•</span>
                          <span>{finalFilteredData.type}</span>
                        </div>
                        <p className=" text-gray-600 text-sm line-clamp-2">
                          {finalFilteredData.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {finalFilteredData.skills
                            .split(",")
                            .map((skill, index) => (
                              <span
                                key={index}
                                className="bg-white group-hover:bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                              >
                                {skill}
                              </span>
                            ))}
                        </div>
                      </div>
                      // <CommonCard
                      //   key={index}
                      //   icon={<Laptop />}
                      //   title={finalFilteredData?.title}
                      //   description={finalFilteredData?.companyName}
                      // />
                    ))}
                </TabsContent>
              ))}
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default CandidateActivity;
