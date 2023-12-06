import { useQuery, useMutation } from "@apollo/client";

import {
  GetProjectMembersQuery,
  GetProjectMembersQueryVariables,
  GetProjectMembersDocument,
  Auth,
} from "@/generated/graphql";

import {
  CreateProjectMemberMutation,
  CreateProjectMemberMutationVariables,
  CreateProjectMemberDocument,
} from "@/generated/graphql";

import {
  UpdateProjectMemberMutation,
  UpdateProjectMemberMutationVariables,
  UpdateProjectMemberDocument,
} from "@/generated/graphql";

import {
  DeleteProjectMemberMutation,
  DeleteProjectMemberMutationVariables,
  DeleteProjectMemberDocument,
} from "@/generated/graphql";
