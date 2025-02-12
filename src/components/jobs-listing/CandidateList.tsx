"use client";

import { fetchCandidateDetailsByIDAction } from "@/actions";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";

interface CandidateListProps {
  currentCandidateDetails: any;

  jobApplications: Array<{
    JobAppliedDate: string;
    candidateUserID: string;
    email: string;
    jobID: string;
    name: string;
    recruiterUserID: string;
    status: [];
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
  async function handleFetchCandidateDetails(getCurrentCandidateId: string) {
    const data = await fetchCandidateDetailsByIDAction(getCurrentCandidateId);
    console.log(data, "data aaja idhr");
    if (data) {
      setCurrentCandidateDetails(data);
      setShowCurrentCandidateDetailsModel(true);
    }
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
              <Button className="flex h-11 items-center justify-center px-5">
                Resume
              </Button>
              <Button className="flex h-11 items-center justify-center px-5">
                Select
              </Button>
              <Button className="flex h-11 items-center justify-center px-5">
                Reject
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CandidateList;
