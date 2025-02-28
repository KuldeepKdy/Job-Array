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
      {/* <HeroSection /> */}
      {/* <div className="bg-white relative pl-4">
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
      </div> */}
      <section className="relative w-full h-full min-h-screen pb-10">
        <div className="w-full h-full relative">
          <div className="flex flex-col-reverse lg:flex-row gap-10 mt-16">
            <section className="w-full lg:w-[50%] flex flex-col md:px-2 lg:px-0 p-5 lg:p-10">
              <div className="w-full flex justify-start flex-col h-auto lg:pt-7">
                <div className="flex space-x-2">
                  <span className="block w-14 mb-2 border-b-2 border-gray-700"></span>
                  <span className="font-medium text-gray-600 ">
                    One Stop Solution to find Jobs
                  </span>
                </div>
                <h1 className="text-3xl mt-5 lg:text-7xl text-black font-extrabold">
                  Build your best community starting from here.{" "}
                </h1>
                <div className="w-full mt-6 flex items-center text-white justify-start gap-2">
                  <HomePageButtons
                    user={JSON.parse(JSON.stringify(user))}
                    profileInfo={profileInfo}
                  />
                </div>
              </div>
            </section>
            <section className=" relative w-full lg:w-[50%] flex items-center justify-end">
              <div className="grid grid-cols-3 grid-rows-5 gap-4 w-full h-full">
                <div className="row-span-2">1</div>
                <div className="row-span-3 col-start-2 row-start-2">2</div>
                <div className="row-span-2 col-start-1 row-start-4">5</div>
                <div className="row-span-5 col-start-3 row-start-1">8</div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
