import { useQuery, useMutation } from "@apollo/client";
import {
  GetProjectMembersQuery,
  GetProjectMembersQueryVariables,
  GetProjectMembersDocument,
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

const useGetProjectMemberService = (projectId: string) => {
  const { data, loading, error } = useQuery<
    GetProjectMembersQuery,
    GetProjectMembersQueryVariables
  >(GetProjectMembersDocument, {
    variables: {
      projectId: projectId,
    },
  });

  return { data, loading, error };
};
const useCreateProjectMemberService = () => {
  const [createProjectMember, { data, loading, error }] = useMutation<
    CreateProjectMemberMutation,
    CreateProjectMemberMutationVariables
  >(CreateProjectMemberDocument);

  return { createProjectMember, data, loading, error };
};

const useUpdateProjectMemberService = () => {
  const [updateProjectMember, { loading, error }] = useMutation<
    UpdateProjectMemberMutation,
    UpdateProjectMemberMutationVariables
  >(UpdateProjectMemberDocument);

  return { updateProjectMember, loading, error };
};
const useDeleteProjectMemberService = () => {
  const [deleteProjectMember, { loading, error }] = useMutation<
    DeleteProjectMemberMutation,
    DeleteProjectMemberMutationVariables
  >(DeleteProjectMemberDocument);

  return { deleteProjectMember, loading, error };
};

export {
  useCreateProjectMemberService,
  useUpdateProjectMemberService,
  useDeleteProjectMemberService,
  useGetProjectMemberService,
};
