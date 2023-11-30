import ProjectMemberRepository from "@/repository/useProjectMemberRepositories";
import { Auth } from "@/generated/graphql";

export function useProjectMemberService() {
  const {
    GetProjectMembersRepository,
    CreateProjectMemberRepository,
    UpdateProjectMemberRepository,
    DeleteProjectMemberRepository,
  } = ProjectMemberRepository();

  const GetProjectMembersService = async (projectId: string) => {
    try {
      const { data, loading, error } = GetProjectMembersRepository(projectId);
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
  const CreateProjectMemberService = async (token: string) => {
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
    try {
      const response = await DeleteProjectMemberRepository(projectId, userId);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  return {
    GetProjectMembersService,
    CreateProjectMemberService,
    UpdateProjectMemberService,
    DeleteProjectMemberService,
  };
}
