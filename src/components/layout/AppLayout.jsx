import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">F</div>

          <div>
            <span className="brand-name">FlowDesk</span>
            <span className="brand-label">Workspace</span>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          <div className="nav-section">
            <span className="nav-section-title">Workspace</span>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">DB</span>
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/clients"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">CL</span>
              <span>Clients</span>
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">PR</span>
              <span>Projects</span>
            </NavLink>

            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">TK</span>
              <span>Tasks</span>
            </NavLink>
          </div>

          <div className="nav-section">
            <span className="nav-section-title">Management</span>

            <NavLink
              to="/invoices"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">IN</span>
              <span>Invoices</span>
            </NavLink>

            <NavLink
              to="/activity"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">AC</span>
              <span>Activity</span>
            </NavLink>
          </div>
        </nav>

        <div className="sidebar-bottom">
          <div className="workspace-card">
            <span className="workspace-card-label">Current workspace</span>
            <strong>Acme Studio</strong>
            <span className="workspace-card-status">Free workspace</span>
          </div>

          <div className="user-card">
            <div className="avatar">AJ</div>

            <div className="user-info">
              <strong>Alex Johnson</strong>
              <span>Administrator</span>
            </div>

            <button className="user-menu-button" aria-label="Open user menu">
              •••
            </button>
          </div>
        </div>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <span className="topbar-title">Workspace</span>
          </div>

          <div className="topbar-actions">
            <button className="topbar-button" aria-label="Search">
              Search
            </button>

            <button
              className="topbar-button notification-button"
              aria-label="Notifications"
            >
              <span className="notification-dot"></span>
              Notifications
            </button>

            <div className="topbar-avatar">AJ</div>
          </div>
        </header>

        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
