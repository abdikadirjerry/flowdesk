function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <div>
          <span className="project-card__priority">
            {project.priority} priority
          </span>

          <h3>{project.name}</h3>
        </div>

        <span
          className={`project-card__status project-card__status--${project.status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {project.status}
        </span>
      </div>

      <p className="project-card__description">{project.description}</p>

      <div className="project-card__progress-header">
        <span>Progress</span>
        <strong>{project.progress}%</strong>
      </div>

      <div className="project-card__progress">
        <div
          className="project-card__progress-bar"
          style={{ width: `${project.progress}%` }}
        />
      </div>

      <div className="project-card__footer">
        <div>
          <span>Team</span>
          <strong>{project.team} members</strong>
        </div>

        <div>
          <span>Due date</span>
          <strong>{project.dueDate}</strong>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
