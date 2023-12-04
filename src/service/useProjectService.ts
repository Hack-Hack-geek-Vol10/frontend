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
