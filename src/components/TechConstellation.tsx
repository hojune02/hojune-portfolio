import { motion, useReducedMotion } from "motion/react";

const technologies = [
  {
    label: "React",
    x: 18,
    y: 20,
  },
  {
    label: "TypeScript",
    x: 76,
    y: 14,
  },
  {
    label: "Node.js",
    x: 84,
    y: 60,
  },
  {
    label: "Python",
    x: 54,
    y: 86,
  },
  {
    label: "Linux",
    x: 14,
    y: 70,
  },
];

const connections = [
  "M 280 235 L 100 96",
  "M 280 235 L 425 67",
  "M 280 235 L 470 288",
  "M 280 235 L 302 413",
  "M 280 235 L 78 336",
  "M 100 96 L 425 67",
  "M 470 288 L 302 413",
  "M 302 413 L 78 336",
];

export default function TechConstellation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative aspect-7/6 w-full max-w-140"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 size-full overflow-visible"
        viewBox="0 0 560 480"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id="constellation-line"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#ff477e" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ff477e" stopOpacity="0.25" />
          </linearGradient>

          <filter id="constellation-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {connections.map((connection, index) => (
          <motion.path
            d={connection}
            fill="none"
            stroke="url(#constellation-line)"
            strokeWidth="1"
            initial={
              shouldReduceMotion
                ? false
                : {
                    pathLength: 0,
                    opacity: 0,
                  }
            }
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.35 + index * 0.08,
              ease: "easeOut",
            }}
            key={connection}
          />
        ))}

        <motion.circle
          cx="280"
          cy="235"
          r="5"
          fill="#ff477e"
          filter="url(#constellation-glow)"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  r: [4, 7, 4],
                  opacity: [0.7, 1, 0.7],
                }
          }
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </svg>

      <div
        className="absolute"
        style={{
          left: "50%",
          top: "49%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          className="min-w-42 rounded-2xl border border-accent/30 bg-page-soft/90 px-5 py-4 text-center shadow-2xl shadow-accent/10 backdrop-blur-lg"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.8,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 1.04,
                }
          }
        >
          <span className="block text-sm font-black tracking-[0.16em] uppercase">
            Engineering
          </span>

          <small className="mt-2 block text-[0.6rem] font-bold tracking-[0.12em] text-muted uppercase">
            AI · Systems · Security
          </small>
        </motion.div>
      </div>

      {technologies.map((technology, index) => (
        <div
          className="absolute"
          style={{
            left: `${technology.x}%`,
            top: `${technology.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          key={technology.label}
        >
          <motion.div
            className="group flex items-center gap-2 rounded-full border border-line bg-page-soft/90 px-3 py-2 shadow-xl shadow-black/30 backdrop-blur-md"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.7,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.45,
              delay: 0.7 + index * 0.12,
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 1.08,
                  }
            }
          >
            <motion.span
              className="size-2 rounded-full bg-accent shadow-[0_0_14px_#ff477e]"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: [0.5, 1, 0.5],
                      scale: [0.8, 1.2, 0.8],
                    }
              }
              transition={{
                duration: 2.5,
                delay: index * 0.35,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <span className="text-xs font-bold text-copy transition group-hover:text-white md:text-sm">
              {technology.label}
            </span>
          </motion.div>
        </div>
      ))}
    </div>
  );
}