import { createContext, useEffect, useState } from "react";
import projectsData from "../data/projects";

export const ProjectContext = createContext(null);

const STORAGE_KEY = "flowdesk-projects";

function ProjectProvider({ children }) {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem(STORAGE_KEY);

    if (savedProjects) {
      try {
        return JSON.parse(savedProjects);
      } catch {
        return projectsData;
      }
    }

    return projectsData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  function addProject(projectData) {
    const newProject = {
      id: Date.now(),
      ...projectData,
    };

    setProjects((current) => [newProject, ...current]);
  }

  function updateProject(projectId, projectData) {
    setProjects((current) =>
      current.map((project) =>
        project.id === projectId
          ? {
              ...project,
              ...projectData,
            }
          : project,
      ),
    );
  }

  function deleteProject(projectId) {
    setProjects((current) =>
      current.filter((project) => project.id !== projectId),
    );
  }

  function updateProjectStatus(projectId, status) {
    setProjects((current) =>
      current.map((project) =>
        project.id === projectId
          ? {
              ...project,
              status,
              progress: status === "Completed" ? 100 : project.progress,
            }
          : project,
      ),
    );
  }

  function resetProjects() {
    setProjects(projectsData);
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
        updateProjectStatus,
        resetProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;
