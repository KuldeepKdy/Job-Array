"use client";
import { Button } from "../ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import CommonForm from "../common-form/page";
import { initialPostNewJobFormData, PostNewJobFormControls } from "@/utils";
import { postNewJobAction } from "@/actions/index";
import { toast } from "sonner";

interface Profileinterface {
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
}
interface PostNewJobProps {
  user: { id: string; name: string; email: string };
  profileInfo: Profileinterface;
  jobList: [
    {
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
    }
  ];
}

const PostNewJob: React.FC<PostNewJobProps> = ({
  user,
  profileInfo,
  jobList,
}) => {
  // console.log(profileInfo);
  const [showJobDialog, setShowJobDialog] = useState(false);
  const [jobFormData, setJobFormData] = useState<{
    [key: string]: string | File;
  }>({
    ...initialPostNewJobFormData,
    companyName: profileInfo?.recruiterInfo?.companyName,
  });
  // console.log(jobFormData);

  function handlePostNewBtnValid() {
    return Object.keys(jobFormData).every(
      (control) =>
        typeof jobFormData[control] === "string" &&
        jobFormData[control].trim() !== ""
    );
  }

  const handelAddNewJob = () => {
    if (!profileInfo?.isPreminumUser && jobList?.length >= 2) {
      toast("You can post max 2 jobs", {
        description: (
          <p className="text-gray-600">
            Please opt for membership to post more jobs
          </p>
        ),
        action: {
          label: "Try",
          onClick: () => (window.location.href = "/membership"),
        },
      });
      return;
    } else {
      setShowJobDialog(true);
    }
  };

  async function createNewJob() {
    await postNewJobAction(
      {
        ...jobFormData,
        recruiterId: user?.id,
        applicants: [],
      },
      "/jobs"
    );
    setShowJobDialog(false);
    setJobFormData({
      ...initialPostNewJobFormData,
      companyName: profileInfo?.recruiterInfo?.companyName,
    });
  }

  return (
    <div>
      <Button
        onClick={() => handelAddNewJob()}
        className="disabled:opacity-60 flex h-11 items-center justify-center px-5"
      >
        Post A Job
      </Button>
      <Dialog
        open={showJobDialog}
        onOpenChange={() => {
          setShowJobDialog(false);
          setJobFormData({
            ...initialPostNewJobFormData,
            companyName: profileInfo?.recruiterInfo?.companyName,
          });
        }}
      >
        <DialogContent className="sm:max-w-screen-md h-[600px] overflow-auto">
          <DialogHeader>
            <DialogTitle>Post New Job</DialogTitle>
            <div className="grid gap-4 py-4">
              <CommonForm
                buttonText="Add"
                formData={jobFormData}
                setFormData={setJobFormData}
                formControls={PostNewJobFormControls}
                isBtnDisabled={!handlePostNewBtnValid()}
                action={createNewJob}
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostNewJob;
