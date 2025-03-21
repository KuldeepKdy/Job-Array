"use client";
import { titleVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import { CheckCircle, Flag } from "lucide-react";

const JobMiniCard = () => {
  return (
    <div className=" bg-gray-50 border border-gray-200 shadow-md rounded-lg p-4 w-fit  flex flex-col gap-4">
      <div className="w-full flex items-center gap-2">
        <Flag className="dark:stroke-primary-foreground" />
        <div>
          <h3 className="text-gray-900 font-medium text-sm">UI/UX Designer</h3>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className=" flex gap-1 items-center mt-1  text-gray-400 text-xs "
          >
            <CheckCircle className="size-3 fill-primary" />
            Pintrest
          </motion.div>
        </div>
      </div>
      <div className="flex w-full gap-2">
        <div className="bg-gray-100 text-gray-600 py-1 px-2  rounded-md text-xs">
          UI Designer
        </div>
        <div className="bg-gray-100 text-gray-600 py-1 px-2  rounded-md text-xs">
          Full time
        </div>
        <div className="bg-gray-100 text-gray-600 py-1 px-2 rounded-md text-xs">
          WFH
        </div>
      </div>
    </div>
  );
};

export default JobMiniCard;
