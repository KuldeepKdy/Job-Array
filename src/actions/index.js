"use server";

import { revalidatePath } from "next/cache";
import connectToDB from "../dabtabase/connectDb";
import Profile from "../models/profile";
import Job from "../models/Job";
import Application from "../models/application";

//create profile action
export async function createProfileAction(formData, pathToRevalidate) {
  await connectToDB();
  await Profile.create(formData);
  revalidatePath(pathToRevalidate);
}

export async function fetchProfileAction(id) {
  await connectToDB();
  const result = await Profile.findOne({ userId: id });
  return JSON.parse(JSON.stringify(result));
}

// create job Action
export async function postNewJobAction(formData, pathToRevalidate) {
  await connectToDB();
  await Job.create(formData);
  revalidatePath(pathToRevalidate);
}

// Fetch Job Action
// recruiter
export async function fetchJobsForRecruiterAction(id) {
  await connectToDB();
  const result = await Job.find({ recruiterId: id });
  return JSON.parse(JSON.stringify(result));
}

// candidate
export async function fetchJobsForCandidateAction() {
  await connectToDB();
  const result = await Job.find({});
  return JSON.parse(JSON.stringify(result));
}

// create job application

export async function createJobApplicationAction(data, pathToRevalidate) {
  await connectToDB();
  await Application.create(data);
  revalidatePath(pathToRevalidate);
}

// fetch job application - candidate

export async function fetchJobApplicationForCandidateAction(candidateID) {
  await connectToDB();
  const result = await Application.find({
    candidateUserID: candidateID,
  });
  return JSON.parse(JSON.stringify(result));
}

// fetch job application - recruiter

export async function fetchJobApplicationsForRecruiterAction(recruiterID) {
  await connectToDB();
  const result = await Application.find({
    recruiterUserID: recruiterID,
  });
  return JSON.parse(JSON.stringify(result));
}

// update job application
