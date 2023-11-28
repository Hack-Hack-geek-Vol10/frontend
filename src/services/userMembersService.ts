import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "@/repositories/userRepositories";

class UsersMutationServices {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }
  async createUser(name: string) {
    const response = await this.client.mutate({
      mutation: CREATE_USER,
      variables: { name },
    });

    return response.data.createUser;
  }
  async updateUser(userId: string, name: string) {
    const response = await this.client.mutate({
      mutation: UPDATE_USER,
      variables: { userId, name },
    });

    return response.data.updateUser;
  }
  async DelateUser(userId: string) {
    const response = await this.client.mutate({
      mutation: DELETE_USER,
      variables: { userId },
    });

    return response.data.deleteUser;
  }
}

export default UsersMutationServices;
