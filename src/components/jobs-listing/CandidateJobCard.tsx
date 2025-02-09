"use client";

import CommonCard from "../CommonCard";
import JobIcon from "../JobIcon";
import { Button } from "../ui/button";

interface CandidateJobCardProps {
  jobItem: {
    title: string;
    companyName: string;
  };
}

const CandidateJobCard = ({ jobItem }: CandidateJobCardProps) => {
  return (
    <>
      <CommonCard
        icon={<JobIcon />}
        title={jobItem?.title}
        description={jobItem?.companyName}
        footerContent={
          <Button className="flex h-11 items-center justify-center px-5">
            View Details
          </Button>
        }
      />
    </>
  );
};

export default CandidateJobCard;
