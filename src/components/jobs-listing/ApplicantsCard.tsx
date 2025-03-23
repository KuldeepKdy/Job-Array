import { Users } from "lucide-react";

interface ApplicantsCardProps {
  icon: React.ReactNode;
  data: {
    _id: string;
    recruiterId: string;
    title: string;
    companyName: string;
    description: string;
    location: string;
    experience: string;
    skills: string;
    type: string;
  };
  footerContent: React.ReactNode;
  cardBg?: string;
}

const ApplicantsCard = ({
  icon,
  data,
  footerContent,
  cardBg,
}: ApplicantsCardProps) => {
  return (
    <div
      className={` ${
        cardBg ? cardBg : "bg-white"
      } group p-4 flex flex-col shadow-md  gap-2 hover:bg-white hover:-translate-y-1  hover:shadow-lg hover:shadow-gray-600/10 transition-all duration-200 ease-linear border border-gray-100  rounded-lg `}
    >
      <div className="w-fit border bg-white group-hover:bg-gray-100  p-2 rounded-md ">
        {icon}
      </div>
      <h2 className="text-gray-900 mt-2 text-sm font-medium">{data?.title}</h2>
      <div className="flex w-full gap-2 mt-2">
        {data?.skills?.split(",").map((skill, index) => (
          <div
            key={index}
            className=" bg-white group-hover:bg-gray-100 text-gray-600 py-1 px-2  rounded-md text-xs"
          >
            {skill}
          </div>
        ))}
      </div>
      <>{footerContent}</>
      {/* <div className=" flex gap-1 items-center mt-1  text-gray-400 text-xs ">
        X Applicants
        <Users className="size-3 fill-primary stroke-primary" />
      </div> */}
    </div>
  );
};

export default ApplicantsCard;
