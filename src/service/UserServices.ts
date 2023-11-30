import useUserRepository from "@/repository/UsersRepositories";
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";

export default function useUseService() {
  const { currentUser } = useContext(AuthContext);
  const {
    GetUserRepository,
    CreateUserRepository,
    UpdateUserRepository,
    DeleteUserRepository,
  } = useUserRepository();

  const useGetUser = (userId: string) => {
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

  const useCreateUser = async (uid: string, name: string) => {
    try {
      GetUserRepository(uid);
      switch (!currentUser?.uid) {
        case true:
          const response = await CreateUserRepository(name);
          return response;
        case false:
          break;
      }
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const useUpdateUser = async (userId: string, name: string) => {
    try {
      const response = await UpdateUserRepository(userId, name);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const useDeleteUser = async (userId: string) => {
    try {
      const response = await DeleteUserRepository(userId);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  return { useGetUser, useCreateUser, useUpdateUser, useDeleteUser };
}
