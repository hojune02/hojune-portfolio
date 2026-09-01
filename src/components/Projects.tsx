import { useState } from "react";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-28 bg-white/[0.015] px-6 py-32 md:px-10 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
            Selected work
          </p>

          <h2 className="mt-4 text-[clamp(2.8rem,7vw,5rem)] leading-none font-[850] tracking-[-0.055em]">
            Projects and research.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Work spanning artificial intelligence, systems, cybersecurity
            research, and frontend development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              number={index + 1}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}