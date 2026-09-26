import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectFilters from "../components/projects/ProjectFilters";

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  function handleFilter({ search, status, priority }) {
    const filtered = projects.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus = status === "All" || project.status === status;

      const matchesPriority =
        priority === "All" || project.priority === priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });

    setFilteredProjects(filtered);
  }

  return (
    <section className="projects-page">
      <div className="projects-page__header">
        <div>
          <span className="projects-page__eyebrow">Workspace</span>

          <h1>Projects</h1>

          <p>
            Manage your active projects, track progress, and keep your team
            aligned.
          </p>
        </div>

        <button type="button" className="projects-page__button">
          + New Project
        </button>
      </div>

      <div className="projects-page__summary">
        <div className="projects-page__summary-card">
          <span>Total projects</span>
          <strong>{projects.length}</strong>
        </div>

        <div className="projects-page__summary-card">
          <span>In progress</span>
          <strong>
            {
              projects.filter((project) => project.status === "In Progress")
                .length
            }
          </strong>
        </div>

        <div className="projects-page__summary-card">
          <span>Completed</span>
          <strong>
            {
              projects.filter((project) => project.status === "Completed")
                .length
            }
          </strong>
        </div>
      </div>

      <ProjectFilters projects={filteredProjects} onFilter={handleFilter} />

      {filteredProjects.length > 0 ? (
        <div className="projects-page__grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="projects-page__empty">
          <h2>No projects found</h2>
          <p>Try changing your search or filter options to find a project.</p>
        </div>
      )}
    </section>
  );
}

export default Projects;
