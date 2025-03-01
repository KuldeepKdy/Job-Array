import { ReactNode } from "react";
import { Attribute } from "next-themes";
import Header from "../header/Header";
import { fetchProfileAction } from "@/actions";
import { currentUser } from "@clerk/nextjs/server";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const CommonLayout = async ({
  children,
  attribute,
  defaultTheme,
}: {
  children: ReactNode;
  attribute?: Attribute | Attribute[];
  defaultTheme: string;
}) => {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  return (
    <NextThemesProvider attribute={attribute} defaultTheme={defaultTheme}>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        {/* Header Component  */}
        <Header
          profileInfo={profileInfo}
          user={JSON.parse(JSON.stringify(user))}
        />
        {/* main Component  */}
        <main>{children}</main>
      </div>
    </NextThemesProvider>
  );
};

export default CommonLayout;
