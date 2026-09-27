import { useEffect, useState } from "react";
import "./ProjectModal.css";

const initialForm = {
  name: "",
  description: "",
  status: "Planning",
  progress: 0,
  team: 1,
  dueDate: "",
  priority: "Medium",
};

function ProjectModal({ isOpen, project, onClose, onSave }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (project) {
      setForm({
        name: project.name,
        description: project.description,
        status: project.status,
        progress: project.progress,
        team: project.team,
        dueDate: project.dueDate,
        priority: project.priority,
      });
    } else {
      setForm(initialForm);
    }
  }, [project, isOpen]);

  if (!isOpen) {
    return null;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSave({
      ...form,
      progress: Number(form.progress),
      team: Number(form.team),
    });
  }

  return (
    <>
      <button
        type="button"
        className="project-modal__backdrop"
        aria-label="Close project modal"
        onClick={onClose}
      />

      <div className="project-modal">
        <div className="project-modal__header">
          <div>
            <span className="project-modal__eyebrow">Project management</span>

            <h2>{project ? "Edit project" : "Create project"}</h2>

            <p>
              {project
                ? "Update the project information below."
                : "Add a new project to your FlowDesk workspace."}
            </p>
          </div>

          <button
            type="button"
            className="project-modal__close"
            onClick={onClose}
            aria-label="Close project modal"
          >
            ×
          </button>
        </div>

        <form className="project-modal__form" onSubmit={handleSubmit}>
          <div className="project-modal__field">
            <label htmlFor="project-name">Project name</label>

            <input
              id="project-name"
              name="name"
              type="text"
              placeholder="e.g. Website Redesign"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="project-modal__field">
            <label htmlFor="project-description">Description</label>

            <textarea
              id="project-description"
              name="description"
              placeholder="Describe the project..."
              value={form.description}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="project-modal__grid">
            <div className="project-modal__field">
              <label htmlFor="project-status">Status</label>

              <select
                id="project-status"
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="Planning">Planning</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="project-modal__field">
              <label htmlFor="project-priority">Priority</label>

              <select
                id="project-priority"
                name="priority"
                value={form.priority}
                onChange={handleChange}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          <div className="project-modal__grid">
            <div className="project-modal__field">
              <label htmlFor="project-progress">Progress (%)</label>

              <input
                id="project-progress"
                name="progress"
                type="number"
                min="0"
                max="100"
                value={form.progress}
                onChange={handleChange}
                required
              />
            </div>

            <div className="project-modal__field">
              <label htmlFor="project-team">Team members</label>

              <input
                id="project-team"
                name="team"
                type="number"
                min="1"
                value={form.team}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="project-modal__field">
            <label htmlFor="project-due-date">Due date</label>

            <input
              id="project-due-date"
              name="dueDate"
              type="text"
              placeholder="e.g. Oct 15, 2026"
              value={form.dueDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="project-modal__footer">
            <button
              type="button"
              className="project-modal__cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="project-modal__save">
              {project ? "Save changes" : "Create project"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProjectModal;
