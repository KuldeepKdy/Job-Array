import { CheckCircle, Flag, ThumbsUpIcon, Users } from "lucide-react";
import HomePageButtons from "../HomePageButtons";

interface PostNewJobProps {
  user: {
    id: string;
  } | null;
  profileInfo: {
    userId: string;
    role: string;
    email: string;
    isPreminumUser: boolean;
    memberShipType: string;
    memberShipStartDate: string;
    memberShipEndDate: string;
    recruiterInfo: {
      name: string;
      companyName: string;
      companyRole: string;
    };
    candidateInfo: {
      name: string;
      currentJobLocation: string;
      preferedJobLocation: string;
      currentSalary: string;
      noticePeriod: string;
      skills: string;
      currentCompany: string;
      previousCompanies: string;
      totalExperience: string;
      college: string;
      collageLocation: string;
      graduatedYear: string;
      linkedinProfile: string;
      githubProfile: string;
      resume: string;
    };
  };
}
const HomeHero = ({ user, profileInfo }: PostNewJobProps) => {
  return (
    <div className=" flex justify-center lg:px-8  w-full h-fit pt-14 ">
      {/* left side  */}
      <div className="w-full hidden lg:flex flex-col gap-4 lg:max-w-[20%]">
        <div className="-left-8 w-full relative">
          <div className="w-[60%] aspect-square ">
            <img
              src="/images/person3.jpg"
              alt="person1"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>
        </div>
        <div className=" w-full relative -right-8 flex items-center justify-end">
          {profileInfo?.role ? (
            <div className="rounded-3xl z-30 bg-white dark:bg-gray-50  shadow-lg w-[70%]  gap-2  flex flex-col  border border-gray-200 p-4">
              <h2 className="text-gray-900 text-sm font-medium">
                Profile Completed
              </h2>
              <div className="h-4 w-full rounded-sm overflow-hidden mt-1 bg-gray-200">
                <div className="bg-primary h-full dark:bg-primary-foreground w-[100%]"></div>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="text-xs text-green-500">10 of 10 data</p>
                <CheckCircle className="stroke-green-500 size-3" />
              </div>
              <p className="text-gray-600 text-xs leading-relaxed mt-1">
                {profileInfo?.role == "candidate"
                  ? "Now you can easily apply for job posts with enjoyable experience"
                  : "Now you can easily post jobs with enjoyable experience"}
              </p>
            </div>
          ) : (
            <div className="rounded-3xl z-30 bg-white dark:bg-gray-50   shadow-lg w-[70%]  gap-2  flex flex-col border border-gray-200 p-4">
              <h2 className="text-gray-900 text-sm font-medium">
                Complete your profile
              </h2>
              <div className="h-4 w-full rounded-sm overflow-hidden mt-1 bg-gray-200">
                <div className="bg-primary h-full w-[0%]"></div>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="text-xs text-green-500">0 of 10 data</p>
                <CheckCircle className="stroke-green-500 size-3" />
              </div>
              <p className="text-gray-600 text-xs leading-relaxed mt-1">
                Complete your profile now and let us help you navigate
              </p>
            </div>
          )}
        </div>
        <div className="-left-8 w-full relative">
          <div className="w-[60%]  aspect-square ">
            <img
              src="/images/person4.jpg"
              alt="person1"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
      {/* center side  */}
      <div className="flex w-full  flex-col  relative items-center  lg:max-w-[60%]">
        {/* Placing  */}
        <div
          className={`
        inline-flex items-center  px-4 py-1.5 rounded-full cursor-pointer blue
        bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200
        transition-all duration-300 ease-in-out
       hover:shadow-md hover:transform hover:scale-105 shadow-sm
        hover:ring-2 hover:ring-amber-200/50
      `}
        >
          <ThumbsUpIcon className="w-4 h-4 mr-2 text-amber-500" />
          <p className="text-sm font-medium text-amber-800">
            #1 Greatest on Product Hunt
          </p>
        </div>
        {/* Headline  */}
        <h1 className="text-gray-900 font-[600] dark:text-white text-4xl leading-snug lg:text-6xl mt-8 lg:leading-[1.3]    text-center  ">
          Supporting Job Seekers Every Step of the Way
        </h1>
        {/* Headline para  */}
        <p className=" text-sm  md:font-medium leading-relaxed  md:text-base dark:text-gray-50  text-gray-600 text-center mt-4 max-w-[80%]">
          Unlock your true potential and discover a world of opportunities that
          align with your skills, interests, and aspirations
        </p>
        {/* Redired Button  */}
        <div className="mt-8">
          <HomePageButtons
            user={JSON.parse(JSON.stringify(user))}
            profileInfo={profileInfo}
          />
        </div>
      </div>
      {/* right side  */}
      <div className="w-full hidden lg:flex flex-col gap-4 lg:max-w-[20%]">
        <div className=" w-full relative">
          <div className="w-[60%] aspect-square ">
            <img
              src="/images/person6.jpg"
              alt="person1"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>
        </div>
        <div className=" w-full relative -right-8 flex items-center justify-end">
          <div className="w-[70%] aspect-square ">
            <img
              src="/images/person1.jpg"
              alt="person1"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>
        </div>
        <div className="-left-20 w-full z-30 relative">
          {user ? (
            profileInfo?.role === "candidate" ? (
              <div className="rounded-3xl  bg-white dark:bg-gray-50   shadow-lg  w-fit flex flex-col border border-gray-200 p-4">
                <div className="w-fit border border-gray-100 dark:bg-primary-foreground p-2 rounded-md ">
                  <Flag />
                </div>
                <h2 className="text-gray-900 mt-2 text-sm font-medium">
                  Product Designer
                </h2>
                <div
                  // initial="offscreen"
                  // whileInView={"onscreen"}
                  // variants={titleVariants}
                  className=" flex gap-1 items-center mt-1  text-gray-400 text-xs "
                >
                  Pintrest
                  <CheckCircle className="size-3 fill-primary" />
                </div>
                <div className="flex w-full gap-2 mt-3">
                  <div className="bg-gray-100 text-gray-600 py-1 px-2  rounded-md text-xs">
                    UI Desig
                  </div>
                  <div className="bg-gray-100 text-gray-600 py-1 px-2  rounded-md text-xs">
                    Full time
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl  bg-white dark:bg-gray-50  shadow-lg  w-fit flex flex-col border border-gray-200 p-4">
                <div className="w-fit border border-gray-100 dark:bg-primary-foreground p-2 rounded-md ">
                  <Flag />
                </div>
                <h2 className="text-gray-900 mt-2 text-sm font-medium">
                  Product Designer
                </h2>
                <div
                  // initial="offscreen"
                  // whileInView={"onscreen"}
                  // variants={titleVariants}
                  className=" flex gap-1 items-center mt-1  text-gray-400 text-xs "
                >
                  X Applicants
                  <Users className="size-3 fill-primary stroke-primary" />
                </div>
                <div className="flex w-full gap-2 mt-3">
                  <div className="bg-gray-100 text-gray-600 py-1 px-2  rounded-md text-xs">
                    UI Desig
                  </div>
                  <div className="bg-gray-100 text-gray-600 py-1 px-2  rounded-md text-xs">
                    Full time
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="rounded-3xl  shadow-lg dark:bg-gray-50 w-fit flex flex-col border border-gray-200 p-4">
              <div className="w-fit border dark:bg-primary-foreground border-gray-100 p-2 rounded-md ">
                <Flag />
              </div>
              <h2 className="text-gray-900 mt-2 text-sm font-medium">
                Product Designer
              </h2>
              <div
                // initial="offscreen"
                // whileInView={"onscreen"}
                // variants={titleVariants}
                className=" flex gap-1 items-center mt-1  text-gray-400 text-xs "
              >
                Pintrest
                <CheckCircle className="size-3 fill-primary " />
              </div>
              <div className="flex w-full gap-2 mt-3">
                <div className="bg-gray-100 text-gray-600 py-1 px-2  rounded-md text-xs">
                  UI Desig
                </div>
                <div className="bg-gray-100 text-gray-600 py-1 px-2  rounded-md text-xs">
                  Full time
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
