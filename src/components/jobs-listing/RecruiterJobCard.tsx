"use client";

import CommonCard from "../CommonCard";
import JobIcon from "../JobIcon";
import { Button } from "../ui/button";

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
  jobApplications: { jobID: string }[];
}

const RecruiterJobCard = ({
  jobItem,
  profileInfo,
  jobApplications,
}: RecruiterJobCardProps) => {
  console.log(jobApplications, "Recruiter card job applications");
  return (
    <div>
      <CommonCard
        icon={JobIcon}
        title={jobItem?.title}
        footerContent={
          <Button className="flex h-11 items-center justify-center px-5">
            {
              jobApplications.filter((item) => item.jobID === jobItem?._id)
                .length
            }{" "}
            Applicants
          </Button>
        }
      />
    </div>
  );
};

export default RecruiterJobCard;
