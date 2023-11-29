import ProjectRepository from "@/repository/ProjectRepositories";

export function useProjectService() {
  const { GetProject, CreateProject, UpdateProject, DeleteProject } =
    ProjectRepository();

  const useGetProject = (projectId: string) => {
    try {
      const { data, loading, error } = GetProject(projectId);
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
      const response = await CreateProject(title);
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
      const response = await UpdateProject(projectId, title, lastImage);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const useDeleteProject = async (projectId: string) => {
    try {
      const response = await DeleteProject(projectId);
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
