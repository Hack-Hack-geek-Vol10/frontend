import { useMutation } from "@apollo/client";

import {
  CreateProjectMemberMutation,
  CreateProjectMemberMutationVariables,
  CreateProjectMemberDocument,
  Auth,
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

export default function useProjectMemberRepository() {
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

  function CreateProjectMemberRepository(token: string) {
    try {
      const response = createProjectMember({ variables: { token } });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  function UpdateProjectMemberRepository(
    projectId: string,
    userId: string,
    authority: Auth
  ) {
    try {
      const response = updateProjectMember({
        variables: { projectId, userId, authority },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  function DeleteProjectMemberRepository(projectId: string, userId: string) {
    try {
      const response = deleteProjectMember({
        variables: { projectId, userId },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    CreateProjectMemberRepository,
    UpdateProjectMemberRepository,
    DeleteProjectMemberRepository,
  };
}
