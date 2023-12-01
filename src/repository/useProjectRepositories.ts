import { useMutation } from "@apollo/client";

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

  function CreateProjectRepository(title: string) {
    try {
      const response = createProject({ variables: { title } });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  function UpdateProjectRepository(
    projectId: string,
    title: string,
    lastImage: string
  ) {
    try {
      const response = updateProject({
        variables: { projectId, title, lastImage },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  function DeleteProjectRepository(projectId: string) {
    try {
      const response = deleteProject({ variables: { projectId } });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    CreateProjectRepository,
    UpdateProjectRepository,
    DeleteProjectRepository,
  };
}
