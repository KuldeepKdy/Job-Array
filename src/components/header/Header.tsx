"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify, Moon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";

interface HeaderProps {
  user: boolean;
  profileInfo: {
    _id: string;
    name: string;
    email: string;
    picture: string;
    role: string;
  };
}

const Header = ({ user, profileInfo }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  // console.log(typeof user);
  const menuItems = [
    { label: "Home", path: "/", show: true },
    { label: "Feed", path: "/feed", show: profileInfo },
    { label: "Login", path: "/sign-in", show: !user },
    { label: "Register", path: "/sign-up", show: !user },
    {
      label: "Activity",
      path: "/activity",
      show: profileInfo?.role === "candidate",
    },
    // {
    //   label: "Companies",
    //   path: "/companies",
    //   show: profileInfo?.role === "candidate",
    // },
    { label: "Jobs", path: "/jobs", show: profileInfo },
    { label: "Membership", path: "/membership", show: profileInfo },
    { label: "Account", path: "/account", show: profileInfo },
  ];
  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-primary-foreground mx-auto px-4 md:px-10 lg:px-24 ">
      <header className="flex h-16 md:h-20 relative w-full shrink-0 items-center">
        <div className="h-[1px] w-full absolute bottom-0  bg-gradient-to-r from-white via-gray-300 to-white dark:from-primary-foreground dark:via-secondary-foreground dark:to-primary-foreground z-50 "></div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden">
              <AlignJustify className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="mr-6 hidden lg:flex" href={"#"}>
              <h3 className="z-50">JOB ARRAY</h3>
            </Link>
            <div className="grid gap-2 py-6">
              {menuItems.map((menuItem) => {
                return menuItem.show ? (
                  <Link
                    key={menuItem.label}
                    href={menuItem.path}
                    className="flex w-full z-50 items-center py-2 text-lg font-semibold"
                  >
                    {menuItem.label}
                  </Link>
                ) : null;
              })}
              <Moon
                className="cursor-pointer mb-4 z-50"
                fill={theme === "dark" ? "light" : "dark"}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              />
              <UserButton afterSignOutUrl="/" />
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="hidden z-50 font-bold text-3xl lg:flex mr-6">
          JOB ARRAY
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6 items-center">
          {menuItems.map((menuItem) =>
            menuItem.show ? (
              <Link
                key={menuItem.label}
                href={menuItem.path}
                onClick={() => sessionStorage.removeItem("filterParams")}
                className="group inline-flex h-9 z-50 w-max items-center rounded-md  px-4 py-2 text-sm font-medium "
              >
                {menuItem.label}
              </Link>
            ) : null
          )}
          <Moon
            className="cursor-pointer z-50"
            fill={theme === "dark" ? "light" : "dark"}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <div className="z-50">
            <UserButton afterSignOutUrl="/" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
