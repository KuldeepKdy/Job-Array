import { desVariants, tagVariants, titleVariants } from "@/utils/animations";
import JobMiniCard from "./jobs-listing/JobMiniCard";
import AnimatedComponent from "./ui/AnimatedComponent";
import { Button } from "./ui/button";

const CommunitySection = () => {
  return (
    <div className="w-full h-fit grid relative md:grid-cols-7 items-center  gap-6 py-6 px-6  lg:py-12 lg:px-12 bg-primary rounded-xl">
      <div className="w-full flex flex-col md:col-span-5 gap-4 ">
        <h1 className="font-medium dark:text-primary-foreground text-2xl lg:text-3xl leading-normal text-white">
          Join our community of ambitious professionals today and unlock the
          doors to your dream carrer.
        </h1>
        <p className="text-white dark:text-gray-500 text-sm md:text-base md:font-medium w-full lg:w-[70%] leading-relaxed">
          Unlock your true potential and discover a world of opportunities that
          align with your skills, interests, and aspirations
        </p>
        <Button className="flex h-11 text-sm  mt-4  hover:bg-white hover:text-primary dark:hover:bg-primary-foreground dark:hover:text-white  w-fit bg-black text-white items-center   font-medium  justify-center px-5">
          Get started now
        </Button>
      </div>
      <div className="  flex-col hidden md:flex absolute right-16   col-span-2 items-center gap-6">
        <div className="translate-x-10 -rotate-3">
          <AnimatedComponent
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          >
            <JobMiniCard />
          </AnimatedComponent>
        </div>
        <div className="-translate-x-32 rotate-3">
          <AnimatedComponent
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className=""
          >
            <JobMiniCard />
          </AnimatedComponent>
        </div>
        <div className="-rotate-3">
          <AnimatedComponent
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <JobMiniCard />
          </AnimatedComponent>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
