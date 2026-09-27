import { useMemo, useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectModal from "../components/projects/ProjectModal";
import { useProjects } from "../context/useProjects";
import "../components/projects/ProjectCard.css";
import "../components/projects/ProjectModal.css";

function Projects() {
  const {
    projects,
    addProject,
    updateProject,
    deleteProject,
    updateProjectStatus,
  } = useProjects();

  const [filters, setFilters] = useState({
    search: "",
    status: "All",
    priority: "All",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());

      const matchesStatus =
        filters.status === "All" || project.status === filters.status;

      const matchesPriority =
        filters.priority === "All" || project.priority === filters.priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [projects, filters]);

  const activeProjects = projects.filter(
    (project) => project.status === "In Progress",
  ).length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed",
  ).length;

  function handleFilter(nextFilters) {
    setFilters(nextFilters);
  }

  function handleOpenCreate() {
    setEditingProject(null);
    setIsModalOpen(true);
  }

  function handleOpenEdit(project) {
    setEditingProject(project);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setEditingProject(null);
  }

  function handleSaveProject(projectData) {
    if (editingProject) {
      updateProject(editingProject.id, projectData);
    } else {
      addProject(projectData);
    }

    handleCloseModal();
  }

  function handleDeleteProject(projectId) {
    const project = projects.find(
      (currentProject) => currentProject.id === projectId,
    );

    if (!project) {
      return;
    }

    const confirmed = window.confirm(
      `Delete "${project.name}"? This action cannot be undone.`,
    );

    if (!confirmed) {
      return;
    }

    deleteProject(projectId);
  }

  function handleStatusChange(projectId, status) {
    updateProjectStatus(projectId, status);
  }

  return (
    <>
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

          <button
            type="button"
            className="projects-page__button"
            onClick={handleOpenCreate}
          >
            + New Project
          </button>
        </div>

        <div className="projects-page__summary">
          <div className="projects-page__summary-card">
            <span>Total projects</span>
            <strong>{projects.length}</strong>
          </div>

          <div className="projects-page__summary-card">
            <span>In progress</span>
            <strong>{activeProjects}</strong>
          </div>

          <div className="projects-page__summary-card">
            <span>Completed</span>
            <strong>{completedProjects}</strong>
          </div>
        </div>

        <ProjectFilters projects={filteredProjects} onFilter={handleFilter} />

        {filteredProjects.length > 0 ? (
          <div className="projects-page__grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEdit={handleOpenEdit}
                onDelete={handleDeleteProject}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        ) : (
          <div className="projects-page__empty">
            <h2>No projects found</h2>
            <p>Try changing your search or filter options to find a project.</p>
          </div>
        )}
      </section>

      <ProjectModal
        isOpen={isModalOpen}
        project={editingProject}
        onClose={handleCloseModal}
        onSave={handleSaveProject}
      />
    </>
  );
}

export default Projects;
