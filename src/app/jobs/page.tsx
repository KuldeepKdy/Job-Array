import { fetchProfileAction } from "@/actions";
import JobListing from "@/components/jobs-listing/page";
import { currentUser } from "@clerk/nextjs/server";

const JobsPage = async () => {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);
  return (
    <JobListing
      user={JSON.parse(JSON.stringify(user))}
      profileInfo={profileInfo}
    />
  );
};

export default JobsPage;
