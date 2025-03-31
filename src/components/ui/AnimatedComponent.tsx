"use client";
import { motion } from "framer-motion";

interface AnimatedComponentProps {
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
  drag?: boolean | "x" | "y" | undefined;
}

const AnimatedComponent = ({
  initial,
  whileInView,
  variants,
  className,
  children,
  drag,
}: AnimatedComponentProps) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      className={className}
      drag={drag}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
