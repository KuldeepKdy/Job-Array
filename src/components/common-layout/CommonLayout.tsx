import { ReactNode } from "react";
import Header from "../header/Header";
import { fetchProfileAction } from "@/actions";
import { currentUser } from "@clerk/nextjs/server";

const CommonLayout = async ({ children }: { children: ReactNode }) => {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      {/* Header Component  */}
      <Header
        profileInfo={profileInfo}
        user={JSON.parse(JSON.stringify(user))}
      />
      {/* main Component  */}
      <main>{children}</main>
    </div>
  );
};

export default CommonLayout;
