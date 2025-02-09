"use client";

import PostNewJob from "../post-new-job/page";
import CandidateJobCard from "./CandidateJobCard";
import RecruiterJobCard from "./RecruiterJobCard";

interface ProfileInfo {
  role: string;
  recruiterInfo: { companyName: string };
  _id: string;
  name: string;
}

interface JobListingProps {
  user: { id: string; name: string; email: string }; // Replace with the appropriate type for user
  profileInfo: ProfileInfo;
  jobList: { id: string; title: string; description: string }[]; // Replace with the appropriate type for jobList
}

const JobListing = ({ user, profileInfo, jobList }: JobListingProps) => {
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
                            key={jobItem?.id}
                            jobItem={jobItem}
                          />
                        ) : (
                          <RecruiterJobCard
                            key={jobItem?.id}
                            jobItem={jobItem}
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
