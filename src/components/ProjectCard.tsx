import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  number: number;
  onSelect: (project: Project) => void;
};

export default function ProjectCard({
  project,
  number,
  onSelect,
}: ProjectCardProps) {
  const formattedNumber = String(number).padStart(2, "0");

  return (
    <article className="project-card">
      <div className="project-card__top">
        <span className="project-card__number">{formattedNumber}</span>
        <span className="project-card__category">{project.category}</span>
      </div>

      <div className="project-card__visual" aria-hidden="true">
        <span>{project.title}</span>
      </div>

      <div className="project-card__content">
        <h3>{project.title}</h3>

        <p>{project.summary}</p>

        <ul
          className="project-card__technologies"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <button
            className="project-card__details"
            type="button"
            onClick={() => onSelect(project)}
          >
            View case study →
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}