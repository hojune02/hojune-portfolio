import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "../data/projects";
import ArrowUpRightIcon from "./icons/ArrowUpRightIcon";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  function handleBackdropClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <motion.div
    className="fixed inset-0 z-100 overflow-y-auto bg-black/85 p-0 backdrop-blur-sm md:p-8"
    initial={shouldReduceMotion ? false : { opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    onMouseDown={handleBackdropClick}
    >
        <motion.article
        className="relative mx-auto min-h-screen w-full border-line bg-panel px-6 py-20 md:min-h-0 md:max-w-4xl md:rounded-3xl md:border md:p-14"
        initial={
            shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 30,
                scale: 0.97,
                }
        }
        animate={{
            opacity: 1,
            y: 0,
            scale: 1,
        }}
        exit={{
            opacity: 0,
            y: 20,
            scale: 0.98,
        }}
        transition={{
            duration: 0.28,
            ease: "easeOut",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        >
        <button
          ref={closeButtonRef}
          className="absolute top-5 right-5 grid size-12 cursor-pointer place-items-center rounded-full border border-line-strong bg-transparent text-3xl leading-none transition hover:border-accent hover:text-accent"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <p className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
          {project.category}
        </p>

        <h2
          id="project-modal-title"
          className="mt-4 max-w-3xl pr-12 text-[clamp(2.8rem,7vw,5rem)] leading-none font-[850] tracking-[-0.055em]"
        >
          {project.title}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          {project.summary}
        </p>

        <ul
          className="mt-6 flex list-none flex-wrap gap-2 p-0"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.map((technology) => (
            <li
              className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-copy"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-9">
          <section>
            <h3 className="mb-3 text-xs font-extrabold tracking-[0.12em] text-accent uppercase">
              The problem
            </h3>
            <p className="m-0 leading-8 text-copy">
              {project.details.problem}
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xs font-extrabold tracking-[0.12em] text-accent uppercase">
              What I built
            </h3>
            <p className="m-0 leading-8 text-copy">
              {project.details.solution}
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xs font-extrabold tracking-[0.12em] text-accent uppercase">
              Engineering challenge
            </h3>
            <p className="m-0 leading-8 text-copy">
              {project.details.challenge}
            </p>
          </section>
        </div>

        {(project.github || project.demo) && (
          <div className="mt-12 flex flex-wrap gap-3">
            {project.github && (
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-extrabold text-page no-underline transition hover:-translate-y-0.5 hover:bg-accent-light"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
                <ArrowUpRightIcon className="size-4" />
              </a>
            )}

            {project.demo && (
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line-strong px-6 py-3 text-sm font-extrabold no-underline transition hover:-translate-y-0.5 hover:border-accent"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                View live demo
                <ArrowUpRightIcon className="size-4" />
              </a>
            )}
          </div>
        )}
      </motion.article>
    </motion.div>
  );
}