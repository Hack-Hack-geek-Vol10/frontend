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

const useEditorSubscriptionService = (projectId: string) => {
  const { data, loading, error } = useSubscription<
    PostEditorSubscription,
    PostEditorSubscriptionVariables
  >(PostEditorDocument, {
    variables: {
      projectId: projectId,
    },
  });

  return { data, loading, error };
};

const useCreateSaveService = () => {
  const [createSave, { data, loading, error }] = useMutation<
    CreateSaveMutation,
    CreateSaveMutationVariables
  >(CreateSaveDocument);

  return { createSave, data, loading, error };
};

const useGetSaveService = (projectId: string) => {
  const { data, loading, error } = useQuery<
    GetSaveQuery,
    GetSaveQueryVariables
  >(GetSaveDocument, {
    variables: {
      projectId: projectId,
    },
  });

  return { data, loading, error };
};

export {
  useGetSaveService,
  useEditorSubscriptionService,
  useCreateSaveService,
};
