"use client";
import { titleVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import TestimonialCard from "./jobs-listing/TestimonialCard";
const TestimonialsSection = () => {
  const router = useRouter();
  return (
    <div className=" w-full h-fit flex-col flex lg:flex-row gap-10 lg:gap-32 items-center">
      <div className="flex flex-col w-full h-fit  justify-center ">
        <motion.h3
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className=" flex gap-1 items-center  text-primary text-xs font-medium"
        >
          <MessageSquare className="size-3.5 stroke-primary" />
          Testiminial
        </motion.h3>
        <h2 className="font-semibold dark:text-white text-gray-900 leading-snug text-2xl lg:text-4xl mt-4">
          Reviews of people who get jobs using Job Array
        </h2>
        <p className=" text-sm md:text-base md:font-medium  dark:text-gray-50  text-gray-600 mt-4 leading-relaxed">
          Unlock your true potential and discover a world of apportunities that
          align with your skills, interests, and aspirations
        </p>
        <Button
          onClick={() => router.push("/jobs")}
          className="flex h-11 mt-8 items-center w-fit  justify-center px-5"
        >
          More stories
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 relative  md:grid-cols-2 gap-6">
        {[
          {
            name: "Yash Kumar",
            image: "/images/yashphoto.jpg",
            rating: 5,
            review:
              "Absolutely fantastic service! The team was highly professional, attentive to details, and delivered beyond my expectations. Their dedication and expertise made the entire experience seamless. Highly recommend!",
            position: "Web Developer",
          },
          {
            name: "Raja Yadav",
            image: "/images/rajaphoto.jpg",
            rating: 4,
            review:
              "Great experience working with this team! They communicated well, understood my requirements, and provided exceptional results. The project was delivered on time with outstanding quality. Impressive work!",
            position: "Lead Designer",
          },
          {
            name: "Amit Yadav",
            image: "/images/amitphoto.jpg",
            rating: 3,
            review:
              "Very satisfied with the service. The team was responsive, hardworking, and committed to delivering a great product. A few minor tweaks were needed, but overall, excellent!",
            position: "Team Leader",
          },
          {
            name: "Gajender Yadav",
            image: "/images/krsnaphoto.png",
            rating: 5,
            review:
              "Exceptional service! From start to finish, the process was smooth, and the quality of work exceeded my expectations. A talented team that truly values customer satisfaction!",
            position: "Developer",
          },
        ].map((value, index) => (
          <TestimonialCard key={index} data={value} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
