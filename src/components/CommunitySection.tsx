import JobMiniCard from "./jobs-listing/JobMiniCard";
import { Button } from "./ui/button";

const CommunitySection = () => {
  return (
    <div className="w-full h-fit grid relative md:grid-cols-7 items-center  gap-6 py-6 px-6  lg:py-12 lg:px-12 bg-primary rounded-xl">
      <div className="w-full flex flex-col md:col-span-5 gap-4 lg:gap-6">
        <h1 className="font-medium text-2xl lg:text-3xl leading-normal text-white">
          Join our community of ambitious professionals today and unlock the
          doors to your dream carrer.
        </h1>
        <p className="text-white text-sm lg:text-base w-full lg:w-[70%] leading-relaxed">
          Unlock your true potential and discover a world of opportunities that
          align with your skills, interests, and aspirations
        </p>
        <Button className="flex h-11 text-sm  mt-4 lg:mt-0 hover:bg-white hover:text-primary  w-fit bg-black text-white items-center   font-medium  justify-center px-5">
          Get started now
        </Button>
      </div>
      <div className="  flex-col hidden md:flex absolute right-16   col-span-2 items-center gap-6">
       
        <div className="translate-x-10 -rotate-3">
          <JobMiniCard />
        </div>
        <div className="-translate-x-32 rotate-3">
          <JobMiniCard />
        </div>
        <div className="-rotate-3">
          <JobMiniCard />
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
