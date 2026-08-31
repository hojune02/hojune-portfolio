import { useState } from "react";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section id="projects" className="section projects">
      <div className="section__heading">
        <p className="section__label">Selected work</p>

        <h2>Projects and research</h2>

        <p>
          A selection of work spanning artificial intelligence, systems,
          cybersecurity research, and frontend development.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            number={index + 1}
            onSelect={setSelectedProject}
          />
        ))}
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