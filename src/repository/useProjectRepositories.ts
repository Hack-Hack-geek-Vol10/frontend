import { useQuery, useMutation } from "@apollo/client";
import {
  GetProjectQuery,
  GetProjectQueryVariables,
  GetProjectDocument,
} from "@/generated/graphql";
import {
  GetUserProjectsDocument,
  GetUserProjectsQuery,
  GetUserProjectsQueryVariables,
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

export default function useProjectRepository() {
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

  function GetProjectRepository(projectId: string) {
    return useQuery<GetProjectQuery, GetProjectQueryVariables>(
      GetProjectDocument,
      {
        variables: { projectId: projectId },
      }
    );
  }
  function GetProjectsRepository(userId: string) {
    return useQuery<GetUserProjectsQuery, GetUserProjectsQueryVariables>(
      GetProjectDocument,
      {
        variables: { userId: userId },
      }
    );
  }

  function CreateProjectRepository(title: string) {
    return createProject({ variables: { title: title } });
  }

  function UpdateProjectRepository(
    projectId: string,
    title: string,
    lastImage: string
  ) {
    return updateProject({ variables: { projectId, title, lastImage } });
  }
  function DeleteProjectRepository(projectId: string) {
    return deleteProject({ variables: { projectId } });
  }

  return {
    GetProjectRepository,
    GetProjectsRepository,
    CreateProjectRepository,
    UpdateProjectRepository,
    DeleteProjectRepository,
  };
}
