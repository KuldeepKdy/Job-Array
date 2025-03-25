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
  } | null;
  setCurrentCandidateDetails: (details: {
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
  } | null) => void;

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
