function Dashboard() {
  return (
    <main className="page-content">
      <div className="page-header">
        <div>
          <p className="page-eyebrow">Overview</p>
          <h1>Good morning, welcome to FlowDesk.</h1>
          <p className="page-description">
            Manage your clients, projects, tasks, and business operations from
            one workspace.
          </p>
        </div>

        <button className="primary-button">Create project</button>
      </div>

      <section className="stats-grid">
        <article className="stat-card">
          <div className="stat-card-top">
            <span className="stat-label">Active clients</span>
            <span className="stat-icon">CL</span>
          </div>

          <strong className="stat-value">24</strong>

          <p className="stat-change positive">+8.2% this month</p>
        </article>

        <article className="stat-card">
          <div className="stat-card-top">
            <span className="stat-label">Active projects</span>
            <span className="stat-icon">PR</span>
          </div>

          <strong className="stat-value">12</strong>

          <p className="stat-change positive">+3 this month</p>
        </article>

        <article className="stat-card">
          <div className="stat-card-top">
            <span className="stat-label">Open tasks</span>
            <span className="stat-icon">TK</span>
          </div>

          <strong className="stat-value">48</strong>

          <p className="stat-change negative">+5 from yesterday</p>
        </article>

        <article className="stat-card">
          <div className="stat-card-top">
            <span className="stat-label">Upcoming deadlines</span>
            <span className="stat-icon">DL</span>
          </div>

          <strong className="stat-value">7</strong>

          <p className="stat-change neutral">Next 7 days</p>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-card">
          <div className="card-header">
            <div>
              <p className="card-eyebrow">Projects</p>
              <h2>Recent projects</h2>
            </div>

            <button className="text-button">View all</button>
          </div>

          <div className="empty-dashboard-state">
            <div className="empty-state-icon">P</div>
            <h3>No projects yet</h3>
            <p>
              Your most recent projects will appear here once you create them.
            </p>
          </div>
        </article>

        <article className="dashboard-card">
          <div className="card-header">
            <div>
              <p className="card-eyebrow">Activity</p>
              <h2>Recent activity</h2>
            </div>

            <button className="text-button">View all</button>
          </div>

          <div className="empty-dashboard-state">
            <div className="empty-state-icon">A</div>
            <h3>No recent activity</h3>
            <p>
              Updates from your workspace will appear here as your team works.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Dashboard;
