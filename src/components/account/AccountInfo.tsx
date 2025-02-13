"use client";

import { initialCandidateFormData, intitalRecruiterFormData } from "@/utils";
import { useState } from "react";

const AccountInfo = ({ profileInfo }) => {
  console.log(profileInfo, "ProfileInfo");
  const [candidateformData, setCandidateFormData] = useState(
    initialCandidateFormData
  );
  const [recruiterformData, setRecruiterFormData] = useState(
    intitalRecruiterFormData
  );
  return (
    <div className="mx-auto max-w-7xl">
      <div className=" flex items-baseline justify-between pb-6 border-b pt-24">
        <h1 className="text-3xl font-bold tracking-tighter  text-gray-900">
          Account Details
        </h1>
      </div>
      <div className="py-20 pb-24 pt-6">
        <div className=" container mx-auto p-0 space-y-8"></div>
      </div>
    </div>
  );
};

export default AccountInfo;
