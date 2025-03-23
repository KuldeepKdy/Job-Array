"use client";

import { Drawer, DrawerContent } from "../ui/drawer";
import { ScrollArea } from "../ui/scroll-area";
import CandidateList from "./CandidateList";

interface JobApplicationsProps {
  showApplicantsDrawer: boolean;
  setShowApplicantsDrawer: (open: boolean) => void;
  showCurrentCandidateDetailsModel: boolean;
  setShowCurrentCandidateDetailsModel: (show: boolean) => void;
  currentCandidateDetails: {
    [key: string]: string | number | boolean;
    id: string;
    name: string;
  } | null;
  setCurrentCandidateDetails: (details: {
    id: string;
    name: string;
    [key: string]: string | number | boolean;
  }) => void;
  jobItem: {};
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
const JobApplicants = ({
  showApplicantsDrawer,
  setShowApplicantsDrawer,
  showCurrentCandidateDetailsModel,
  setShowCurrentCandidateDetailsModel,
  currentCandidateDetails,
  setCurrentCandidateDetails,
  jobItem,
  jobApplications,
}: JobApplicationsProps) => {
//   console.log(jobApplications, "Job application are here");
  return (
    <Drawer open={showApplicantsDrawer} onOpenChange={setShowApplicantsDrawer}>
      <DrawerContent className="max-h-[50vh]">
        <ScrollArea className="h-auto overflow-y-auto">
          <CandidateList
            currentCandidateDetails={currentCandidateDetails}
            setCurrentCandidateDetails={setCurrentCandidateDetails}
            jobApplications={jobApplications}
            showCurrentCandidateDetailsModel={showCurrentCandidateDetailsModel}
            setShowCurrentCandidateDetailsModel={
              setShowCurrentCandidateDetailsModel
            }
          />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default JobApplicants;
