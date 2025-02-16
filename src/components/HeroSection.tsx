"use client";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-12 absolute inset-0 z-20   w-full max-h-[80vh] ">
        {[...Array(40)].map((_, index) => (
          <div key={index} className="border border-blue-500">
            <motion.div
              animate={{ opacity: 0, scale: 1, transition: { duration: 0.5 } }}
              whileTap={{ scale: 1.5, rotate: 3 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                transition: { duration: 0.05 },
              }}
              className=" h-16 lg:h-20  "
            >
              <img src="/images/image1.jpg" alt="" className="w-full h-full " />
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
