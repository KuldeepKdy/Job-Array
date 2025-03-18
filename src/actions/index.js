"use server";

import { revalidatePath } from "next/cache";
import connectToDB from "../dabtabase/connectDb";
import Profile from "../models/profile";
import Job from "../models/Job";
import Feed from "../models/feed";
import Application from "../models/application";
import Razorpay from "razorpay";

// to keep supbase server alive
async function keepSupabaseAlive() {
  await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/keepalive`);
}

// Run every 24 hours
setInterval(keepSupabaseAlive, 24 * 60 * 60 * 1000);
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
  if (id) {
    const result = await Job.find({ recruiterId: id });
    return JSON.parse(JSON.stringify(result));
  } else {
    const result = await Job.find({});
    return JSON.parse(JSON.stringify(result));
  }
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

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
//create razorpay price id based on tier selection

export async function createPriceIdAction(Plan) {
  try {
    const orderOptions = {
      amount: Plan * 100, // Amount in paise
      currency: "INR",
      payment_capture: 1,
      // Optionally add a receipt ID if needed
      // receipt: "receipt#1",
      notes: {
        description: "Job Application Fee",
        planName: "Premium Plan",
      },
    };

    const session = await razorpay.orders.create(orderOptions);
    console.log("Order created:", session);

    return {
      success: true,
      id: session?.id,
    };
    // Now session.id will be your payment/order id
  } catch (error) {
    console.error("Error creating order:", error);
    return {
      success: false,
    };
  }
}

// create payment logic

export async function createPaymentAction(price) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const paymentLink = await razorpay.paymentLink.create({
      amount: price * 100, // Amount in paise
      currency: "INR",
      description: "Premium Plan Payment",
      notify: {
        email: true,
        sms: true,
      },
      callback_url: `${process.env.URL}` + "?status=success",
      callback_method: "get",
    });

    return {
      success: true,
      paymentLink: paymentLink?.id,
      shortUrl: paymentLink?.short_url,
    };
  } catch (error) {
    console.error("Payment link generation failed:", error);
    return { success: false, message: "Failed to generate payment link" };
  }
}

//create post action
export async function createFeedPostAction(data, pathToRevalidate) {
  await connectToDB();
  await Feed.create(data);
  revalidatePath(pathToRevalidate);
}

//fetch all posts action
export async function fetchAllFeedPostsAction() {
  await connectToDB();
  const result = await Feed.find({});
  return JSON.parse(JSON.stringify(result));
}

//update post action

export async function updatefeedPostAction(data, pathToRevalidate) {
  await connectToDB();
  const { userId, userName, message, image, likes, _id } = data;
  await Feed.findOneAndUpdate(
    { _id: _id },
    {
      userId,
      userName,
      message,
      image,
      likes,
    },
    { new: true }
  );
  revalidatePath(pathToRevalidate);
}
