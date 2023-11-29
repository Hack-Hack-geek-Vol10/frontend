import { useQuery, useMutation } from "@apollo/client";
import {
  GetUserQuery,
  GetUserQueryVariables,
  GetUserDocument,
} from "@/generated/graphql";

import {
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserDocument,
} from "@/generated/graphql";

import {
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserDocument,
} from "@/generated/graphql";

import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  DeleteUserDocument,
} from "@/generated/graphql";

export function useUserService() {
  const [createUser] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CreateUserDocument);

  const [updateUser] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UpdateUserDocument);

  const [deleteUser] = useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(DeleteUserDocument);

  function useGetUser(id: string) {
    return useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, {
      variables: { userId: id },
    });
  }

  function useCreateUser(name: string) {
    return createUser({ variables: { name } });
  }

  function useUpdateUser(userId: string, name: string) {
    return updateUser({ variables: { userId, name } });
  }
  function useDeleteUser(userId: string) {
    return deleteUser({ variables: { userId } });
  }

  return { useGetUser, useCreateUser, useUpdateUser, useDeleteUser };
}
