"use client";

import { useState } from "react";
import CommonCard from "../CommonCard";
import JobIcon from "../JobIcon";
import { Button } from "../ui/button";
import JobApplicants from "./JobApplicants";
import ApplicantsCard from "./ApplicantsCard";
import { FlagIcon, Users } from "lucide-react";

interface RecruiterJobCardProps {
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
  jobApplications: {
    JobAppliedDate: string;
    candidateUserID: string;
    email: string;
    jobID: string;
    name: string;
    recruiterUserID: string;
    status: [];
    _id: string;
  }[];
}

const RecruiterJobCard = ({
  jobItem,
  profileInfo,
  jobApplications,
}: RecruiterJobCardProps) => {
  // console.log(
  //   jobApplications.filter(
  //     (jobApplicantItem) => jobApplicantItem.jobID == jobItem?._id
  //   ),
  //   "Recruiter card job applications"
  // );

  const [showApplicantsDrawer, setShowApplicantsDrawer] = useState(false);
  const [currentCandidateDetails, setCurrentCandidateDetails] = useState<{
    [key: string]: string | number | boolean;
    id: string;
    name: string;
  } | null>(null);
  const [
    showCurrentCandidateDetailsModel,
    setShowCurrentCandidateDetailsModel,
  ] = useState(false);
  return (
    <div>
      <ApplicantsCard
        icon={<FlagIcon />}
        data={jobItem}
        cardBg="bg-gray-50"
        footerContent={
          <Button
            onClick={() => setShowApplicantsDrawer(true)}
            className=" disabled:opacity-60 flex h-11 dark:bg-blue-600 dark:text-white items-center justify-center  mt-4  w-full text-xs   px-5"
            disabled={
              jobApplications.filter((item) => item.jobID === jobItem?._id)
                .length === 0
            }
          >
            <Users className="size-3 fill-white stroke-white" />
            {
              <p>
                {
                  jobApplications.filter((item) => item.jobID === jobItem?._id)
                    .length
                }
              </p>
            }
            <p>Applicants</p>
          </Button>
        }
      />
      {/* <CommonCard
        icon={JobIcon}
        title={jobItem?.title}
        footerContent={
          <Button
            onClick={() => setShowApplicantsDrawer(true)}
            className=" disabled:opacity-60 flex h-11 dark:bg-blue-600 dark:text-white items-center justify-center px-5"
            disabled={
              jobApplications.filter((item) => item.jobID === jobItem?._id)
                .length === 0
            }
          >
            {
              jobApplications.filter((item) => item.jobID === jobItem?._id)
                .length
            }{" "}
            Applicants
          </Button>
        }
      /> */}
      <JobApplicants
        showApplicantsDrawer={showApplicantsDrawer}
        setShowApplicantsDrawer={setShowApplicantsDrawer}
        showCurrentCandidateDetailsModel={showCurrentCandidateDetailsModel}
        setShowCurrentCandidateDetailsModel={
          setShowCurrentCandidateDetailsModel
        }
        currentCandidateDetails={currentCandidateDetails}
        setCurrentCandidateDetails={setCurrentCandidateDetails}
        jobItem={jobItem}
        jobApplications={jobApplications.filter(
          (jobApplicantItem) => jobApplicantItem.jobID == jobItem?._id
        )}
      />
    </div>
  );
};

export default RecruiterJobCard;
