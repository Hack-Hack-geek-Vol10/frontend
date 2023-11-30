import ProjectRepository from "@/repository/ProjectRepositories";

export function useProjectService() {
  const {
    GetProjectRepository,
    CreateProjectRepository,
    UpdateProjectRepository,
    DeleteProjectRepository,
  } = ProjectRepository();

  const useGetProject = (projectId: string) => {
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

  const useCreateProject = async (title: string) => {
    try {
      const response = await CreateProjectRepository(title);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const useUpdateProject = async (
    projectId: string,
    title: string,
    lastImage: string
  ) => {
    try {
      const response = await UpdateProjectRepository(
        projectId,
        title,
        lastImage
      );
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const useDeleteProject = async (projectId: string) => {
    try {
      const response = await DeleteProjectRepository(projectId);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  return {
    useGetProject,
    useCreateProject,
    useUpdateProject,
    useDeleteProject,
  };
}
