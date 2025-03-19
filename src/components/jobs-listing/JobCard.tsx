"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { titleVariants } from "@/utils/animations";
import { BadgeIcon, CheckCircle, Locate } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
  role: string;
}

const JobCard = ({ data, role }: JobCardProps) => {
  const router = useRouter();
  return (
    <div className="p-4 flex flex-col gap-2 border border-gray-100 bg-white rounded-lg">
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex flex-col">
          <h3 className="text-gray-900 font-semibold text-sm">{data?.title}</h3>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className=" flex gap-1 items-center mt-2  text-gray-300 text-xs "
          >
            <CheckCircle className="size-3 fill-primary" />
            {data?.companyName}
          </motion.div>
        </div>
        <div></div>
      </div>
      <p className="line-clamp-2 text-gray-600 text-xs my-2">
        {data?.description}
      </p>
      <div className=" w-full flex items-center justify-between">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className=" flex gap-1 items-center  text-green-400 text-xs font-medium"
        >
          <Locate className="size-3 " />
          {data?.location}
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className=" flex gap-1 items-center  text-green-400 text-xs font-medium"
        >
          <BadgeIcon className="size-3 " />
          {data?.type}
        </motion.div>
      </div>
      <Button
        onClick={() =>
          role === "candidate"
            ? router.push("/jobs")
            : toast(
                <div className="text-red-600">
                  Login as candidate to see more details
                </div>,
                {
                  description: (
                    <p className="text-gray-600">
                      You loged as a recruiter. Please login as candidate to see
                      more details of the job posting.
                    </p>
                  ),
                  action: {
                    label: <span className="text-red-600">Try</span>,
                    onClick: () => (window.location.href = "/jobs"),
                  },
                }
              )
        }
        className="flex  mt-4 items-center w-full text-xs  justify-center px-5"
      >
        Apply now
      </Button>
    </div>
  );
};

export default JobCard;
