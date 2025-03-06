import { ThumbsUpIcon } from "lucide-react";
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
    <div className=" flex justify-center  min-h-screen pt-14 ">
      {/* left side  */}
      <div className="w-full max-w-[20%]">
        <div>
          <img
            src="/images/person1.jpg"
            alt="person1"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
        <div>{/* card  */}</div>
        <div>
          <img
            src="/images/person1.jpg"
            alt="person1"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
      </div>
      {/* center side  */}
      <div className="flex w-full flex-col relative items-center max-w-[60%]">
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
        <p className="text-base text-gray-400 text-center mt-4 max-w-[80%]">
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
      <div className="w-full max-w-[20%]"></div>
    </div>
  );
};

export default HomeHero;
