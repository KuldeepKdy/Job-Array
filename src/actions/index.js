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
export async function fetchJobsForCandidateAction(filterParams) {
  await connectToDB();
  if (filterParams) {
    let updatedParams = {};
    Object.keys(filterParams).forEach((filterKey) => {
      updatedParams[filterKey] = { $in: filterParams[filterKey].split(",") };
    });
    console.log(updatedParams, "Updated params");
    const result = await Job.find(
      filterParams && Object.keys(filterParams).length > 0 ? updatedParams : {}
    );
    return JSON.parse(JSON.stringify(result));
  } else {
    const result = await Job.find({});
    return JSON.parse(JSON.stringify(result));
  }
}

// create job application

export async function createJobApplicationAction(data, pathToRevalidate) {
  await connectToDB();

  // console.log(data, "Action data");
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

export async function updateJobApplicationAction(data, pathToRevalidate) {
  await connectToDB();
  const {
    recruiterUserID,
    name,
    email,
    candidateUserID,
    status,
    jobID,
    _id,
    JobAppliedDate,
  } = data;
  await Application.findOneAndUpdate(
    { _id: _id },
    {
      recruiterUserID,
      name,
      email,
      candidateUserID,
      status,
      jobID,
      JobAppliedDate,
    },
    { new: true }
  );
  revalidatePath(pathToRevalidate);
}

//get candidiate details by candidate id

export async function fetchCandidateDetailsByIDAction(currentCandidateID) {
  await connectToDB();
  const result = await Profile.findOne({ userId: currentCandidateID });
  return JSON.parse(JSON.stringify(result));
}

// create filter categories action
export async function createFilterCategoriesAction() {
  await connectToDB();
  const result = await Job.find({});
  return JSON.parse(JSON.stringify(result));
}

//Update Profile Action

export async function updateProfileAction(data, pathToRevalidate) {
  await connectToDB();
  const {
    userId,
    role,
    email,
    isPreminumUser,
    memberShipType,
    memberShipStartDate,
    memberShipEndDate,
    recruiterInfo,
    candidateInfo,
    _id,
  } = data;
  await Profile.findOneAndUpdate(
    { _id: _id },
    {
      userId,
      role,
      email,
      isPreminumUser,
      memberShipType,
      memberShipStartDate,
      memberShipEndDate,
      recruiterInfo,
      candidateInfo,
    },
    { new: true }
  );

  revalidatePath(pathToRevalidate);
}


//create stripe price id based on tier selection 

export async function createPriceIdAction(data) {
  
}