import { CheckCircle, MenuSquare } from "lucide-react";

interface featureInterface {
  jobList: {
    _id: string;
    companyName: string;
    title: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    skills: string;
    recruiterId: string;
    applicants: [
      {
        name: string;
        email: string;
        userId: string;
        status: string;
      }
    ];
  }[];
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
const JobsFeatureSection = ({ jobList }: featureInterface) => {
  return (
    <div className="w-full h-fit grid  grid-cols-1 lg:grid-cols-8 gap-6 md:gap-8">
      <div className="bg-white lg:max-h-[80vh] order-3 lg:order-1  shadow-lg lg:col-span-2 sticky top-20 border rounded-xl py-6 px-4 flex flex-col h-full justify-between  ">
        <div className="p-3 bg-white border lg:-rotate-2 flex flex-col lg:sticky lg:top-24  rounded-2xl">
          <div className="w-full flex items-center gap-2">
            <div className="size-12 overflow-hidden border border-gray-100 bg-gray-100  rounded-md">
              <img
                src="/images/cartoq-icon.ico"
                alt=""
                className="w-full h-full object-fill"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-gray-900  text-sm md:text-base  font-medium md:font-semibold lg:font-bold">
                {jobList[0]?.title}
              </h3>
              <div className=" flex gap-1 items-center   text-gray-400 text-xs md:text-sm dark:text-gray-600 ">
                <CheckCircle className="size-3 md:size-4 text-white fill-primary" />
                {jobList[0]?.companyName}
              </div>
            </div>
          </div>
          <div className="flex items-center mt-4 gap-2">
            {jobList[0]?.skills.split(",").map((skill, index) => (
              <div key={index}>
                <span className="text-gray-600 px-2 py-1 rounded-md bg-gray-100 text-xs font-medium dark:text-gray-600 ">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 px-3 bg-white border lg:rotate-2 flex flex-col mt-4 lg:sticky lg:top-24 rounded-2xl">
          <div className="w-full flex items-center gap-2">
            <div className="size-12 overflow-hidden border border-gray-100 bg-gray-100  rounded-md">
              <img
                src="/images/instagram-logo.svg"
                alt=""
                className="w-full h-full object-fill"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-gray-900  text-sm md:text-base  font-medium md:font-semibold lg:font-bold">
                {jobList[16]?.title}
              </h3>
              <div className=" flex gap-1  items-center   text-gray-400 text-xs md:text-sm dark:text-gray-600 ">
                <CheckCircle className="size-3 md:size-4 text-white fill-primary" />
                {jobList[16]?.companyName}
              </div>
            </div>
          </div>
          <div className="flex items-center mt-4 gap-2">
            {jobList[16]?.skills.split(",").map((skill, index) => (
              <div key={index}>
                <span className="text-gray-600 px-2 py-1 rounded-md font-medium bg-gray-100 text-xs  dark:text-gray-600 ">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 bg-white border lg:-rotate-2 flex flex-col mt-4 lg:sticky lg:top-24  rounded-2xl">
          <div className="w-full flex items-center gap-2">
            <div className="size-12 py-0.5 overflow-hidden border border-gray-100 bg-gray-100  rounded-md">
              <img
                src="/images/apple-logo.png"
                alt=""
                className="w-full h-full object-fill"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-gray-900  text-sm md:text-base  font-medium md:font-semibold lg:font-bold">
                {jobList[12]?.title}
              </h3>
              <div className=" flex gap-1 items-center   text-gray-400 text-xs md:text-sm dark:text-gray-600 ">
                <CheckCircle className="size-3 md:size-4 text-white fill-primary" />
                {jobList[12]?.companyName}
              </div>
            </div>
          </div>
          <div className="flex items-center mt-4 gap-2">
            {jobList[12]?.skills.split(",").map((skill, index) => (
              <div key={index}>
                <span className="text-gray-600 px-2 py-1 rounded-md font-medium bg-gray-100 text-xs  dark:text-gray-600 ">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 sticky top-20 bg-white z-10 pt-4">
          <h2 className="font-bold text-gray-900 leading-tight text-xl md:text-2xl md:leading-[1.23] ">
            Personalized Job Recommendations
          </h2>
          <p className="text-gray-600 text-sm md:text-base md:font-medium mt-1">
            Say goodbye to tedious job searches and endless scrolling.
          </p>
        </div>
      </div>
      <div className="bg-white lg:max-h-[80vh] order-2   shadow-lg lg:col-span-4 border sticky top-20 rounded-xl py-6 px-4 flex flex-col ">
        <div className="">
          <h2 className="font-bold text-gray-900 leading-tight text-xl  md:text-3xl  ">
            User-friendly and intuitive interface both easy to use and intuitive
          </h2>
          <p className="text-gray-600 text-sm md:text-base md:font-medium mt-2">
            You can focus on what matters most - finding the right apportunity
            to propel your career forward.
          </p>
        </div>
        <div className="w-full h-fit">
          <img
            src="/images/jobsPageMocup.png"
            alt="jobsPageMocup"
            className="w-full h-full scale-125 lg:scale-[1.4] lg:-translate-y-2 "
          />
        </div>
      </div>
      <div className="bg-white lg:max-h-[80vh] order-1 lg:order-3  shadow-lg lg:col-span-2 border sticky top-20 rounded-xl py-6 px-4 flex flex-col gap-4">
        <div className="border w-full h-full rounded-2xl flex flex-col overflow-hidden">
          <div className="p-4 border-b font-semibold text-lg text-gray-900">
            Filters
          </div>
          <div className="p-4 ">Adding Data Soon...</div>
          {/* <div className="p-4 border-b w-full h-fit overflow-hidden ">
            <img
              src="/images/jobFilters.png"
              alt="jobFilters"
              className="lg:scale-x-[1.4] w-full h-full lg:scale-y-150 lg:-translate-x-1 scale-125 "
            />
          </div>
          <div className="p-4 border-b overflow-hidden">
            <img
              src="/images/filtersBar.png"
              alt="jobFilters"
              className="scale-x-110 scale-y-125"
            />
          </div> */}
          <div className=" p-4 w-fit h-fit mt-auto flex overflow-x-scroll gap-2 no-scrollbar ">
            {[
              "Software Tester",
              "Frontend Developer",
              "Tester",
              "UI/UX Designer",
            ].map((title) => (
              <button
                key={title}
                className={` ${
                  title == "Software Tester"
                    ? "text-white bg-primary dark:bg-primary-foreground"
                    : "text-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary-foreground dark:hover:text-white"
                } px-3  py-2 flex hover:bg-primary   whitespace-nowrap items-center rounded-full gap-2 transition-all duration-200 ease-linear  border border-gray-200 `}
              >
                <MenuSquare className="size-4" />
                <p className=" text-sm font-medium">{title}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <h2 className="font-bold text-gray-900 leading-tight text-xl md:text-2xl md:leading-[1.23] ">
            Advanced Job Filters Options
          </h2>
          <p className="text-gray-600 text-sm md:text-base md:font-medium mt-2">
            You can save time and focus your efforts on the opportunities that
            align with your career goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobsFeatureSection;
