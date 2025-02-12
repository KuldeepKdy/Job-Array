"use client";

import {
  fetchCandidateDetailsByIDAction,
  updateJobApplicationAction,
} from "@/actions";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";
import { createClient } from "@supabase/supabase-js";

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
      <div className="grid grid-cols-1 gap-3 p-10 md:grid-cols-2 lg:grid-cols-3">
        {jobApplications && jobApplications.length > 0
          ? jobApplications.map((jobApplicationtItem) => (
              <div
                key={jobApplicationtItem._id}
                className="bg-white p-4 w-full max-w-sm overflow-hidden mx-auto mt-4 rounded-md shadow-md cursor-pointer"
              >
                <div className="px-4 my-6 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    {jobApplicationtItem?.name}
                  </h3>
                  <Button
                    onClick={() =>
                      handleFetchCandidateDetails(
                        jobApplicationtItem?.candidateUserID
                      )
                    }
                    className="flex h-11 items-center justify-center px-5"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))
          : ""}
      </div>
      <Dialog
        open={showCurrentCandidateDetailsModel}
        onOpenChange={() => {
          setCurrentCandidateDetails(null);
          setShowCurrentCandidateDetailsModel(false);
        }}
      >
        <DialogContent>
          <div>
            <h1 className="text-xl font-bold text-black">
              {currentCandidateDetails?.candidateInfo?.name},{" "}
              {currentCandidateDetails?.email}
            </h1>
            <p className="text-lg font-medium text-black">
              {currentCandidateDetails?.candidateInfo?.currentCompany}
            </p>
            <p className="text-sm mt-2 ">
              {currentCandidateDetails?.candidateInfo?.currentJobLocation}
            </p>
            <p>
              Total Experience:{" "}
              {currentCandidateDetails?.candidateInfo?.totalExperience}
            </p>
            <p>
              Salary: {currentCandidateDetails?.candidateInfo?.currentSalary}
            </p>
            <p>
              Notice Period:{" "}
              {currentCandidateDetails?.candidateInfo?.noticePeriod}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <h2>Previous Companies</h2>
              {currentCandidateDetails?.candidateInfo?.previousCompanies
                ?.split(",")
                .map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="text-sm px-4 py-2 rounded-md font-medium bg-black text-white"
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
                    className="text-sm px-4 py-2 rounded-md font-medium bg-black text-white"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
          <DialogFooter>
            <div className="flex gap-3 mt-2">
              <Button
                onClick={handlePreviewResume}
                className="flex h-11 items-center justify-center px-5"
              >
                Resume
              </Button>
              <Button
                onClick={() => handleUpadateJobStatus("selected")}
                className="flex h-11 disabled:opacity-60 items-center justify-center px-5"
                disabled={
                  jobApplications
                    .find(
                      (item) =>
                        item.candidateUserID === currentCandidateDetails?.userId
                    )
                    ?.status.includes("selected")
                    ? true
                    : false
                }
              >
                {jobApplications
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
                className="flex h-11 disabled:opacity-60 items-center justify-center px-5"
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
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CandidateList;
