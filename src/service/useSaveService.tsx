import { useSubscription } from "@apollo/client";
import {
  PostEditorDocument,
  PostEditorSubscription,
  PostEditorSubscriptionVariables,
} from "@/generated/graphql";

const useEditorSubscriptionService = (userId: string) => {
  const { data, loading, error } = useSubscription<
    PostEditorSubscription,
    PostEditorSubscriptionVariables
  >(PostEditorDocument, {
    variables: { userId },
  });
  return {
    data,
    loading,
    error,
  };
};

export { useEditorSubscriptionService };
