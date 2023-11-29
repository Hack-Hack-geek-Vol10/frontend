import { useQuery, useMutation } from "@apollo/client";

import {
  GetProjectMembersQuery,
  GetProjectMembersQueryVariables,
  GetProjectMembersDocument,
  Auth,
} from "@/generated/graphql";

import {
  CreateProjectMemberMutation,
  CreateProjectMemberMutationVariables,
  CreateProjectMemberDocument,
} from "@/generated/graphql";

import {
  UpdateProjectMemberMutation,
  UpdateProjectMemberMutationVariables,
  UpdateProjectMemberDocument,
} from "@/generated/graphql";

import {
  DeleteProjectMemberMutation,
  DeleteProjectMemberMutationVariables,
  DeleteProjectMemberDocument,
} from "@/generated/graphql";

export function useProjectMemberService() {
  const [createProjectMember] = useMutation<
    CreateProjectMemberMutation,
    CreateProjectMemberMutationVariables
  >(CreateProjectMemberDocument);

  const [updateProjectMember] = useMutation<
    UpdateProjectMemberMutation,
    UpdateProjectMemberMutationVariables
  >(UpdateProjectMemberDocument);

  const [deleteProjectMember] = useMutation<
    DeleteProjectMemberMutation,
    DeleteProjectMemberMutationVariables
  >(DeleteProjectMemberDocument);

  function useGetProjectMembers(id: string) {
    return useQuery<GetProjectMembersQuery, GetProjectMembersQueryVariables>(
      GetProjectMembersDocument,
      {
        variables: { projectId: id },
      }
    );
  }

  function useCreateProjectMember(token: string) {
    return createProjectMember({ variables: { token } });
  }

  function useUpdateProjectMember(
    projectId: string,
    userId: string,
    authority: Auth
  ) {
    return updateProjectMember({
      variables: { projectId, userId, authority },
    });
  }

  function useDeleteProjectMember(projectId: string, userId: string) {
    return deleteProjectMember({ variables: { projectId, userId } });
  }

  return {
    useGetProjectMembers,
    useCreateProjectMember,
    useUpdateProjectMember,
    useDeleteProjectMember,
  };
}
