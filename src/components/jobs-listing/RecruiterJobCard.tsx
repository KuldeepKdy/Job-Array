"use client";

import { useState } from "react";

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
    _id: string;
    recruiterUserID: string;
    name: string;
    email: string;
    candidateUserID: string;
    status: [];
    jobID: string;
    JobAppliedDate: string;
  }[];
}

const RecruiterJobCard = ({
  jobItem,
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
    candidateInfo: {
      name: string;
      resume: string;
      currentCompany: string;
      currentJobLocation: string;
      totalExperience: string;
      currentSalary: string;
      noticePeriod: string;
      previousCompanies: string;
      skills: string;
    };
    email: string;
    userId: string;
  } | null>(null);
  const [
    showCurrentCandidateDetailsModel,
    setShowCurrentCandidateDetailsModel,
  ] = useState(false);
  return (
    <div>
      <ApplicantsCard
        icon={<FlagIcon className="dark:text-primary-foreground" />}
        data={jobItem}
        cardBg="bg-gray-100"
        footerContent={
          <Button
            onClick={() => setShowApplicantsDrawer(true)}
            className=" flex  mt-4 h-11 items-center w-full text-xs md:text-sm dark:bg-primary-foreground dark:text-white  justify-center px-5"
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
       
        jobApplications={jobApplications.filter(
          (jobApplicantItem) => jobApplicantItem.jobID == jobItem?._id
        )}
      />
    </div>
  );
};

export default RecruiterJobCard;
