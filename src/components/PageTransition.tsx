"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  delay?: number;
}

const sectionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const PageTransition = ({ children, delay = 0 }: PageTransitionProps) => {
  return (
    <motion.div
      className="motion-div"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      style={{
        willChange: "opacity, transform",
        transform: "translateZ(0)", // Force hardware acceleration
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
