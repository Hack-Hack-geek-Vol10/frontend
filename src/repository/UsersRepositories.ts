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

export default function useUserService() {
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

  function GetUser(id: string) {
    return useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, {
      variables: { userId: id },
    });
  }

  function CreateUser(name: string) {
    return createUser({ variables: { name } });
  }

  function UpdateUser(userId: string, name: string) {
    return updateUser({ variables: { userId, name } });
  }
  function DeleteUser(userId: string) {
    return deleteUser({ variables: { userId } });
  }

  return { GetUser, CreateUser, UpdateUser, DeleteUser };
}
