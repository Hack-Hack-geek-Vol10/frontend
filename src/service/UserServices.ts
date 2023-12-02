import { useQuery, useMutation } from "@apollo/client";
import {
  GetUserQuery,
  GetUserQueryVariables,
  GetUserDocument,
} from "@/generated/graphql";

import { CreateUserMutation, CreateUserDocument } from "@/generated/graphql";

import { UpdateUserMutation, UpdateUserDocument } from "@/generated/graphql";

import { DeleteUserMutation, DeleteUserDocument } from "@/generated/graphql";

export const GetUser = (userId: string) => {
  try {
    useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, {
      variables: { userId },
    });
  } catch (error) {
    console.log("ServicesError" + error);
  }
};

export const useCreateUser = async (name: string) => {
  try {
    useMutation<CreateUserMutation>(CreateUserDocument);
  } catch (error) {
    console.log("ServicesError" + error);
  }
};
export const useUpdateUser = async (userId: string, name: string) => {
  try {
    useMutation<UpdateUserMutation>(UpdateUserDocument);
  } catch (error) {
    console.log("ServicesError" + error);
  }
};

export const useDeleteUser = async (userId: string) => {
  try {
    useMutation<DeleteUserMutation>(DeleteUserDocument);
  } catch (error) {
    console.log("ServicesError" + error);
  }
};
