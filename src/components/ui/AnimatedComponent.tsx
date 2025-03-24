"use client";
import { motion } from "framer-motion";

const AnimatedComponent = ({
  initial,
  whileInView,
  variants,
  className,
  children,
}: {
  initial?:
    | boolean
    | import("framer-motion").TargetAndTransition
    | import("framer-motion").VariantLabels;
  whileInView?:
    | import("framer-motion").TargetAndTransition
    | import("framer-motion").VariantLabels;
  variants?: import("framer-motion").Variants;
  className?: string;
  children?: React.ReactNode;
  data?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
