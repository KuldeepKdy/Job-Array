import { CheckCircle } from "lucide-react";

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
const JobsFeatureSection = ({ jobList, profileInfo }: featureInterface) => {
  return (
    <div className="w-full h-fit grid grid-cols-1 md:grid-cols-8 gap-6 md:gap-8">
      <div className="bg-white shadow-lg md:col-span-2 border rounded-xl py-6 px-4 flex flex-col ">
        <div className="p-3 bg-white border -rotate-2 flex flex-col sticky top-24 border-gray-100 rounded-2xl">
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
        <div className="p-3 px-3 bg-white border rotate-2 flex flex-col mt-4 sticky top-24 border-gray-100 rounded-2xl">
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
        <div className="p-3 bg-white border -rotate-2 flex flex-col mt-4 sticky top-24 border-gray-100 rounded-2xl">
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

        <div className="flex flex-col gap-1 sticky top-20 bg-white pt-4">
          <h2 className="font-bold text-gray-900 leading-tight text-xl md:text-2xl md:leading-[1.23] ">
            Personalized Job Recommendations
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            Say goodbye to tedious job searches and endless scrolling.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg md:col-span-4 border rounded-xl py-6 px-4 flex flex-col gap-4"></div>
      <div className="bg-white shadow-lg md:col-span-2 border rounded-xl py-6 px-4 flex flex-col gap-4"></div>
    </div>
  );
};

export default JobsFeatureSection;
