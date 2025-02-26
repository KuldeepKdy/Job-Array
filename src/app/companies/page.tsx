import { fetchProfileAction } from "@/actions";
import Companies from "@/components/companies/Companies";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export const CompaniesPage = async() => {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id)
  if (!profileInfo) redirect("/onboard") 
  return <Companies />;
};
