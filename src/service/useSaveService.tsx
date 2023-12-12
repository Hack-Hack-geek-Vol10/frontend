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
export { useEditorSubscriptionService };

const useSaveService = (userId: string) => {
  const [createSave] = useMutation<
    CreateSaveMutation,
    CreateSaveMutationVariables
  >(CreateSaveDocument);

  const { data, loading, error } = useQuery<
    GetSaveQuery,
    GetSaveQueryVariables
  >(GetSaveDocument);

  return { createSave, data, loading, error };
};
