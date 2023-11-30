import ProjectRepository from "@/repository/useProjectRepositories";

const GetProjectService = async (projectId: string) => {
  const { GetProjectRepository } = ProjectRepository();
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
  const { GetProjectsRepository } = ProjectRepository();
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
  const { CreateProjectRepository } = ProjectRepository();
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
  const { UpdateProjectRepository } = ProjectRepository();
  try {
    const response = UpdateProjectRepository(projectId, title, lastImage);
    return response;
  } catch (error) {
    console.log("ServicesError" + error);
  }
};

const DeleteProjectService = async (projectId: string) => {
  const { DeleteProjectRepository } = ProjectRepository();
  try {
    const response = await DeleteProjectRepository(projectId);
    return response;
  } catch (error) {
    console.log("ServicesError" + error);
  }
};

export {
  GetProjectService,
  GetProjectsService,
  CreateProjectService,
  UpdateProjectService,
  DeleteProjectService,
};
