import ProjectMemberRepository from "@/repository/useProjectMemberRepositories";
import { Auth } from "@/generated/graphql";
import { useQuery } from "@apollo/client";

const CreateProjectMemberService = async (token: string) => {
  const { CreateProjectMemberRepository } = ProjectMemberRepository();
  try {
    const response = CreateProjectMemberRepository(token);
    return response;
  } catch (error) {
    console.log("ServicesError" + error);
  }
};

const UpdateProjectMemberService = async (
  projectId: string,
  userId: string,
  authority: Auth
) => {
  const { UpdateProjectMemberRepository } = ProjectMemberRepository();
  try {
    const response = UpdateProjectMemberRepository(
      projectId,
      userId,
      authority
    );
    return response;
  } catch (error) {
    console.log("ServicesError" + error);
  }
};
const DeleteProjectMemberService = async (
  projectId: string,
  userId: string
) => {
  const { DeleteProjectMemberRepository } = ProjectMemberRepository();
  try {
    const response = await DeleteProjectMemberRepository(projectId, userId);
    return response;
  } catch (error) {
    console.log("ServicesError" + error);
  }
};

export {
  CreateProjectMemberService,
  UpdateProjectMemberService,
  DeleteProjectMemberService,
};
