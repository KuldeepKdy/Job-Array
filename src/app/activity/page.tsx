import {
  fetchJobApplicationForCandidateAction,
  fetchJobsForCandidateAction,
} from "@/actions";
import CandidateActivity from "@/components/activity/CandidateActivity";
import { currentUser } from "@clerk/nextjs/server";

export default async function Activity() {
  const user = await currentUser();
  const jobList = await fetchJobsForCandidateAction();
  const jobApplications = await fetchJobApplicationForCandidateAction(user?.id);
  return (
    <CandidateActivity jobList={jobList} jobApplicants={jobApplications} />
  );
}
