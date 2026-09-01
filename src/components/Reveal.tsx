import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  distance?: number;
};

export default function Reveal({
  children,
  id,
  className,
  delay = 0,
  distance = 40,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
        id={id}
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: distance,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}