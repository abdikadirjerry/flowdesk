import clients from "../data/clients";
import invoices from "../data/invoices";
import tasks from "../data/tasks";
import { useProjects } from "../context/useProjects";
import "./Dashboard.css";

function Dashboard() {
  const { projects } = useProjects();

  const totalRevenue = invoices.reduce((total, invoice) => {
    return total + Number(invoice.amount.replace(/[$,]/g, ""));
  }, 0);

  const paidRevenue = invoices
    .filter((invoice) => invoice.status === "Paid")
    .reduce((total, invoice) => {
      return total + Number(invoice.amount.replace(/[$,]/g, ""));
    }, 0);

  const outstandingRevenue = invoices
    .filter((invoice) => invoice.status !== "Paid")
    .reduce((total, invoice) => {
      return total + Number(invoice.amount.replace(/[$,]/g, ""));
    }, 0);

  const activeProjects = projects.filter(
    (project) => project.status === "In Progress",
  ).length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed",
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  const taskCompletionRate = Math.round((completedTasks / tasks.length) * 100);

  const averageProjectProgress =
    projects.length > 0
      ? Math.round(
          projects.reduce((total, project) => total + project.progress, 0) /
            projects.length,
        )
      : 0;

  const recentTasks = [...tasks].slice(0, 4);
  const recentInvoices = [...invoices].slice(0, 4);

  return (
    <section className="dashboard-page">
      <div className="dashboard-page__header">
        <div>
          <span className="dashboard-page__eyebrow">Workspace overview</span>

          <h1>Good morning, Alex</h1>

          <p>Here&apos;s what&apos;s happening across your workspace today.</p>
        </div>

        <span className="dashboard-page__date">September 27, 2026</span>
      </div>

      <div className="dashboard-stats">
        <article className="dashboard-stat-card">
          <div className="dashboard-stat-card__top">
            <span>Total revenue</span>

            <span className="dashboard-stat-card__icon dashboard-stat-card__icon--blue">
              $
            </span>
          </div>

          <strong>${totalRevenue.toLocaleString()}</strong>

          <p>
            <span className="dashboard-stat-card__positive">
              ${paidRevenue.toLocaleString()}
            </span>{" "}
            collected
          </p>
        </article>

        <article className="dashboard-stat-card">
          <div className="dashboard-stat-card__top">
            <span>Outstanding</span>

            <span className="dashboard-stat-card__icon dashboard-stat-card__icon--orange">
              $
            </span>
          </div>

          <strong>${outstandingRevenue.toLocaleString()}</strong>

          <p>
            {invoices.filter((invoice) => invoice.status !== "Paid").length}{" "}
            invoices awaiting payment
          </p>
        </article>

        <article className="dashboard-stat-card">
          <div className="dashboard-stat-card__top">
            <span>Active projects</span>

            <span className="dashboard-stat-card__icon dashboard-stat-card__icon--purple">
              P
            </span>
          </div>

          <strong>{activeProjects}</strong>

          <p>
            {completedProjects} project
            {completedProjects === 1 ? "" : "s"} completed
          </p>
        </article>

        <article className="dashboard-stat-card">
          <div className="dashboard-stat-card__top">
            <span>Task completion</span>

            <span className="dashboard-stat-card__icon dashboard-stat-card__icon--green">
              ✓
            </span>
          </div>

          <strong>{taskCompletionRate}%</strong>

          <p>
            {completedTasks} of {tasks.length} tasks completed
          </p>
        </article>
      </div>

      <div className="dashboard-main-grid">
        <section className="dashboard-panel dashboard-panel--projects">
          <div className="dashboard-panel__header">
            <div>
              <h2>Project progress</h2>

              <p>Current progress across your projects.</p>
            </div>

            <span className="dashboard-panel__metric">
              {averageProjectProgress}% avg.
            </span>
          </div>

          <div className="dashboard-project-list">
            {projects.map((project) => (
              <div className="dashboard-project" key={project.id}>
                <div className="dashboard-project__top">
                  <div>
                    <strong>{project.name}</strong>
                    <span>{project.status}</span>
                  </div>

                  <strong>{project.progress}%</strong>
                </div>

                <div className="dashboard-project__bar">
                  <div
                    className="dashboard-project__bar-fill"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <h2>Workspace overview</h2>

              <p>Current workspace metrics.</p>
            </div>
          </div>

          <div className="dashboard-overview">
            <div className="dashboard-overview__item">
              <span>Clients</span>
              <strong>{clients.length}</strong>
            </div>

            <div className="dashboard-overview__item">
              <span>Projects</span>
              <strong>{projects.length}</strong>
            </div>

            <div className="dashboard-overview__item">
              <span>Tasks</span>
              <strong>{tasks.length}</strong>
            </div>

            <div className="dashboard-overview__item">
              <span>Invoices</span>
              <strong>{invoices.length}</strong>
            </div>
          </div>

          <div className="dashboard-overview__footer">
            <span>Workspace status</span>

            <strong>
              <span className="dashboard-overview__status-dot" />
              Operational
            </strong>
          </div>
        </section>
      </div>

      <div className="dashboard-bottom-grid">
        <section className="dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <h2>Recent tasks</h2>

              <p>Latest work across your projects.</p>
            </div>
          </div>

          <div className="dashboard-task-list">
            {recentTasks.map((task) => (
              <article className="dashboard-task" key={task.id}>
                <div
                  className={`dashboard-task__priority dashboard-task__priority--${task.priority.toLowerCase()}`}
                />

                <div className="dashboard-task__content">
                  <strong>{task.title}</strong>
                  <span>{task.project}</span>
                </div>

                <span
                  className={`dashboard-task__status dashboard-task__status--${task.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {task.status}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <h2>Recent invoices</h2>

              <p>Latest billing activity.</p>
            </div>
          </div>

          <div className="dashboard-invoice-list">
            {recentInvoices.map((invoice) => (
              <article className="dashboard-invoice" key={invoice.id}>
                <div>
                  <strong>{invoice.id}</strong>
                  <span>{invoice.client}</span>
                </div>

                <div className="dashboard-invoice__right">
                  <strong>{invoice.amount}</strong>

                  <span
                    className={`dashboard-invoice__status dashboard-invoice__status--${invoice.status.toLowerCase()}`}
                  >
                    {invoice.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Dashboard;
