import projects from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

function Projects() {
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

        <button className="projects-page__button">+ New Project</button>
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

      <div className="projects-page__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
