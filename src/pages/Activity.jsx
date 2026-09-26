import { useState } from "react";
import activity from "../data/activity";
import ActivityItem from "../components/activity/ActivityItem";
import "../components/activity/ActivityItem.css";
import "./Activity.css";

function Activity() {
  const [filter, setFilter] = useState("All");

  const filteredActivity =
    filter === "All"
      ? activity
      : activity.filter((item) => item.type === filter.toLowerCase());

  const projectActivity = activity.filter(
    (item) => item.type === "project",
  ).length;

  const taskActivity = activity.filter((item) => item.type === "task").length;

  const invoiceActivity = activity.filter(
    (item) => item.type === "invoice",
  ).length;

  return (
    <section className="activity-page">
      <div className="activity-page__header">
        <div>
          <span className="activity-page__eyebrow">Workspace</span>

          <h1>Activity</h1>

          <p>
            Follow important workspace events and keep a complete operational
            timeline.
          </p>
        </div>
      </div>

      <div className="activity-page__summary">
        <div className="activity-page__summary-card">
          <span>Total activity</span>
          <strong>{activity.length}</strong>
        </div>

        <div className="activity-page__summary-card">
          <span>Projects</span>
          <strong>{projectActivity}</strong>
        </div>

        <div className="activity-page__summary-card">
          <span>Tasks</span>
          <strong>{taskActivity}</strong>
        </div>

        <div className="activity-page__summary-card">
          <span>Invoices</span>
          <strong>{invoiceActivity}</strong>
        </div>
      </div>

      <div className="activity-page__toolbar">
        <div>
          <h2>Recent activity</h2>
          <p>Stay up to date with changes across your workspace.</p>
        </div>

        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          aria-label="Filter activity"
        >
          <option value="All">All activity</option>
          <option value="Project">Projects</option>
          <option value="Task">Tasks</option>
          <option value="Invoice">Invoices</option>
          <option value="Client">Clients</option>
        </select>
      </div>

      <div className="activity-page__timeline">
        {filteredActivity.length > 0 ? (
          filteredActivity.map((item) => (
            <ActivityItem key={item.id} item={item} />
          ))
        ) : (
          <div className="activity-page__empty">
            <h2>No activity found</h2>
            <p>Try selecting a different activity category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Activity;
