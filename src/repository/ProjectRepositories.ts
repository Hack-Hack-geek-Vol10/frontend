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

export default function ProjectRepository() {
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

  function GetProject(id: string) {
    return useQuery<GetProjectQuery, GetProjectQueryVariables>(
      GetProjectDocument,
      {
        variables: { projectId: id },
      }
    );
  }

  function CreateProject(title: string) {
    return createProject({ variables: { title: title } });
  }

  function UpdateProject(projectId: string, title: string, lastImage: string) {
    return updateProject({ variables: { projectId, title, lastImage } });
  }
  function DeleteProject(projectId: string) {
    return deleteProject({ variables: { projectId } });
  }

  return {
    GetProject,
    CreateProject,
    UpdateProject,
    DeleteProject,
  };
}
