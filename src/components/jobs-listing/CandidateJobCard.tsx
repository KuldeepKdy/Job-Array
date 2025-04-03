"use client";
import { useState } from "react";

import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";
import { createJobApplicationAction } from "@/actions";
import { toast } from "sonner";
import JobCard from "./JobCard";
import { Briefcase, Clock, MapPin, Share2 } from "lucide-react";

interface CandidateJobCardProps {
  jobItem: {
    companyName: string;
    title: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    skills: string;
    recruiterId: string;
    _id: string;
    applicants: [
      {
        name: string;
        email: string;
        userId: string;
        status: string;
      }
    ];
  };
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
  jobApplications: {
    recruiterUserID: string;
    name: string;
    email: string;
    candidateUserID: string;
    status: [];
    jobID: string;
    JobAppliedDate: string;
  }[];
}

const CandidateJobCard = ({
  jobItem,
  profileInfo,
  jobApplications,
}: CandidateJobCardProps) => {
  const [showJobDetailsDrawer, setShowJobDetailsDrawer] = useState(false);
  // console.log(jobApplications, "jobApplications");
  // console.log(jobItem?.recruiterId, "job aaja Item");

  const handleJobApply = async () => {
    if (!profileInfo?.isPreminumUser && jobApplications.length >= 2) {
      setShowJobDetailsDrawer(false);
      toast("You can apply max 2 jobs", {
        description: (
          <p className="text-gray-600">
            Please opt for membership to apply for more jobs
          </p>
        ),
        action: {
          label: <span className="text-red-700">Try</span>,
          onClick: () => (window.location.href = "/membership"),
        },
      });
      return;
    } else {
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
      toast(`${jobItem?.title}`, {
        description: (
          <p className="text-gray-600">
            Applied successfully for {jobItem?.title}
          </p>
        ),
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: jobItem?.title,
          // text: "Here is something amazing I found.",
          url: window.location.href, // Use the current page's URL
        });
        console.log("Content shared successfully!");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      // Fallback: Copy the URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.error("Failed to copy the link:", error);
      }
    }
  };
  return (
    <>
      <Drawer
        open={showJobDetailsDrawer}
        onOpenChange={setShowJobDetailsDrawer}
      >
        {/* <CommonCard
          icon={<JobIcon />}
          title={jobItem?.title}
          description={jobItem?.companyName}
          footerContent={
            <Button
              onClick={() => setShowJobDetailsDrawer(true)}
              className="flex h-11 items-center dark:bg-blue-600 dark:text-white justify-center px-5"
            >
              View Details
            </Button>
          }
        /> */}
        <JobCard
          data={jobItem}
          cardBg="bg-gray-100"
          footerContent={
            <Button
              onClick={() => setShowJobDetailsDrawer(true)}
              className="flex  mt-4 h-11 items-center w-full text-xs md:text-sm dark:bg-primary-foreground dark:text-white  justify-center px-5"
            >
              View Details
            </Button>
          }
        />
        <DrawerContent className="px-6 pb-6 pt-4">
          <DrawerHeader className="px-0">
            {/* <div className="flex justify-between">
              <DrawerTitle className="text-2xl dark:text-white font-bold text-gray-800">
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
            </div> */}
            <div className="relative w-full  border-b pb-4">
              <h2 className=" text-2xl text-start w-full dark:text-white font-bold text-gray-900">
                {jobItem?.title}
              </h2>
            </div>
          </DrawerHeader>
          {/* <DrawerDescription className="text-xl dark:text-white font-medium text-gray-600">
            {jobItem?.description}
            <span className="text-lg ml-4 dark:text-white font-normal text-gray-500">
              {jobItem?.location}
            </span>
          </DrawerDescription> */}
          {/* Content */}
          <div className="w-full max-h-[60vh] overflow-y-scroll">
            {/* Info Pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-lg">
                <MapPin
                  size={16}
                  className="text-gray-500 dark:text-primary-foreground mr-1.5"
                />
                <span className="text-sm font-medium dark:text-primary-foreground">
                  {jobItem?.location}
                </span>
              </div>
              <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-lg">
                <Briefcase
                  size={16}
                  className="text-gray-500 dark:text-primary-foreground mr-1.5"
                />
                <span className="text-sm font-medium dark:text-primary-foreground">
                  {jobItem?.type}
                </span>
              </div>
              <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-lg">
                <Clock
                  size={16}
                  className="text-gray-500 dark:text-primary-foreground mr-1.5"
                />
                <span className="text-sm font-medium dark:text-primary-foreground">
                  {jobItem?.experience}
                </span>
              </div>
            </div>
            {/* Required Skills */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold dark:text-gray-50 text-gray-500 uppercase mb-3">
                Required Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {jobItem?.skills?.split(",").map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5  rounded-full text-sm font-medium 
                  ${
                    index === 0 || index === 1 || index === 2
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Job Description Preview */}
            <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h3 className="text-sm font-semibold mb-2 dark:text-primary-foreground">
                Job Overview
              </h3>
              <p className="text-gray-600 text-sm">{jobItem?.description}</p>
            </div>
          </div>
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
              className="flex-1 disabled:opacity-65 py-3 h-full px-4 rounded-lg font-medium "
            >
              {jobApplications.findIndex((item) => item.jobID == jobItem?._id) >
              -1
                ? "Applied"
                : "Apply"}
            </Button>
            <button
              onClick={() => setShowJobDetailsDrawer(false)}
              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-medium transition"
            >
              Cancel
            </button>
            <button
              onClick={() => handleShare()}
              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 p-3 rounded-lg transition"
            >
              <Share2 size={20} />
            </button>
          </div>
          {/* <div className="w-[150px] mt-6 flex justify-center items-center h-[40px] bg-black dark:bg-white rounded-md">
            <h2 className="text-lg font-bold text-white dark:text-black">
              {jobItem?.type}{" "}
            </h2>
          </div>
          <h3 className="text-xl font-medium text-black mt-3">
            Experience: {jobItem?.experience}
          </h3>
          <div className="flex gap-4 mt-6">
            {jobItem?.skills?.split(",").map((skill, index) => (
              <span
                key={index}
                className="text-sm px-4 py-2 rounded-md font-medium bg-black dark:bg-white dark:text-black text-white"
              >
                {skill}
              </span>
            ))}
          </div> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CandidateJobCard;
