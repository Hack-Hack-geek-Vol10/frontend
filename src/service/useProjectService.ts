import ProjectRepository from "@/repository/useProjectRepositories";

export const useProjectService = () => {
  const {
    GetProjectRepository,
    GetProjectsRepository,
    CreateProjectRepository,
    UpdateProjectRepository,
    DeleteProjectRepository,
  } = ProjectRepository();

  const GetProjectService = async (projectId: string) => {
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
  };

  const GetProjectsService = async (userId: string) => {
    try {
      const { data, loading, error } = GetProjectsRepository(userId);
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
  };

  const CreateProjectService = async (title: string) => {
    try {
      const response = CreateProjectRepository(title);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const UpdateProjectService = async (
    projectId: string,
    title: string,
    lastImage: string
  ) => {
    try {
      const response = UpdateProjectRepository(projectId, title, lastImage);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const DeleteProjectService = async (projectId: string) => {
    try {
      const response = await DeleteProjectRepository(projectId);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  return {
    GetProjectService,
    GetProjectsService,
    CreateProjectService,
    UpdateProjectService,
    DeleteProjectService,
  };
};
