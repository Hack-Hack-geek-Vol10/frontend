import { useMutation } from "@apollo/client";

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

export default function useUsersRepository() {
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

  function CreateUserRepository(name: string) {
    try {
      const response = createUser({ variables: { name } });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  function UpdateUserRepository(userId: string, name: string) {
    try {
      const response = updateUser({
        variables: { userId, name },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  function DeleteUserRepository(userId: string) {
    try {
      const response = deleteUser({
        variables: { userId },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    CreateUserRepository,
    UpdateUserRepository,
    DeleteUserRepository,
  };
}
