"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useEffect } from "react";

interface userInterface {
  user: {
    id: string;
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
}

const HomePageButtons = ({ user, profileInfo }: userInterface) => {
  console.log(user, profileInfo);
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div className="flex space-x-4">
      <Button
        onClick={() => router.push("/jobs")}
        className="flex h-11 items-center justify-center px-5"
      >
        {user
          ? profileInfo?.role === "candidate"
            ? "Browse Jobs"
            : "Jobs Dashboard"
          : "Find Jobs"}
      </Button>
      <Button
        onClick={() =>
          router.push(
            user
              ? profileInfo?.role === "candidate"
                ? "/activity"
                : "/jobs"
              : "/jobs"
          )
        }
        className="flex h-11 items-center justify-center px-5"
      >
        {user
          ? profileInfo?.role === "candidate"
            ? "Your Activity"
            : "Post New Job"
          : "Post New Job"}
      </Button>
    </div>
  );
};

export default HomePageButtons;
