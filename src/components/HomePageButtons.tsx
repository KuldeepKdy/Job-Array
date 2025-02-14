"use client";

import { Button } from "./ui/button";

interface userInterface {
  user: {};
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
}

const HomePageButtons = ({ user, profileInfo }: userInterface) => {
  console.log(user, profileInfo);
  return (
    <div className="flex space-x-4">
      <Button className="flex h-11 items-center justify-center px-5">
        Browse Jobs
      </Button>
      <Button className="flex h-11 items-center justify-center px-5">
        Post New Job
      </Button>
    </div>
  );
};

export default HomePageButtons;
