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

export default function ProjectMemberRepository() {
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

  function GetProjectMembers(id: string) {
    return useQuery<GetProjectMembersQuery, GetProjectMembersQueryVariables>(
      GetProjectMembersDocument,
      {
        variables: { projectId: id },
      }
    );
  }

  function CreateProjectMember(token: string) {
    return createProjectMember({ variables: { token } });
  }

  function UpdateProjectMember(
    projectId: string,
    userId: string,
    authority: Auth
  ) {
    return updateProjectMember({
      variables: { projectId, userId, authority },
    });
  }

  function DeleteProjectMember(projectId: string, userId: string) {
    return deleteProjectMember({ variables: { projectId, userId } });
  }

  return {
    GetProjectMembers,
    CreateProjectMember,
    UpdateProjectMember,
    DeleteProjectMember,
  };
}
