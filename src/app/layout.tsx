import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { ClerkProvider } from "@clerk/nextjs";
import CommonLayout from "@/components/common-layout/CommonLayout";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job Array - Your Gateway to Career Success",
  description:
    "Job Junction is the premier job board platform connecting top talent with leading companies. Explore exciting opportunities, streamline your job search, and unlock your career potential with our intuitive, user-friendly experience.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${montserrat.className} scroll-smooth antialiased`}>
          <Suspense fallback={<Loading />}>
            <CommonLayout attribute="class" defaultTheme="system">
              {children}
            </CommonLayout>
          </Suspense>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
