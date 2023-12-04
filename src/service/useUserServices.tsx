import { useQuery, useMutation } from "@apollo/client";
import {
  GetUserDocument,
  GetUserQuery,
  GetUserQueryVariables,
} from "@/generated/graphql";

import {
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserDocument,
} from "@/generated/graphql";

export const useGetUser = (userId: string) => {
  const { data, loading, error } = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(GetUserDocument, {
    variables: { userId: userId },
  });
  return { data, loading, error };
};

export const useCreateUser = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [createUser, { data, loading, error }] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CreateUserDocument);
  return { createUser, data, loading, error };
};
