import { fetchProfileAction } from "@/actions";
import MemberShip from "@/components/membership/MemberShip";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const MembershipPage = async () => {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);
  if (!profileInfo) redirect("/onboard");

  return <MemberShip profileInfo={profileInfo} />;
};

export default MembershipPage;
