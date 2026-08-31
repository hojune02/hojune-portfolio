import { useEffect } from "react";
import type { MouseEvent } from "react";
import type { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

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
    <div
      className="modal-backdrop"
      onMouseDown={handleBackdropClick}
    >
      <article
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          className="project-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <p className="section__label">{project.category}</p>

        <h2 id="project-modal-title">{project.title}</h2>

        <p className="project-modal__summary">{project.summary}</p>

        <ul
          className="project-card__technologies"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-modal__details">
          <section>
            <h3>The problem</h3>
            <p>{project.details.problem}</p>
          </section>

          <section>
            <h3>What I built</h3>
            <p>{project.details.solution}</p>
          </section>

          <section>
            <h3>Engineering challenge</h3>
            <p>{project.details.challenge}</p>
          </section>
        </div>

        {(project.github || project.demo) && (
          <div className="project-modal__links">
            {project.github && (
              <a
                className="button button--primary"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub ↗
              </a>
            )}

            {project.demo && (
              <a
                className="button button--secondary"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                View live demo ↗
              </a>
            )}
          </div>
        )}
      </article>
    </div>
  );
}