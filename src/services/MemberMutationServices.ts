import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  CREATE_PROJECT_MEMBER,
  UPDATE_PROJECT_MEMBER,
} from "@/repositories/membersRepositories";

class MemberMutationServices {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  async createProjectMember(token: string) {
    const response = await this.client.mutate({
      mutation: CREATE_PROJECT_MEMBER,
      variables: { token },
    });

    return response.data.createProjectMember;
  }

  async updateProjectMember(
    projectId: string,
    userId: string,
    authority: string
  ) {
    const response = await this.client.mutate({
      mutation: UPDATE_PROJECT_MEMBER,
      variables: { projectId, userId, authority },
    });

    return response.data.updateProjectMember;
  }
  async deleteProjectMember(projectId: string, userId: string) {
    const response = await this.client.mutate({
      mutation: UPDATE_PROJECT_MEMBER,
      variables: { projectId, userId },
    });

    return response.data.deleteProjectMember;
  }
}

export default MemberMutationServices;
