"use client";

import { filterMenuDataArray, formUrlQuery } from "@/utils";
import PostNewJob from "../post-new-job/page";
import CandidateJobCard from "./CandidateJobCard";
import RecruiterJobCard from "./RecruiterJobCard";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
  const [filterParams, setFilterParams] = useState<{ [key: string]: string[] }>(
    {}
  );
  const seachParams = useSearchParams();
  const router = useRouter();

  function handleFilter(getSectionID: string, getCurrentOption: string) {
    let copyFilterParams = { ...filterParams };
    const indexOfCurrentSection =
      Object.keys(copyFilterParams).indexOf(getSectionID);
    if (indexOfCurrentSection == -1) {
      copyFilterParams = {
        ...copyFilterParams,
        [getSectionID]: [getCurrentOption],
      };
      console.log("workdone");
    } else {
      const indexOfCurrentOption =
        copyFilterParams[getSectionID].indexOf(getCurrentOption);
      if (indexOfCurrentOption == -1) {
        copyFilterParams[getSectionID].push(getCurrentOption);
      } else {
        copyFilterParams[getSectionID].splice(indexOfCurrentOption, 1);
      }
    }
    setFilterParams(copyFilterParams);
    sessionStorage.setItem("filterParams", JSON.stringify(copyFilterParams));
    console.log(filterParams, "work done");
  }
  // console.log(filterCategories, "Filter Categories");
  // console.log(jobApplications, "job Applications job listing");
  useEffect(() => {
    const storedFilterParams = sessionStorage.getItem("filterParams");
    if (storedFilterParams) {
      setFilterParams(JSON.parse(storedFilterParams));
    }
  }, []);
  useEffect(() => {
    if (filterParams && Object.keys(filterParams).length > 0) {
      let url = "";
      url = formUrlQuery({
        params: seachParams.toString(),
        dataToAdd: filterParams,
      });
      router.push(url, { scroll: false });
    }
  }, [filterParams, seachParams, router]);
  const filterMenus = filterMenuDataArray.map((item) => ({
    id: item.id,
    name: item.label,
    options: [
      ...new Set(
        filterCategories.map(
          (listItem) => listItem[item.id as keyof typeof listItem] as string
        )
      ),
    ] as string[],
  }));

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-6 items-center  justify-between border-b dark:border-white pb-6 pt-24">
          <h1 className="text-4xl font-bold dark:text-white tracking-tighter text-gray-900">
            {profileInfo?.role === "candidate"
              ? "Explore All Jobs"
              : "Jobs Dashboard"}
          </h1>
          <div className="flex items-center ">
            {profileInfo?.role === "candidate" ? (
              <Menubar className="w-full h-fit md:p-2 ">
                {filterMenus.map((filterMenu, index) => (
                  <MenubarMenu key={index}>
                    <MenubarTrigger className="cursor-pointer">
                      {filterMenu.name}
                    </MenubarTrigger>
                    <MenubarContent>
                      {filterMenu.options.map(
                        (option: string, optionIndex: number) => (
                          <MenubarItem
                            key={optionIndex}
                            className=" flex items-center "
                            onClick={() => handleFilter(filterMenu.id, option)}
                          >
                            <div
                              className={` h-4 w-4 border rounded dark:border-white border-gray-900 text-indigo-600 ${
                                filterParams &&
                                Object.keys(filterParams).length > 0 &&
                                filterParams[filterMenu.id] &&
                                filterParams[filterMenu.id].indexOf(option) > -1
                                  ? "bg-black dark:bg-white "
                                  : ""
                              }`}
                            />
                            <Label className="ml-3 cursor-pointer dark:text-white text-sm text-gray-600">
                              {option}
                            </Label>
                          </MenubarItem>
                        )
                      )}
                    </MenubarContent>
                  </MenubarMenu>
                ))}
              </Menubar>
            ) : (
              <PostNewJob
                jobList={jobList}
                user={user}
                profileInfo={profileInfo}
              />
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
