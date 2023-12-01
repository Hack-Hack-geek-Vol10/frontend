import ProjectRepository from "@/repository/useProjectRepositories";

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

export { CreateProjectService, UpdateProjectService, DeleteProjectService };
