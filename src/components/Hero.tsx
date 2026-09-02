import { motion, useReducedMotion } from "motion/react";
import TechConstellation from "./TechConstellation";
import ArrowUpRightIcon from "./icons/ArrowUpRightIcon";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/hojune02",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hojune-kim/",
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      id="home"
      className="hero-layout relative mx-auto grid min-h-svh max-w-7xl scroll-mt-28 grid-cols-1 items-center gap-12 px-6 pt-36 pb-20 md:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)] lg:gap-20 lg:px-8 xl:px-0"
    >
      <motion.div
        className="relative z-10 max-w-3xl"
        initial={
            shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 32,
                }
        }
        animate={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 0.8,
            ease: "easeOut",
        }}
        >
        {/* <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-line bg-white/3 px-3 py-2 text-xs font-semibold text-muted">
          <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_0_5px_rgb(110_231_183_/_10%)]" />
          Open to software engineering opportunities
        </div> */}

        <p className="mb-4 text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
          Hello, I&apos;m
        </p>

        <h1 className="m-0 text-[clamp(4rem,17vw,5.5rem)] leading-[0.83] font-black tracking-[-0.075em] lg:text-[clamp(4rem,7vw,7rem)]">
          Hojune
          <br />
          Kim<span className="text-accent">.</span>
        </h1>

        <h2 className="mt-8 mb-5 max-w-2xl text-[clamp(1.35rem,2.2vw,2rem)] leading-[1.35] font-medium tracking-tight text-copy">
          Building across <strong className="text-white">AI</strong>,{" "}
          <strong className="text-white">systems</strong>, and{" "}
          <strong className="text-white">cybersecurity</strong>.
        </h2>

        <p className="m-0 max-w-xl text-[clamp(1rem,1.2vw,1.1rem)] leading-7 text-muted">
          I&apos;m a computer science student at KAIST who enjoys understanding
          technology beneath the abstraction—and turning that understanding
          into reliable software.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-transparent bg-accent px-6 py-3 text-sm font-extrabold text-page no-underline transition hover:-translate-y-0.5 hover:bg-accent-light"
            href="#projects"
          >
            Explore my work
          </a>

          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-line-strong bg-white/2 px-6 py-3 text-sm font-extrabold text-white no-underline transition hover:-translate-y-0.5 hover:border-accent"
            href="#contact"
          >
            Contact me
          </a>
        </div>

        <ul
          className="mt-8 flex list-none flex-wrap gap-5 p-0"
          aria-label="Social links"
        >
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                className="text-sm font-semibold text-muted no-underline transition hover:text-accent"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{link.label}</span><ArrowUpRightIcon className="size-4" />
              </a>
            </li>
          ))}

          <li>
            <a
              className="text-sm font-semibold text-muted no-underline transition hover:text-accent"
              href="mailto:hojunekim1202@gmail.com"
            >
              <span>Email</span> <ArrowUpRightIcon className="size-4" />
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="relative z-10 grid min-w-0 place-items-center"
        initial={
            shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.88,
                rotate: -4,
                }
        }
        animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
        }}
        transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
        }}
        >
        <TechConstellation />
      </motion.div>
    </section>
  );
}