import { useQuery, useMutation } from "@apollo/client";
import {
  GetUserQuery,
  GetUserQueryVariables,
  GetUserDocument,
} from "@/generated/graphql";

import {
  CreateUserMutation,
  CreateUserDocument,
  CreateUserMutationVariables,
} from "@/generated/graphql";

export const useCreateUser = () => {
  const [createUserMutation, { data, loading, error }] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CreateUserDocument);

  return { createUserMutation, data, loading, error };
};

// export const UpdateUser = async (userId: string, name: string) => {
//   try {
//     useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
//       UpdateUserDocument,
//       {
//         variables: { userId, name },
//       }
//     );
//   } catch (error) {
//     console.log("ServicesError" + error);
//   }
// };

// export const DeleteUser = async (userId: string) => {
//   try {
//     useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
//       DeleteUserDocument,
//       {
//         variables: { userId },
//       }
//     );
//   } catch (error) {
//     console.log("ServicesError" + error);
//   }
// };
