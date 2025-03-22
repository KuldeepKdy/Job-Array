import { BadgeIcon, CheckCircle, Locate } from "lucide-react";

interface JobData {
  _id: string;
  title: string;
  companyName: string;
  description: string;
  location: string;
  type: string;
}

interface JobCardProps {
  data: JobData;
  role?: string;
  footerContent?: React.ReactNode;
  cardBg?: string;
}

const JobCard = ({ data, footerContent, cardBg }: JobCardProps) => {
  return (
    <div
      className={` ${
        cardBg ? cardBg : "bg-white"
      } p-4 flex flex-col shadow-md  hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-gray-600/10 transition-all duration-200 ease-linear gap-2 border border-gray-100  rounded-lg `}
    >
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex flex-col">
          <h3 className="text-gray-900 font-semibold text-sm">{data?.title}</h3>
          <div className=" flex gap-1 items-center mt-2  text-gray-400 text-xs ">
            <CheckCircle className="size-3 fill-primary" />
            {data?.companyName}
          </div>
        </div>
        <div></div>
      </div>
      <p className="line-clamp-2 text-gray-600 text-xs my-2">
        {data?.description}
      </p>
      <div className=" w-full flex items-center justify-between">
        <div className=" flex gap-1 items-center  text-green-500 text-xs font-medium">
          <Locate className="size-3 " />
          {data?.location}
        </div>
        <div className=" flex gap-1 items-center  text-green-500 text-xs font-medium">
          <BadgeIcon className="size-3 " />
          {data?.type}
        </div>
      </div>
      <>{footerContent}</>
    </div>
  );
};

export default JobCard;
