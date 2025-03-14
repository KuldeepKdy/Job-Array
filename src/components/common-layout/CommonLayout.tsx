import { ReactNode } from "react";
import { Attribute } from "next-themes";
import Header from "../header/Header";
import { fetchProfileAction } from "@/actions";
import { currentUser } from "@clerk/nextjs/server";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Footer from "../Footer";

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
      <div className=" ">
        {/* Header Component  */}
        <Header
          profileInfo={profileInfo}
          user={JSON.parse(JSON.stringify(user))}
        />
        {/* main Component  */}
        <main className="mx-auto px-4 md:px-10 lg:px-24 ">{children}</main>
        <Footer />
      </div>
    </NextThemesProvider>
  );
};

export default CommonLayout;
