import { fetchProfileAction } from "@/actions";
import Feed from "@/components/feed/Feed";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const FeedPage = async () => {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);
  if (!profileInfo) redirect("/onboard");
  return (
    <Feed user={JSON.parse(JSON.stringify(user))} profileInfo={profileInfo} />
  );
};

export default FeedPage;
