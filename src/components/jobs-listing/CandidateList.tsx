"use client";

import {
  fetchCandidateDetailsByIDAction,
  updateJobApplicationAction,
} from "@/actions";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";
import { createClient } from "@supabase/supabase-js";
import { Calendar, User } from "lucide-react";

interface CandidateListProps {
  currentCandidateDetails: any;

  jobApplications: Array<{
    JobAppliedDate: string;
    candidateUserID: string;
    email: string;
    jobID: string;
    name: string;
    recruiterUserID: string;
    status: string[];
    _id: string;
  }>;
  showCurrentCandidateDetailsModel: boolean;
  setShowCurrentCandidateDetailsModel: (show: boolean) => void;
}

const CandidateList: React.FC<CandidateListProps> = ({
  currentCandidateDetails,
  setCurrentCandidateDetails,
  jobApplications,
  showCurrentCandidateDetailsModel,
  setShowCurrentCandidateDetailsModel,
}) => {
  // Supabase connection
  const supabaseUrl = "https://wzapditlogmdsweecqnx.supabase.co";
  const supabaseKey =
    process.env.SUPABASE_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6YXBkaXRsb2dtZHN3ZWVjcW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMjI2MjgsImV4cCI6MjA1NDU5ODYyOH0.aA3AXtW_b6DwmK4UJE8OdVWGRfRx3liUYxYmgbLzpPI";
  const supabase = createClient(supabaseUrl, supabaseKey);

  async function handleFetchCandidateDetails(getCurrentCandidateId: string) {
    const data = await fetchCandidateDetailsByIDAction(getCurrentCandidateId);
    console.log(data, "data aaja idhr");
    if (data) {
      setCurrentCandidateDetails(data);
      setShowCurrentCandidateDetailsModel(true);
    }
  }

  function handlePreviewResume() {
    const { data } = supabase.storage
      .from("job-board-public")
      .getPublicUrl(currentCandidateDetails?.candidateInfo?.resume);
    // console.log(data);
    const a = document.createElement("a");
    a.href = data?.publicUrl;
    a.setAttribute("download", "Resume.pdf");
    a.setAttribute("target", "_blank");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  interface JobApplication {
    JobAppliedDate: string;
    candidateUserID: string;
    email: string;
    jobID: string;
    name: string;
    recruiterUserID: string;
    status: string[];
    _id: string;
  }

  async function handleUpadateJobStatus(getCurrentStatus: string) {
    const copyJobApplicants: JobApplication[] = [...jobApplications];
    const indexOfCurrentJobApplicant = copyJobApplicants.findIndex(
      (item) => item.candidateUserID === currentCandidateDetails?.userId
    );
    // console.log(indexOfCurrentJobApplicant);
    const jobApplicantsToUpdate: JobApplication = {
      ...copyJobApplicants[indexOfCurrentJobApplicant],
      status:
        copyJobApplicants[indexOfCurrentJobApplicant].status.concat(
          getCurrentStatus
        ),
    };
    console.log(jobApplicantsToUpdate);
    await updateJobApplicationAction(jobApplicantsToUpdate, "/jobs");
  }
  return (
    <>
      <div className="w-full flex flex-col pt-4 px-6">
        <div className="relative w-full  border-b pb-4">
          <h2 className=" text-2xl text-start w-full dark:text-white font-bold text-gray-900">
            Applicant Details
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 px-6 py-6 md:grid-cols-2 lg:grid-cols-3">
          {jobApplications && jobApplications.length > 0
            ? jobApplications.map((jobApplicationtItem) => (
                <div
                  key={jobApplicationtItem._id}
                  className="border rounded-xl"
                >
                  {/* Content */}
                  <div className="px-6 py-4">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                          <User className="" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {jobApplicationtItem?.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {jobApplicationtItem?.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="bg-green-100 rounded-full p-3 mr-4">
                          <Calendar />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Applied Date
                          </h4>
                          <p className="text-sm text-gray-500">
                            {jobApplicationtItem?.JobAppliedDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer with action buttons */}
                  <div className="bg-gray-50 px-6 py-4 flex justify-end border-t">
                    <button
                      onClick={() =>
                        handleFetchCandidateDetails(
                          jobApplicationtItem?.candidateUserID
                        )
                      }
                      className="bg-primary dark:bg-primary-foreground text-white font-medium py-2 px-4 rounded transition duration-150 ease-in-out"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
                // <div
                //   key={jobApplicationtItem._id}
                //   className="bg-white p-4 w-full max-w-sm overflow-hidden mx-auto mt-4 rounded-md shadow-md cursor-pointer"
                // >
                //   <div className="px-4 my-6 flex justify-between items-center">
                //     <h3 className="text-lg font-bold text-gray-900">
                //       {jobApplicationtItem?.name}
                //     </h3>
                //     <Button
                //       onClick={() =>
                //         handleFetchCandidateDetails(
                //           jobApplicationtItem?.candidateUserID
                //         )
                //       }
                //       className="flex h-11 items-center dark:bg-blue-500 justify-center px-5"
                //     >
                //       View Profile
                //     </Button>
                //   </div>
                // </div>
              ))
            : ""}
        </div>
      </div>
      <Dialog
        open={showCurrentCandidateDetailsModel}
        onOpenChange={() => {
          setCurrentCandidateDetails(null);
          setShowCurrentCandidateDetailsModel(false);
        }}
      >
        <DialogContent className="w-full h-full overflow-y-scroll overflow-x-hidden">
          <div className="w-full flex flex-col">
            {/* Header */}
            <div className="relative w-full pb-6 border-b">
              {/* <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button> */}

              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentCandidateDetails?.candidateInfo?.name}
                </h2>
                <p className="text-blue-600">
                  {currentCandidateDetails?.email}
                </p>
                <p className="text-gray-700 text-sm mt-1 text-wrap">
                  {currentCandidateDetails?.candidateInfo?.currentCompany}
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className=" w-full flex  pt-4 flex-col overflow-y-scroll h-fit">
              <div className="grid grid-cols-2  gap-4 mb-6">
                <div className="bg-gray-50 py-2 px-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="font-medium">
                    {currentCandidateDetails?.candidateInfo?.currentJobLocation}
                  </p>
                </div>
                <div className="bg-gray-50 py-2 px-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Experience</p>
                  <p className="font-medium">
                    {currentCandidateDetails?.candidateInfo?.totalExperience}
                  </p>
                </div>
                <div className="bg-gray-50 py-2 px-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Salary Expected</p>
                  <p className="font-medium">
                    {currentCandidateDetails?.candidateInfo?.currentSalary}
                  </p>
                </div>
                <div className="bg-gray-50 py-2 px-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Notice Period</p>
                  <p className="font-medium">
                    {currentCandidateDetails?.candidateInfo?.noticePeriod}
                  </p>
                </div>
              </div>

              {/* Previous Companies */}
              <div className="mb-4">
                <p className="text-gray-500 text-sm mb-2">Previous Companies</p>
                <div className="flex flex-wrap gap-2">
                  {currentCandidateDetails?.candidateInfo?.previousCompanies
                    ?.split(",")
                    .map((company: string, index: number) => (
                      <span
                        key={index}
                        className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm"
                      >
                        {company}
                      </span>
                    ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <p className="text-gray-500 text-sm mb-2">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {currentCandidateDetails?.candidateInfo?.skills
                    ?.split(",")
                    .map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>

              {/* Applied Date */}
              <div className="mt-4">
                <p className="text-gray-500 text-sm mb-1">Applied Date</p>
                <div className="flex items-center gap-1">
                  <Calendar className="size-4" />
                  {jobApplications && jobApplications.length > 0
                    ? jobApplications.map((jobApplicationtItem) => (
                        <span key={jobApplicationtItem?._id}>
                          {jobApplicationtItem?.JobAppliedDate}
                        </span>
                      ))
                    : ""}
                </div>
              </div>
            </div>

            {/* <h1 className="text-xl font-bold dark:text-white text-black">
              {currentCandidateDetails?.candidateInfo?.name},{" "}
              {currentCandidateDetails?.email}
            </h1>
            <p className="text-lg font-medium dark:text-white text-black">
              {currentCandidateDetails?.candidateInfo?.currentCompany}
            </p>
            <p className="text-sm mt-2  dark:text-white ">
              {currentCandidateDetails?.candidateInfo?.currentJobLocation}
            </p>
            <p className="dark:text-white">
              Total Experience:{" "}
              {currentCandidateDetails?.candidateInfo?.totalExperience}
            </p>
            <p className="dark:text-white">
              Salary: {currentCandidateDetails?.candidateInfo?.currentSalary}
            </p>
            <p className="dark:text-white">
              Notice Period:{" "}
              {currentCandidateDetails?.candidateInfo?.noticePeriod}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <h2 className="dark:text-white">Previous Companies</h2>
              {currentCandidateDetails?.candidateInfo?.previousCompanies
                ?.split(",")
                .map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="text-sm px-4 py-2 rounded-md font-medium bg-black text-white dark:bg-white dark:text-black"
                  >
                    {skill}
                  </span>
                ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              {currentCandidateDetails?.candidateInfo?.skills
                ?.split(",")
                .map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="text-sm px-4 py-2 rounded-md font-medium bg-black text-white dark:bg-white dark:text-black"
                  >
                    {skill}
                  </span>
                ))}
            </div> */}
          </div>
          <DialogFooter>
            {/* Action Buttons */}
            <div className=" py-4 flex gap-3 justify-end bg-gray-50 border-t w-full">
              <button
                onClick={handlePreviewResume}
                className="bg-primary text-white text-sm sm:text-base dark:bg-primary-foreground font-medium px-4 py-2 rounded-md transition-colors"
              >
                Resume
              </button>
              <button
                onClick={() => handleUpadateJobStatus("selected")}
                disabled={
                  jobApplications
                    .find(
                      (item) =>
                        item.candidateUserID === currentCandidateDetails?.userId
                    )
                    ?.status.includes("selected") ||
                  jobApplications
                    .find(
                      (item) =>
                        item.candidateUserID === currentCandidateDetails?.userId
                    )
                    ?.status.includes("rejected")
                    ? true
                    : false
                }
                className="bg-primary dark:bg-primary-foreground  text-sm sm:text-base disabled:opacity-60 text-white hover:bg-gray-700 font-medium px-6 py-2 rounded-md transition-colors"
              >
                {jobApplications
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("selected")
                  ? "Selected"
                  : "Select"}
              </button>
              <button
                onClick={() => handleUpadateJobStatus("rejected")}
                disabled={
                  jobApplications
                    .find(
                      (item) =>
                        item.candidateUserID === currentCandidateDetails?.userId
                    )
                    ?.status.includes("rejected") ||
                  jobApplications
                    .find(
                      (item) =>
                        item.candidateUserID === currentCandidateDetails?.userId
                    )
                    ?.status.includes("selected")
                    ? true
                    : false
                }
                className="bg-white text-sm sm:text-base disabled:opacity-60 text-gray-700 border border-gray-300 hover:bg-gray-50 font-medium px-4 py-2 rounded-md transition-colors"
              >
                {jobApplications
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("rejected")
                  ? "Rejected"
                  : "Reject"}
              </button>
            </div>
            {/* <div className="flex gap-3 mt-2">
              <Button
                onClick={handlePreviewResume}
                className="flex h-11 items-center justify-center dark:bg-blue-500 dark:text-white px-5"
              >
                Resume
              </Button>
              <Button
                onClick={() => handleUpadateJobStatus("selected")}
                className="flex h-11 disabled:opacity-60 items-center justify-center dark:bg-blue-500 dark:text-white px-5"
                disabled={
                  jobApplications
                    .find(
                      (item) =>
                        item.candidateUserID === currentCandidateDetails?.userId
                    )
                    ?.status.includes("selected") ||
                  jobApplications
                    .find(
                      (item) =>
                        item.candidateUserID === currentCandidateDetails?.userId
                    )
                    ?.status.includes("rejected")
                    ? true
                    : false
                }
              >
                {jobApplications
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("selected")
                  ? "Selected"
                  : "Select"}
              </Button>
              <Button
                onClick={() => handleUpadateJobStatus("rejected")}
                disabled={
                  jobApplications
                    .find(
                      (item) =>
                        item.candidateUserID === currentCandidateDetails?.userId
                    )
                    ?.status.includes("rejected") ||
                  jobApplications
                    .find(
                      (item) =>
                        item.candidateUserID === currentCandidateDetails?.userId
                    )
                    ?.status.includes("selected")
                    ? true
                    : false
                }
                className="flex h-11 disabled:opacity-60 items-center dark:bg-blue-500 dark:text-white justify-center px-5"
              >
                {jobApplications
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("rejected")
                  ? "Rejected"
                  : "Reject"}
              </Button>
            </div> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CandidateList;
