import useUserRepository from "@/repository/useUsersRepositories";
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import React from "react";
export default function useUseService() {
  const { currentUser } = useContext(AuthContext);
  const {
    GetUserRepository,
    CreateUserRepository,
    UpdateUserRepository,
    DeleteUserRepository,
  } = useUserRepository();

  const GetUserService = (userId: string) => {
    try {
      const { data, loading, error } = GetUserRepository(userId);
      if (loading) {
        console.log("Loading");
      }
      if (error) {
        console.log("Error");
      }
      return data;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const CreateUserService = async (userId: string, name: string) => {
    try {
      GetUserRepository(userId);
      if (currentUser?.uid === userId) {
        const response = await CreateUserRepository(name);
        console.log("登録完了");
        return response;
      } else {
        console.log("登録不要");
      }
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const UpdateUserService = async (userId: string, name: string) => {
    try {
      const response = await UpdateUserRepository(userId, name);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const DeleteUserService = async (userId: string) => {
    try {
      const response = await DeleteUserRepository(userId);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  return {
    GetUserService,
    CreateUserService,
    UpdateUserService,
    DeleteUserService,
  };
}
