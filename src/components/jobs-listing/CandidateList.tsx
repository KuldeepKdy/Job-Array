"use client";

import { fetchCandidateDetailsByIDAction } from "@/actions";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";

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
    // console.log(data, "data aaja idhr");
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
            <h1>
              {currentCandidateDetails?.candidateInfo?.name},{" "}
              {currentCandidateDetails?.email}
            </h1>
            <p>{currentCandidateDetails?.candidateInfo?.currentCompany}</p>
            <p>{currentCandidateDetails?.candidateInfo?.currentJobLocation}</p>
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
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CandidateList;
