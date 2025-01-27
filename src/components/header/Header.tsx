"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";

const Header = () => {
  const menuItems = [
    { label: "Home", path: "/", show: true },
    { label: "Login", path: "/sign-in", show: true },
    { label: "Register", path: "/sign-up", show: true },
  ];
  return (
    <div>
      <header className="flex h-16 w-full shrink-0 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden">
              <AlignJustify className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="mr-6 hidden lg:flex" href={"#"}>
              <h3>JOB ARRAY</h3>
            </Link>
            <div className="grid gap-2 py-6">
              {menuItems.map((menuItem) => {
                return menuItem.show ? (
                  <Link
                    key={menuItem.label}
                    href={menuItem.path}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {menuItem.label}
                  </Link>
                ) : null;
              })}
            </div>
          </SheetContent>
        </Sheet>
        <Link href={"/"} className="hidden lg:flex mr-6">
          JOB ARRAY
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6">
          {menuItems.map((menuItem) =>
            menuItem.show ? (
              <Link
                key={menuItem.label}
                href={menuItem.path}
                className="hidden md:flex items-center py-2 px-4 text-lg font-semibold"
              >
                {menuItem.label}
              </Link>
            ) : null
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
