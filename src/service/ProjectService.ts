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

const useGetProject = (projectId: string) => {
  try {
    useQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, {
      variables: { projectId },
    });
  } catch (error) {
    console.log("ServicesError" + error);
  }
};

const useCreateProject = async (title: string) => {
  try {
    useMutation<CreateProjectMutation, CreateProjectMutationVariables>(
      CreateProjectDocument,
      {
        variables: { title: title },
      }
    );
  } catch (error) {
    console.log("ServicesError" + error);
  }
  const useUpdateProject = async (
    projectId: string,
    title: string,
    lastImage: string
  ) => {
    try {
      useMutation<UpdateProjectMutation, UpdateProjectMutationVariables>(
        UpdateProjectDocument,
        {
          variables: { projectId, title, lastImage },
        }
      );
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const useDeleteProject = async (projectId: string) => {
    try {
      useMutation<DeleteProjectMutation, DeleteProjectMutationVariables>(
        DeleteProjectDocument,
        {
          variables: { projectId },
        }
      );
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  return {
    useGetProject,
    useCreateProject,
    useUpdateProject,
    useDeleteProject,
  };
};
