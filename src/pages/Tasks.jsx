import tasks from "../data/tasks";
import TaskCard from "../components/tasks/TaskCard";
import "../components/tasks/TaskCard.css";
import "./Tasks.css";

function Tasks() {
  const todoTasks = tasks.filter((task) => task.status === "Todo");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const completedTasks = tasks.filter((task) => task.status === "Completed");

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High",
  ).length;

  return (
    <section className="tasks-page">
      <div className="tasks-page__header">
        <div>
          <span className="tasks-page__eyebrow">Workspace</span>

          <h1>Tasks</h1>

          <p>
            Organize work, monitor priorities, and keep every project moving
            forward.
          </p>
        </div>

        <button type="button" className="tasks-page__button">
          + New Task
        </button>
      </div>

      <div className="tasks-page__summary">
        <div className="tasks-page__summary-card">
          <span>Total tasks</span>
          <strong>{tasks.length}</strong>
        </div>

        <div className="tasks-page__summary-card">
          <span>To do</span>
          <strong>{todoTasks.length}</strong>
        </div>

        <div className="tasks-page__summary-card">
          <span>In progress</span>
          <strong>{inProgressTasks.length}</strong>
        </div>

        <div className="tasks-page__summary-card">
          <span>High priority</span>
          <strong>{highPriorityTasks}</strong>
        </div>
      </div>

      <div className="tasks-board">
        <div className="tasks-board__column">
          <div className="tasks-board__header">
            <div>
              <span className="tasks-board__indicator tasks-board__indicator--todo" />
              <h2>To Do</h2>
            </div>

            <span>{todoTasks.length}</span>
          </div>

          <div className="tasks-board__list">
            {todoTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>

        <div className="tasks-board__column">
          <div className="tasks-board__header">
            <div>
              <span className="tasks-board__indicator tasks-board__indicator--progress" />
              <h2>In Progress</h2>
            </div>

            <span>{inProgressTasks.length}</span>
          </div>

          <div className="tasks-board__list">
            {inProgressTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>

        <div className="tasks-board__column">
          <div className="tasks-board__header">
            <div>
              <span className="tasks-board__indicator tasks-board__indicator--completed" />
              <h2>Completed</h2>
            </div>

            <span>{completedTasks.length}</span>
          </div>

          <div className="tasks-board__list">
            {completedTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tasks;
