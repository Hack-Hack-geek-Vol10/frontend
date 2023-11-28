import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  CREATE_INVITE_LINK,
} from "@/repositories/projectsRepositories";

class ProjectMutationServices {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  async createProject(title: string) {
    const response = await this.client.mutate({
      mutation: CREATE_PROJECT,
      variables: { title },
    });

    return response.data.deleteProjectMember;
  }
  async updateProject(projectId: string, title: string, lastImage: any) {
    const response = await this.client.mutate({
      mutation: UPDATE_PROJECT,
      variables: { projectId, title, lastImage },
    });

    return response.data.updateProjectMember;
  }
  async deleteProject(projectId: string) {
    const response = await this.client.mutate({
      mutation: DELETE_PROJECT,
      variables: { projectId },
    });

    return response.data.deleteProjectMember;
  }
  async createInviteLink(projectId: string, authority: string) {
    const response = await this.client.mutate({
      mutation: CREATE_INVITE_LINK,
      variables: { projectId, authority },
    });

    return response.data.createInviteLink;
  }
}

export default ProjectMutationServices;
