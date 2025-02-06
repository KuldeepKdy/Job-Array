"use server";

import { revalidatePath } from "next/cache";
import connectToDB from "../dabtabase/connectDb";
import Profile from "../models/profile";

//create profile action
export async function createProfile(formData, pathToRevalidate) {
  await connectToDB();
  await Profile.create(formData);
  revalidatePath(pathToRevalidate);
}
