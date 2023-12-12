import { useSubscription, useMutation, useQuery } from "@apollo/client";
import {
  PostEditorDocument,
  PostEditorSubscription,
  PostEditorSubscriptionVariables,
} from "@/generated/graphql";
import {
  CreateSaveDocument,
  CreateSaveMutation,
  CreateSaveMutationVariables,
} from "@/generated/graphql";

import {
  GetSaveDocument,
  GetSaveQueryVariables,
  GetSaveQuery,
} from "@/generated/graphql";

const useEditorSubscriptionService = (userId: string) => {
  const { data, loading, error } = useSubscription<
    PostEditorSubscription,
    PostEditorSubscriptionVariables
  >(PostEditorDocument, {
    variables: {
      userId: userId,
    },
  });

  return { data, loading, error };
};

const useCreateSaveService = (
  editor: string,
  object: string,
  projectId: string
) => {
  const [createSave, { data, loading, error }] = useMutation<
    CreateSaveMutation,
    CreateSaveMutationVariables
  >(CreateSaveDocument, {
    variables: {
      input: {
        editor: editor,
        object: object,
        projectId: projectId,
      },
    },
  });

  return { createSave, data, loading, error };
};

export { useEditorSubscriptionService, useCreateSaveService };
