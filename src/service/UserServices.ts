import useUserRepository from "@/repository/UsersRepositories";
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

  const GetUserService = React.useCallback((userId: string) => {
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
  }, []);

  const CreateUserService = React.useCallback(
    async (userId: string, name: string) => {
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
    },
    [currentUser?.uid, CreateUserRepository, GetUserRepository]
  );

  const UpdateUserService = React.useCallback(
    async (userId: string, name: string) => {
      try {
        const response = await UpdateUserRepository(userId, name);
        return response;
      } catch (error) {
        console.log("ServicesError" + error);
      }
    },
    []
  );

  const DeleteUserService = React.useCallback(async (userId: string) => {
    try {
      const response = await DeleteUserRepository(userId);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  }, []);

  return {
    GetUserService,
    CreateUserService,
    UpdateUserService,
    DeleteUserService,
  };
}
