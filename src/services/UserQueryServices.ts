import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import { GET_USER } from "@/repositories/userRepositories";

class UserQueryServices {
  private client: ApolloClient<NormalizedCacheObject>;
  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  async getUser(userId: string) {
    const response = await this.client.query({
      query: GET_USER,
      variables: { userId },
    });
    return response.data.projectMembers;
  }
}
export default UserQueryServices;
