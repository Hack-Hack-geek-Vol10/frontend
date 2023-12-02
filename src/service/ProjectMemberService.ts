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

export const useGetProjectMembers = (projectId: string) => {
  try {
    useQuery<GetProjectMembersQuery, GetProjectMembersQueryVariables>(
      GetProjectMembersDocument,
      {
        variables: { projectId },
      }
    );
  } catch (error) {
    console.log("ServicesError" + error);
  }
};

export const useCreateProjectMember = async (token: string) => {
  try {
    useMutation<
      CreateProjectMemberMutation,
      CreateProjectMemberMutationVariables
    >(CreateProjectMemberDocument, {
      variables: { token },
    });
  } catch (error) {
    console.log("ServicesError" + error);
  }
};

export const useUpdateProjectMember = async (
  projectId: string,
  userId: string,
  authority: Auth
) => {
  try {
    useMutation<
      UpdateProjectMemberMutation,
      UpdateProjectMemberMutationVariables
    >(UpdateProjectMemberDocument, {
      variables: { projectId, userId, authority },
    });
  } catch (error) {
    console.log("ServicesError" + error);
  }
};

export const useDeleteProjectMember = async (
  projectId: string,
  userId: string
) => {
  try {
    useMutation<
      DeleteProjectMemberMutation,
      DeleteProjectMemberMutationVariables
    >(DeleteProjectMemberDocument, {
      variables: { projectId, userId },
    });
  } catch (error) {
    console.log("ServicesError" + error);
  }
};
