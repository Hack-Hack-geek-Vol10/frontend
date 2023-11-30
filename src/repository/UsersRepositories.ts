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

export default function UsersRepository() {
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

  function GetUserRepository(id: string) {
    return useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, {
      variables: { userId: id },
    });
  }

  function CreateUserRepository(name: string) {
    return createUser({ variables: { name } });
  }

  function UpdateUserRepository(userId: string, name: string) {
    return updateUser({ variables: { userId, name } });
  }
  function DeleteUserRepository(userId: string) {
    return deleteUser({ variables: { userId } });
  }

  return {
    GetUserRepository,
    CreateUserRepository,
    UpdateUserRepository,
    DeleteUserRepository,
  };
}
