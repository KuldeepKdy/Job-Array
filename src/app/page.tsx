import { fetchProfileAction } from "@/actions";
import AboutSection from "@/components/AboutSection";
import AboutSectionSecond from "@/components/AboutSectionSecond";
import HomeHero from "@/components/header/HomeHero";
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
      {/* <section className="relative w-full h-full md:min-h-screen ">
        <div className="w-full h-full relative">
          <div className="flex flex-col-reverse lg:flex-row gap-6 mt-16">
            <section className="w-full lg:w-[60%] flex flex-col md:px-2 lg:px-0  ">
              <div className="w-full flex justify-start flex-col h-auto lg:pt-7">
                <div className="flex space-x-2">
                  <span className="block w-14 mb-2 dark:border-white border-b-2 border-gray-700"></span>
                  <span className="font-medium dark:text-white  text-gray-600 ">
                    One Stop Solution to find Jobs
                  </span>
                </div>
                <h1 className="text-3xl dark:text-white mt-5 lg:text-7xl text-black font-extrabold">
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
            <section className=" relative w-full lg:w-[40%] flex items-center justify-center">
              <div className="grid grid-cols-7 grid-rows-5  gap-4 md:gap-6 w-full h-[80%]">
                <div className="col-span-2 row-span-2">
                  <img
                    src="/images/person1.jpg"
                    alt="person1"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
                <div className="col-span-2 row-span-2 col-start-1 row-start-4">
                  <img
                    src="/images/person6.jpg"
                    alt="person1"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
                <div className="col-span-3 row-span-3 col-start-3 row-start-2">
                  <img
                    src="/images/person3.jpg"
                    alt="person1"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
                <div className="col-span-2 row-span-2 col-start-6 row-start-1">
                  <img
                    src="/images/person4.jpg"
                    alt="person1"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
                <div className="col-span-2 row-span-2 col-start-6 row-start-4">
                  <img
                    src="/images/person5.jpg"
                    alt="person1"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>

              </div>
            </section>
          </div>
        </div>
      </section> */}
      <div className=" w-full h-fit flex flex-col gap-12 md:gap-24">
        <HomeHero user={user} profileInfo={profileInfo} />
        <AboutSection />
        <AboutSectionSecond />
      </div>
    </>
  );
}

export default Home;
