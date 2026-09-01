import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.25,
  });

  const progress = shouldReduceMotion
    ? scrollYProgress
    : smoothProgress;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[250] h-[3px] w-full origin-left bg-accent"
      style={{
        scaleX: progress,
      }}
      aria-hidden="true"
    />
  );
}