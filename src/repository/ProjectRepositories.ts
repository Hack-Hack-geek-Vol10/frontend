import { useQuery, useMutation } from "@apollo/client";
import {
  GetProjectQuery,
  GetProjectQueryVariables,
  GetProjectDocument,
} from "@/generated/graphql";
import {
  CreateProjectMutation,
  CreateProjectMutationVariables,
  CreateProjectDocument,
} from "@/generated/graphql";
import {
  UpdateProjectMutation,
  UpdateProjectMutationVariables,
  UpdateProjectDocument,
} from "@/generated/graphql";
import {
  DeleteProjectMutation,
  DeleteProjectMutationVariables,
  DeleteProjectDocument,
} from "@/generated/graphql";

export function useProjectService() {
  const [createProject] = useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument);

  const [updateProject] = useMutation<
    UpdateProjectMutation,
    UpdateProjectMutationVariables
  >(UpdateProjectDocument);

  const [deleteProject] = useMutation<
    DeleteProjectMutation,
    DeleteProjectMutationVariables
  >(DeleteProjectDocument);

  function useGetProject(id: string) {
    return useQuery<GetProjectQuery, GetProjectQueryVariables>(
      GetProjectDocument,
      {
        variables: { projectId: id },
      }
    );
  }

  function useCreateProject(title: string) {
    return createProject({ variables: { title: title } });
  }

  function useUpdateProject(
    projectId: string,
    title: string,
    lastImage: string
  ) {
    return updateProject({ variables: { projectId, title, lastImage } });
  }
  function useDeleteProject(projectId: string) {
    return deleteProject({ variables: { projectId } });
  }

  return {
    useGetProject,
    useCreateProject,
    useUpdateProject,
    useDeleteProject,
  };
}
