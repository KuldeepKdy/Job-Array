import {
  createFilterCategoriesAction,
  fetchJobApplicationForCandidateAction,
  fetchJobApplicationsForRecruiterAction,
  fetchJobsForCandidateAction,
  fetchJobsForRecruiterAction,
  fetchProfileAction,
} from "@/actions";
import JobListing from "@/components/jobs-listing/page";
import { currentUser } from "@clerk/nextjs/server";

const JobsPage = async () => {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);
  const jobList =
    profileInfo?.role === "candidate"
      ? await fetchJobsForCandidateAction()
      : await fetchJobsForRecruiterAction(user?.id);

  const getJobApplicationList =
    profileInfo?.role === "candidate"
      ? await fetchJobApplicationForCandidateAction(user?.id)
      : await fetchJobApplicationsForRecruiterAction(user?.id);

  const fetchFilterCategories = await createFilterCategoriesAction();

  // console.log(fetchFilterCategories, "fetch Categories");
  // console.log(getJobApplicationList, "Job Applications list");
  return (
    <JobListing
      user={JSON.parse(JSON.stringify(user))}
      profileInfo={profileInfo}
      jobList={jobList}
      jobApplications={getJobApplicationList}
      filterCategories={fetchFilterCategories}
    />
  );
};

export default JobsPage;
