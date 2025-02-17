import { fetchProfileAction } from "@/actions";
import HeroSection from "@/components/HeroSection";
import HomePageButtons from "@/components/HomePageButtons";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Home() {
  const user = await currentUser();
  // console.log(user, "Current User");
  const profileInfo = await fetchProfileAction(user?.id);

  if (user && !profileInfo?._id) redirect("/onboard");

  return (
    <>
      <HeroSection />
      <div className="bg-white relative pl-4">
        <div className=" relative  w-full">
          <div className="min-h-screen flex ">
            <div className="container mx-auto mt-20 p-0">
              <div className="flex items-center flex-wrap gap-12 lg:gap-0">
                <div className="lg:w-6/12 space-y-8">
                  <div className="flex space-x-2">
                    <span className="block w-14 mb-2 border-b-2 border-gray-700"></span>
                    <span className="font-medium text-gray-600 ">
                      One Stop Solution to find Jobs
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold md:text-6xl">
                    The Best <br /> Job Portal App
                  </h1>
                  <p className="text-xl text-gray-700">
                    Find Best Jobs From Top Product Based Companies and Build
                    Your Career
                  </p>
                  <HomePageButtons
                    user={JSON.parse(JSON.stringify(user))}
                    profileInfo={profileInfo}
                  />
                </div>
                <div className="hidden relative md:flex  lg:w-6/12 h-fit   overflow-hidden ">
                  <div className="aspect-[16/10] ml-auto">
                    <img
                      src="/images/money.png"
                      alt="Job Partal"
                      className="relative  w-full h-full object-contain "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
