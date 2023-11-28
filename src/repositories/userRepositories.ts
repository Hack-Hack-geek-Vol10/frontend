import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(userId: $userId) {
      userId
      name
      email
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    createUser(name: $name) {
      userId
      name
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($userId: ID!, $name: String) {
    updateUser(userId: $userId, name: $name) {
      userId
      name
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      userId
      name
      email
    }
  }
`;
