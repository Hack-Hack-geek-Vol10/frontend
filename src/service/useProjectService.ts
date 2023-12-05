import { useMutation, useQuery } from "@apollo/client";
import {
  CreateProjectDocument,
  CreateProjectMutation,
  CreateProjectMutationVariables,
} from "@/generated/graphql";
import {
  GetUserProjectsDocument,
  GetUserProjectsQuery,
  GetUserProjectsQueryVariables,
} from "@/generated/graphql";

import {
  GetProjectDocument,
  GetProjectQuery,
  GetProjectQueryVariables,
} from "@/generated/graphql";
import {
  UpdateProjectDocument,
  UpdateProjectMutation,
  UpdateProjectMutationVariables,
} from "@/generated/graphql";

import {
  DeleteProjectDocument,
  DeleteProjectMutation,
  DeleteProjectMutationVariables,
} from "@/generated/graphql";

export const useCreateProject = () => {
  const [createProject, { data, loading, error }] = useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument);

  return { createProject, data, loading, error };
};

export const useGetUserProjects = (userId: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useQuery<
    GetUserProjectsQuery,
    GetUserProjectsQueryVariables
  >(GetUserProjectsDocument, {
    variables: { userId },
  });

  return { data, loading, error };
};

export const useGetProject = (projectId: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useQuery<
    GetProjectQuery,
    GetProjectQueryVariables
  >(GetProjectDocument, {
    variables: { projectId },
  });

  return { data, loading, error };
};

export const useUpdateProject = () => {
  const [updateProject, { data, loading, error }] = useMutation<
    UpdateProjectMutation,
    UpdateProjectMutationVariables
  >(UpdateProjectDocument);

  return { updateProject, data, loading, error };
};

export const useDeleteProject = () => {
  const [deleteProject, { data, loading, error }] = useMutation<
    DeleteProjectMutation,
    DeleteProjectMutationVariables
  >(DeleteProjectDocument);

  return { deleteProject, data, loading, error };
};
