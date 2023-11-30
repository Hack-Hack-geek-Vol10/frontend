import ProjectRepository from "@/repository/ProjectRepositories";
import React from "react";
export function useProjectService() {
  const {
    GetProjectRepository,
    CreateProjectRepository,
    UpdateProjectRepository,
    DeleteProjectRepository,
  } = ProjectRepository();

  const GetProjectService = React.useCallback((projectId: string) => {
    try {
      const { data, loading, error } = GetProjectRepository(projectId);
      if (loading) {
        console.log("Loading");
      }
      if (error) {
        console.log("Error");
      }
      return data;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  }, []);

  const CreateProjectService = React.useCallback((title: string) => {
    try {
      const response = CreateProjectRepository(title);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  }, []);

  const UpdateProjectService = React.useCallback(
    (projectId: string, title: string, lastImage: string) => {
      try {
        const response = UpdateProjectRepository(projectId, title, lastImage);
        return response;
      } catch (error) {
        console.log("ServicesError" + error);
      }
    },
    []
  );
  const DeleteProjectService = React.useCallback(async (projectId: string) => {
    try {
      const response = await DeleteProjectRepository(projectId);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  }, []);

  return {
    GetProjectService,
    CreateProjectService,
    UpdateProjectService,
    DeleteProjectService,
  };
}
