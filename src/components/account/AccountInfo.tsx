"use client";

import {
  candidateOnBoardFormControls,
  initialCandidateFormData,
  intitalRecruiterFormData,
  recruiterOnBoardFormControls,
} from "@/utils";
import { useEffect, useState } from "react";
import CommonForm from "../common-form/page";

interface accountInterface {
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
      collageLocation: string;
      college: string;
      currentCompany: string;
      currentSalary: string;
      currentJobLocation: string;
      githubProfile: string;
      graduatedYear: string;
      linkedinProfile: string;
      name: string;
      noticePeriod: string;
      preferedJobLocation: string;
      previousCompanies: string;
      resume: string;
      skills: string;
      totalExperience: string;
    };
  };
}
const AccountInfo = ({ profileInfo }: accountInterface) => {
  // console.log(profileInfo, "ProfileInfo");
  const [candidateformData, setCandidateFormData] = useState(
    initialCandidateFormData
  );
  const [recruiterformData, setRecruiterFormData] = useState(
    intitalRecruiterFormData
  );

  useEffect(() => {
    if (profileInfo?.role === "recruiter") {
      setRecruiterFormData(profileInfo?.recruiterInfo);
    } else if (profileInfo?.role === "candidate") {
      setCandidateFormData(profileInfo?.candidateInfo);
    }
  }, [profileInfo]);

  console.log(candidateformData, recruiterformData);

  return (
    <div className="mx-auto max-w-7xl">
      <div className=" flex items-baseline justify-between pb-6 border-b pt-24">
        <h1 className="text-3xl font-bold tracking-tighter  text-gray-900">
          Account Details
        </h1>
      </div>
      <div className="py-20 pb-24 pt-6">
        <div className=" container mx-auto p-0 space-y-8">
          <CommonForm
            formControls={
              profileInfo?.role === "candidate"
                ? candidateOnBoardFormControls
                : recruiterOnBoardFormControls
            }
            formData={
              profileInfo?.role === "candidate"
                ? candidateformData
                : recruiterformData
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
