"use client";
import { Button } from "../ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import CommonForm from "../common-form/page";
import { initialPostNewJobFormData, PostNewJobFormControls } from "@/utils";
import { postNewJobAction } from "@/actions/index";

interface Profileinterface {
  recruiterInfo: { companyName: string };
  _id: string;
  name: string;
}
interface PostNewJobProps {
  user: { id: string; name: string; email: string };
  profileInfo: Profileinterface;
}

const PostNewJob: React.FC<PostNewJobProps> = ({ user, profileInfo }) => {
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
        onClick={() => setShowJobDialog(true)}
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
