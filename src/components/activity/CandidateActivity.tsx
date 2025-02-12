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
    name: "Kuldeep";
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
        <div className="flex items-baseline justify-between border-b pb-6 pt-24">
          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
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
              
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default CandidateActivity;
