import { CheckCircle, ThumbsUpIcon } from "lucide-react";
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
    <div className=" flex justify-center  w-full h-fit pt-14 ">
      {/* left side  */}
      <div className="w-full flex flex-col gap-4 max-w-[20%]">
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
          <div className="rounded-3xl   shadow-lg w-[70%]  gap-2  flex flex-col items-center justify-center border border-gray-200 p-4">
            <h2 className="text-gray-900 text-sm font-medium">
              Complete your profile
            </h2>
            <div className="h-4 w-full rounded-sm overflow-hidden mt-1 bg-gray-200">
              <div className="bg-primary h-full w-[20%]"></div>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-xs text-green-500">2 of 10 data</p>
              <CheckCircle className="stroke-green-500 size-3" />
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mt-1">
              Complete your profile now and let us help you navigate
            </p>
          </div>
        </div>
        <div className="-left-8 w-full relative">
          <div className="w-[60%] aspect-square ">
            <img
              src="/images/person4.jpg"
              alt="person1"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
      {/* center side  */}
      <div className="flex w-full  flex-col  relative items-center max-w-[60%]">
        {/* Placing  */}
        <div className="w-fit flex items-center justify-center py-1 px-3 gap-2 rounded-full bg-gray-100 border border-primary ">
          <ThumbsUpIcon className="size-4 mb-0.5" />
          <p className="text-sm font-medium">#1 Top greatest on Product Hunt</p>
        </div>
        {/* Headline  */}
        <h1 className="text-gray-900 font-[600] text-6xl mt-6 leading-[1.4]    text-center  ">
          Supporting Job Seekers Every Step of the Way
        </h1>
        {/* Headline para  */}
        <p className="text-base text-gray-600 leading-relaxed text-center mt-4 max-w-[80%]">
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
      <div className="w-full flex flex-col gap-4 max-w-[20%]">
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
          <div className="rounded-3xl   shadow-lg w-[70%]  gap-2  flex flex-col items-center justify-center border border-gray-200 p-4">
            <h2 className="text-gray-900 text-sm font-medium">
              Complete your profile
            </h2>
            <div className="h-4 w-full rounded-sm overflow-hidden mt-1 bg-gray-200">
              <div className="bg-primary h-full w-[20%]"></div>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-xs text-green-500">2 of 10 data</p>
              <CheckCircle className="stroke-green-500 size-3" />
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mt-1">
              Complete your profile now and let us help you navigate
            </p>
          </div>
        </div>
        <div className="-left-20 w-full relative">
          <div className="w-[60%] aspect-square ">
            <img
              src="/images/person1.jpg"
              alt="person1"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
