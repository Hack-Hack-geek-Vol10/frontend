import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import { GET_PROJECT, GET_PROJECTS } from "@/repositories/projectsRepositories";

class projectsQueryServices {
  private client: ApolloClient<NormalizedCacheObject>;
  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  async getProject(projectId: string) {
    const response = await this.client.query({
      query: GET_PROJECT,
      variables: { projectId },
    });
    return response.data.projectMembers;
  }

  async getProjects(userId: string) {
    const response = await this.client.query({
      query: GET_PROJECTS,
      variables: { userId },
    });
    return response.data.projects;
  }
}
export default projectsQueryServices;
