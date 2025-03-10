import { Check, CheckCheck } from "lucide-react";
import React from "react";

const AboutSectionSecond = () => {
  return (
    <div className="grid grid-cols-3 w-full h-full  gap-8 flex-wrap">
      <div className=" flex w-full h-[80%] flex-col  justify-center gap-4 rounded-xl shadow-lg border border-gray-200 bg-white  px-6">
        <div className="flex flex-col gap-2 w-[80%]">
          <span className=" px-4 py-2 w-fit rounded-lg leading-relaxed border border-gray-200 text-xs text-gray-600">
            Good Morning
          </span>
          <span className="text-[10px] text-gray-500 leading-snug">
            08:34 AM
          </span>
        </div>
        <div className="flex flex-col w-[80%] gap-2">
          <span className=" px-4 py-2 w-fit rounded-lg leading-relaxed border border-gray-200 text-xs text-gray-600">
            Hii Kuldeep, <br />I am Anjali. I,m a UI/UX Designer at Exact
            Studio. I have a feeling we may have some very interesting work that
            you may be interested in full-time opportunities?
          </span>
          <span className="text-[10px] text-gray-500 leading-snug">
            08:34 AM
          </span>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="flex flex-col w-[80%] gap-2">
            <span className=" px-4 py-2 w-fit rounded-lg border leading-relaxed bg-primary text-white border-gray-200 text-xs ">
              Hii Anjali, Thank you for offering me the position. I appreciate
              your willingeners to discuss the details of the position with me
              and give me to consider your offer.
            </span>
            <span className="text-[10px] text-gray-500 flex gap-0.5">
              <CheckCheck className="stroke-blue-600 size-3.5 leading-snug" />{" "}
              11:12 AM
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[80%] gap-2">
          <span className=" px-4 py-2 w-fit rounded-lg leading-relaxed border border-gray-200 text-xs text-gray-600">
            Your Welcome 👌. So what's you answer for my offer?
          </span>
          <span className="text-[10px] text-gray-500 leading-snug">
            08:34 AM
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col h-[80%] gap-4 items-center relative rounded-xl shadow-lg overflow-hidden border border-gray-200 ">
        <img
          src="/images/AboutImg.avif"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="p-4 flex items-center gap-4 bg-white rounded-xl absolute top-6 left-6 right-6">
          <div className="p-2 rounded-full bg-green-50">
            <div className="p-2 rounded-full bg-green-100">
              <Check className="size-5 stroke-green-400" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-gray-900 text-base leading-snug font-semibold">
              Successfully applied for a job
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Your application is now being carefully reviewed by our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionSecond;
