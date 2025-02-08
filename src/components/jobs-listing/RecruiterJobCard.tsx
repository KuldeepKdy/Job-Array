"use client";

import CommonCard from "../CommonCard";
import JobIcon from "../JobIcon";
import { Button } from "../ui/button";

interface RecruiterJobCardProps {
  jobItem: { id: string; title: string; description: string };
}

const RecruiterJobCard = ({ jobItem }: RecruiterJobCardProps) => {
  return (
    <div>
      <CommonCard
        icon={JobIcon}
        title={jobItem?.title}
        footerContent={
          <Button className="flex h-11 items-center justify-center px-5">
            10 Applicants
          </Button>
        }
      />
    </div>
  );
};

export default RecruiterJobCard;
