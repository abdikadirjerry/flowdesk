import { useState } from "react";
import "./ProjectFilters.css";

function ProjectFilters({ projects, onFilter }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");

  function handleSearchChange(event) {
    const value = event.target.value;

    setSearch(value);

    onFilter({
      search: value,
      status,
      priority,
    });
  }

  function handleStatusChange(event) {
    const value = event.target.value;

    setStatus(value);

    onFilter({
      search,
      status: value,
      priority,
    });
  }

  function handlePriorityChange(event) {
    const value = event.target.value;

    setPriority(value);

    onFilter({
      search,
      status,
      priority: value,
    });
  }

  function handleReset() {
    setSearch("");
    setStatus("All");
    setPriority("All");

    onFilter({
      search: "",
      status: "All",
      priority: "All",
    });
  }

  const hasFilters =
    search.trim() !== "" || status !== "All" || priority !== "All";

  return (
    <div className="project-filters">
      <div className="project-filters__search">
        <label htmlFor="project-search">Search projects</label>

        <input
          id="project-search"
          type="text"
          placeholder="Search by project name..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="project-filters__select">
        <label htmlFor="project-status">Status</label>

        <select
          id="project-status"
          value={status}
          onChange={handleStatusChange}
        >
          <option value="All">All statuses</option>
          <option value="In Progress">In Progress</option>
          <option value="Planning">Planning</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="project-filters__select">
        <label htmlFor="project-priority">Priority</label>

        <select
          id="project-priority"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="All">All priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {hasFilters && (
        <button
          type="button"
          className="project-filters__reset"
          onClick={handleReset}
        >
          Reset filters
        </button>
      )}

      <span className="project-filters__total">
        {projects.length} {projects.length === 1 ? "project" : "projects"}
      </span>
    </div>
  );
}

export default ProjectFilters;
