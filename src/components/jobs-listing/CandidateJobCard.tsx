"use client";

import { useState } from "react";
import CommonCard from "../CommonCard";
import JobIcon from "../JobIcon";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";

interface CandidateJobCardProps {
  jobItem: {
    title: string;
    companyName: string;
    description: string;
    location: string;
    experience: string;
    skills: string;
    applicationStatus: string;
    type: string;
  };
}

const CandidateJobCard = ({ jobItem }: CandidateJobCardProps) => {
  const [showJobDetailsDrawer, setShowJobDetailsDrawer] = useState(false);
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
                <Button className="flex h-11 items-center justify-center px-5">
                  Apply
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
