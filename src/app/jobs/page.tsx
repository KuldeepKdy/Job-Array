import { fetchJobsForRecruiterAction, fetchProfileAction } from "@/actions";
import JobListing from "@/components/jobs-listing/page";
import { currentUser } from "@clerk/nextjs/server";

const JobsPage = async () => {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);
  const jobList = await fetchJobsForRecruiterAction(user?.id);

  console.log(jobList, "Job List");
  return (
    <JobListing
      user={JSON.parse(JSON.stringify(user))}
      profileInfo={profileInfo}
      jobList={jobList}
    />
  );
};

export default JobsPage;
