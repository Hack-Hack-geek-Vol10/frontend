import useUserRepository from "@/repository/UsersRepositories";
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
export function useUseService() {
  const { currentUser } = useContext(AuthContext);
  const { GetUser, CreateUser, UpdateUser, DeleteUser } = useUserRepository();

  const useGetUser = (userId: string) => {
    try {
      const { data, loading, error } = GetUser(userId);
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

  const useCreateUser = async (name: string) => {
    try {
      await GetUser(currentUser.uid);
      switch (!currentUser.uid) {
        case true:
          const response = await CreateUser(name);
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
      const response = await UpdateUser(userId, name);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  const useDeleteUser = async (userId: string) => {
    try {
      const response = await DeleteUser(userId);
      return response;
    } catch (error) {
      console.log("ServicesError" + error);
    }
  };

  return { useGetUser, useCreateUser, useUpdateUser, useDeleteUser };
}
