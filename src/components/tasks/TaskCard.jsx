function TaskCard({ task }) {
  return (
    <article className="task-card">
      <div className="task-card__top">
        <span
          className={`task-card__priority task-card__priority--${task.priority.toLowerCase()}`}
        >
          {task.priority}
        </span>

        <button type="button" className="task-card__menu">
          •••
        </button>
      </div>

      <h3>{task.title}</h3>

      <p className="task-card__description">{task.description}</p>

      <span className="task-card__project">{task.project}</span>

      <div className="task-card__footer">
        <div className="task-card__assignee">
          <span className="task-card__avatar">
            {task.assignee
              .split(" ")
              .map((name) => name[0])
              .join("")
              .slice(0, 2)}
          </span>

          <span>{task.assignee}</span>
        </div>

        <span className="task-card__date">{task.dueDate}</span>
      </div>
    </article>
  );
}

export default TaskCard;
