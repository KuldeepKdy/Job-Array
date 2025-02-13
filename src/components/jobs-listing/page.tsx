"use client";

import { filterMenuDataArray } from "@/utils";
import PostNewJob from "../post-new-job/page";
import CandidateJobCard from "./CandidateJobCard";
import RecruiterJobCard from "./RecruiterJobCard";

interface ProfileInfo {
  role: string;
  recruiterInfo: { companyName: string };
  _id: string;
  name: string;
  email: string;
  userId: string;
  candidateInfo: {
    name: string;
    email: string;
    userId: string;
  };
  jobApplications: { jobId: string; status: string }[]; // Replace with the appropriate type for jobApplications
}

interface JobListingProps {
  user: { id: string; name: string; email: string }; // Replace with the appropriate type for user
  profileInfo: ProfileInfo;
  jobList: {
    _id: string;
    companyName: string;
    title: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    skills: string;
    recruiterId: string;
    applicants: [
      {
        name: string;
        email: string;
        userId: string;
        status: string;
      }
    ];
  }[]; // Replace with the appropriate type for jobList
  jobApplications: {
    JobAppliedDate: string;
    candidateUserID: string;
    email: string;
    jobID: string;
    name: string;
    recruiterUserID: string;
    status: [];
    _id: string;
  }[];
  filterCategories: {
    applicants: string[];
    companyName: string;
    description: string;
    experience: string;
    location: string;
    recruiterId: string;
    skills: string;
    title: string;
    type: string;
    __v: 0;
    _id: "67a71bce2f4c0c42c0660e71";
  }[];
}

const JobListing = ({
  user,
  profileInfo,
  jobList,
  jobApplications,
  filterCategories,
}: JobListingProps) => {
  // console.log(filterCategories, "Filter Categories");
  // console.log(jobApplications, "job Applications job listing");
  const filterMenus = filterMenuDataArray.map((item) => ({
    id: item.id,
    name: item.label,
    options: [
      ...new Set(
        filterCategories.map(
          (listItem) => listItem[item.id as keyof typeof listItem]
        )
      ),
    ],
  }));
  console.log(filterMenus, "Filter Menus");
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900">
            {profileInfo?.role === "candidate"
              ? "Explore All Jobs"
              : "Jobs Dashboard"}
          </h1>
          <div className="flex items-center ">
            {profileInfo?.role === "candidate" ? (
              <p>Filter</p>
            ) : (
              <PostNewJob user={user} profileInfo={profileInfo} />
            )}
          </div>
        </div>
        <div className=" pt-6 pb-24 ">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div className="lg:col-span-4">
              <div className="container mx-auto p-0 space-y-8">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                  {jobList && jobList.length > 0
                    ? jobList.map((jobItem) =>
                        profileInfo?.role === "candidate" ? (
                          <CandidateJobCard
                            key={jobItem?._id}
                            profileInfo={profileInfo}
                            jobItem={jobItem}
                            jobApplications={jobApplications}
                          />
                        ) : (
                          <RecruiterJobCard
                            key={jobItem?._id}
                            jobItem={jobItem}
                            profileInfo={profileInfo}
                            jobApplications={jobApplications}
                          />
                        )
                      )
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
