import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import { GET_PROJECT_MEMBERS } from "@/repositories/membersRepository";

class MemberQuery {
  private client: ApolloClient<NormalizedCacheObject>;
  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  async getProjectMembers(projectId: string) {
    const response = await this.client.query({
      query: GET_PROJECT_MEMBERS,
      variables: { projectId },
    });
    return response.data.projectMembers;
  }
}
