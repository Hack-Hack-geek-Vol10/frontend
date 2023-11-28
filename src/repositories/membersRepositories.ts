import { gql } from "@apollo/client";

export const GET_PROJECT_MEMBERS = gql`
  query GetProjectMembers($projectId: ID!) {
    projectMembers(projectId: $projectId) {
      projectId
      userId
      authority
    }
  }
`;
export const CREATE_PROJECT_MEMBER = gql`
  mutation CreateProjectMember($token: String!) {
    createProjectMember(token: $token) {
      projectId
      userId
      authority
    }
  }
`;
export const UPDATE_PROJECT_MEMBER = gql`
  mutation UpdateProjectMember(
    $projectId: ID!
    $userId: ID!
    $authority: Auth
  ) {
    updateProjectMember(
      projectId: $projectId
      userId: $userId
      authority: $authority
    ) {
      projectId
      userId
      authority
    }
  }
`;

export const DELETE_PROJECT_MEMBER = gql`
  mutation DeleteProjectMember($projectId: ID!, $userId: ID!) {
    deleteProjectMember(projectId: $projectId, userId: $userId)
  }
`;
