"use client";

import PostNewJob from "../post-new-job/page";

interface ProfileInfo {
  role: string;
}

interface JobListingProps {
  user: { id: string; name: string; email: string }; // Replace with the appropriate type for user
  profileInfo: ProfileInfo;
}

const JobListing = ({ user, profileInfo }: JobListingProps) => {
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
              <PostNewJob profileInfo={profileInfo} />
            )}
          </div>
        </div>
        <div>Job Listing</div>
      </div>
    </div>
  );
};

export default JobListing;
