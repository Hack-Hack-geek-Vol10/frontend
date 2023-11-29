import ProjectMemberRepository from "@/repository/ProjectMemberRepositories";
import { Auth } from "@/generated/graphql";
export function useProjectMemberService() {
  const {
    GetProjectMembers,
    CreateProjectMember,
    UpdateProjectMember,
    DeleteProjectMember,
  } = ProjectMemberRepository();

  const useGetProjectMembers = (projectId: string) => {
    try {
      const { data, loading, error } = GetProjectMembers(projectId);
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

  const useCreateProjectMember = async (token: string) => {
    try {
      const response = await CreateProjectMember(token);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const useUpdateProjectMember = async (
    projectId: string,
    userId: string,
    authority: Auth
  ) => {
    try {
      const response = await UpdateProjectMember(projectId, userId, authority);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const useDeleteProjectMember = async (projectId: string, userId: string) => {
    try {
      const response = await DeleteProjectMember(projectId, userId);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  return {
    useGetProjectMembers,
    useCreateProjectMember,
    useUpdateProjectMember,
    useDeleteProjectMember,
  };
}
