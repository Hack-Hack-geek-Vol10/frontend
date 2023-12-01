import useUserRepository from "@/repository/useUsersRepositories";
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import { useQuery } from "@apollo/client";

const CreateUserService = async (userId: string, name: string) => {
  const { CreateUserRepository } = useUserRepository();
  const { currentUser } = useContext(AuthContext);

  try {
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
  const { UpdateUserRepository } = useUserRepository();
  try {
    const response = await UpdateUserRepository(userId, name);
    return response;
  } catch (error) {
    console.log("ServicesError" + error);
  }
};

const DeleteUserService = async (userId: string) => {
  const { DeleteUserRepository } = useUserRepository();
  try {
    const response = await DeleteUserRepository(userId);
    return response;
  } catch (error) {
    console.log("ServicesError" + error);
  }
};

export { CreateUserService, UpdateUserService, DeleteUserService };
