import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
  query GetProject($projectId: ID!) {
    project(projectId: $projectId) {
      projectId
      title
      lastImage
      isPersonal
      updatedAt
    }
  }
`;

export const GET_PROJECTS = gql`
  query GetProjects($userId: ID!) {
    projects(userId: $userId) {
      projectId
      title
      lastImage
      isPersonal
      updatedAt
    }
  }
`;
export const CREATE_PROJECT = gql`
  mutation CreateProject($title: String!) {
    createProject(title: $title) {
      projectId
      title
      lastImage
      isPersonal
      updatedAt
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($projectId: ID!, $title: String,lastImage: Upload) {
    updateProject(projectId: $projectId, title: $title ,lastImage: $lastImage) {
      projectId
      title
      lastImage
      isPersonal
      updatedAt
    }
  }
`;
export const DELETE_PROJECT = gql`
  mutation DeleteProject($projectId: ID!) {
    deleteProject(projectId: $projectId)
  }
`;
export const CREATE_INVITE_LINK = gql`
  mutation CreateInviteLink($projectId: ID!, $authority: Auth!) {
    createInviteLink(projectId: $projectId, authority: $authority) {
      inviteLink
    }
  }
`;
