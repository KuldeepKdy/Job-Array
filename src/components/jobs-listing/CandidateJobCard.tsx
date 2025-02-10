"use client";

import { useState } from "react";
import CommonCard from "../CommonCard";
import JobIcon from "../JobIcon";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { createJobApplicationAction } from "@/actions";

interface CandidateJobCardProps {
  jobItem: {
    _id: string;
    recruiterId: string;
    title: string;
    companyName: string;
    description: string;
    location: string;
    experience: string;
    skills: string;

    type: string;
  };
  profileInfo: {
    name: string;
    email: string;
    userId: string;
    candidateInfo: { name: string; email: string; userId: string };
  };
  jobApplications: [
    {
      recruiterUserID: string;
      name: string;
      email: string;
      candidateUserID: string;
      status: [];
      jobID: string;
      JobAppliedDate: string;
    }
  ];
}

const CandidateJobCard = ({
  jobItem,
  profileInfo,
  jobApplications,
}: CandidateJobCardProps) => {
  const [showJobDetailsDrawer, setShowJobDetailsDrawer] = useState(false);
  console.log(jobApplications, "jobApplications");
  console.log(jobItem?.recruiterId, "job aaja Item");

  const handleJobApply = async () => {
    await createJobApplicationAction(
      {
        recruiterUserID: jobItem?.recruiterId,
        name: profileInfo?.candidateInfo?.name,
        email: profileInfo?.email,
        candidateUserID: profileInfo?.userId,
        status: ["Applied"],
        jobID: jobItem?._id,
        JobAppliedDate: new Date().toLocaleDateString(),
      },
      "/jobs"
    );
    setShowJobDetailsDrawer(false);
  };
  return (
    <>
      <Drawer
        open={showJobDetailsDrawer}
        onOpenChange={setShowJobDetailsDrawer}
      >
        <CommonCard
          icon={<JobIcon />}
          title={jobItem?.title}
          description={jobItem?.companyName}
          footerContent={
            <Button
              onClick={() => setShowJobDetailsDrawer(true)}
              className="flex h-11 items-center justify-center px-5"
            >
              View Details
            </Button>
          }
        />
        <DrawerContent className="p-6">
          <DrawerHeader className="px-0">
            <div className="flex justify-between">
              <DrawerTitle className="text-2xl font-bold text-gray-800">
                {jobItem?.title}
              </DrawerTitle>
              <div className="flex gap-3">
                <Button
                  onClick={handleJobApply}
                  disabled={
                    jobApplications.findIndex(
                      (item) => item.jobID === jobItem?._id
                    ) > -1
                      ? true
                      : false
                  }
                  className=" disabled:opacity-65 flex h-11 items-center justify-center px-5"
                >
                  {jobApplications.findIndex(
                    (item) => item.jobID == jobItem?._id
                  ) > -1
                    ? "Applied"
                    : "Apply"}
                </Button>
                <Button
                  onClick={() => setShowJobDetailsDrawer(false)}
                  className="flex h-11 items-center justify-center px-5"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DrawerHeader>
          <DrawerDescription className="text-xl font-medium text-gray-600">
            {jobItem?.description}
            <span className="text-lg ml-4 font-normal text-gray-500">
              {jobItem?.location}
            </span>
          </DrawerDescription>
          <div className="w-[150px] mt-6 flex justify-center items-center h-[40px] bg-black rounded-md">
            <h2 className="text-lg font-bold text-white">{jobItem?.type} </h2>
          </div>
          <h3 className="text-xl font-medium text-black mt-3">
            Experience: {jobItem?.experience}
          </h3>
          <div className="flex gap-4 mt-6">
            {jobItem?.skills?.split(",").map((skill, index) => (
              <span
                key={index}
                className="text-sm px-4 py-2 rounded-md font-medium bg-black text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CandidateJobCard;
