"use client";
import { motion } from "motion/react";
import emojis from "@/utils";

const HeroSection = () => {
  return (
    <>
      <div className="hidden lg:grid grid-cols-[repeat(24,minmax(0,1fr))]  absolute inset-0 z-20  overflow-hidden  w-full max-h-screen ">
        {emojis.map((emoji, index) => (
          <div key={index} className=" cursor-pointer ">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0, scale: 1, transition: { duration: 2 } }}
              whileTap={{ scale: 1.5, rotate: 10 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                transition: { duration: 0.08 },
              }}
              className=" h-12  text-4xl"
            >
              {emoji}
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
