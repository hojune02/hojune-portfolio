import type { Project } from "../data/projects";
import ArrowUpRightIcon from "./icons/ArrowUpRightIcon";

type ProjectCardProps = {
  project: Project;
  number: number;
  onSelect: (project: Project) => void;
};

const visualThemes = [
  "from-fuchsia-500/25 via-violet-500/10 to-transparent",
  "from-cyan-400/20 via-blue-500/10 to-transparent",
  "from-amber-400/20 via-orange-500/10 to-transparent",
  "from-pink-500/20 via-rose-500/10 to-transparent",
];

export default function ProjectCard({
  project,
  number,
  onSelect,
}: ProjectCardProps) {
  const formattedNumber = String(number).padStart(2, "0");
  const visualTheme = visualThemes[(number - 1) % visualThemes.length];

  return (
    <article className="group h-fulloverflow-hidden rounded-3xl border border-line bg-panel transition duration-300 hover:-translate-y-1.5 hover:border-line-strong hover:shadow-2xl hover:shadow-black/30">
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-extrabold text-accent">{formattedNumber}</span>

        <span className="text-xs font-bold tracking-[0.08em] text-muted uppercase">
          {project.category}
        </span>
      </div>

      <div
        className={`relative grid min-h-72 place-items-center overflow-hidden bg-linear-to-br ${visualTheme}`}
      >
        {project.image ? (
          <img
            className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
            src={project.image}
            alt={`${project.title} interface`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <>
            <div className="absolute size-48 rounded-full border border-white/10" />
            <div className="absolute size-72 rounded-full border border-white/5" />

            <span className="relative z-10 max-w-xs px-8 text-center text-[clamp(1.7rem,3vw,2.6rem)] leading-tight font-black tracking-[-0.04em]">
              {project.title}
            </span>
          </>
        )}

        {project.image && (
          <div className="absolute inset-0 bg-linear-to-t from-page/70 via-transparent to-transparent" />
        )}
      </div>

      <div className="p-6">
        <h3 className="m-0 text-2xl font-extrabold tracking-[-0.03em]">
          {project.title}
        </h3>

        <p className="mt-4 min-h-0 leading-7 text-muted lg:min-h-28">
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

        <div className="mt-7 flex flex-wrap items-center gap-5">
          <button
            className="cursor-pointer border-0 bg-transparent p-0 font-extrabold text-accent underline decoration-accent/50 underline-offset-4"
            type="button"
            onClick={() => onSelect(project)}
          >
            View case study →
          </button>

          {project.github && (
            <a
              className="font-bold text-copy no-underline transition hover:text-accent"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRightIcon className="size-4" />
            </a>
          )}

          {project.demo && (
            <a
              className="font-bold text-copy no-underline transition hover:text-accent"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live demo 
              <ArrowUpRightIcon className="size-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}