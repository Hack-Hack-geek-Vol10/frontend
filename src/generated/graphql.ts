import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export enum Auth {
  Owner = 'owner',
  ReadOnly = 'read_only',
  ReadWrite = 'read_write'
}

export type CreateSaveInput = {
  editor: Scalars['String']['input'];
  object: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createInviteLink?: Maybe<Scalars['String']['output']>;
  createProject?: Maybe<Project>;
  createProjectMember?: Maybe<ProjectMember>;
  createSave?: Maybe<Scalars['ID']['output']>;
  createUser?: Maybe<User>;
  deleteProject?: Maybe<Scalars['String']['output']>;
  deleteProjectMember?: Maybe<Scalars['String']['output']>;
  deleteUser?: Maybe<User>;
  updateProject?: Maybe<Project>;
  updateProjectMember?: Maybe<ProjectMember>;
  updateUser?: Maybe<User>;
};


export type MutationCreateInviteLinkArgs = {
  authority: Auth;
  projectId: Scalars['ID']['input'];
};


export type MutationCreateProjectArgs = {
  title: Scalars['String']['input'];
};


export type MutationCreateProjectMemberArgs = {
  token: Scalars['String']['input'];
};


export type MutationCreateSaveArgs = {
  input: CreateSaveInput;
};


export type MutationCreateUserArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteProjectArgs = {
  projectId: Scalars['ID']['input'];
};


export type MutationDeleteProjectMemberArgs = {
  projectId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationUpdateProjectArgs = {
  lastImage?: InputMaybe<Scalars['Upload']['input']>;
  projectId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProjectMemberArgs = {
  authority?: InputMaybe<Auth>;
  projectId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type Project = {
  __typename?: 'Project';
  isPersonal: Scalars['Boolean']['output'];
  lastImage: Scalars['String']['output'];
  projectId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ProjectMember = {
  __typename?: 'ProjectMember';
  authority: Auth;
  projectId: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  project?: Maybe<Project>;
  projectMembers?: Maybe<Array<Maybe<ProjectMember>>>;
  projects?: Maybe<Array<Maybe<Project>>>;
  save?: Maybe<Save>;
  user?: Maybe<User>;
};


export type QueryProjectArgs = {
  projectId: Scalars['ID']['input'];
};


export type QueryProjectMembersArgs = {
  projectId: Scalars['ID']['input'];
};


export type QueryProjectsArgs = {
  userId: Scalars['ID']['input'];
};


export type QuerySaveArgs = {
  projectId: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  userId: Scalars['ID']['input'];
};

export type Save = {
  __typename?: 'Save';
  editor: Scalars['String']['output'];
  object: Scalars['String']['output'];
  saveId: Scalars['ID']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  postEditor?: Maybe<Save>;
};


export type SubscriptionPostEditorArgs = {
  userId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type CreateInviteLinkMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
  authority: Auth;
}>;


export type CreateInviteLinkMutation = { __typename?: 'Mutation', createInviteLink?: string | null };

export type GetProjectMembersQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type GetProjectMembersQuery = { __typename?: 'Query', projectMembers?: Array<{ __typename?: 'ProjectMember', projectId: string, userId: string, authority: Auth } | null> | null };

export type CreateProjectMemberMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type CreateProjectMemberMutation = { __typename?: 'Mutation', createProjectMember?: { __typename?: 'ProjectMember', projectId: string, userId: string, authority: Auth } | null };

export type UpdateProjectMemberMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  authority?: InputMaybe<Auth>;
}>;


export type UpdateProjectMemberMutation = { __typename?: 'Mutation', updateProjectMember?: { __typename?: 'ProjectMember', projectId: string, userId: string, authority: Auth } | null };

export type DeleteProjectMemberMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
}>;


export type DeleteProjectMemberMutation = { __typename?: 'Mutation', deleteProjectMember?: string | null };

export type GetProjectQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type GetProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', projectId: string, title: string, lastImage: string, isPersonal: boolean, updatedAt: string } | null };

export type GetUserProjectsQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type GetUserProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', projectId: string, title: string, lastImage: string, isPersonal: boolean, updatedAt: string } | null> | null };

export type CreateProjectMutationVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject?: { __typename?: 'Project', projectId: string, title: string, lastImage: string, isPersonal: boolean, updatedAt: string } | null };

export type UpdateProjectMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  lastImage?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject?: { __typename?: 'Project', projectId: string, title: string, lastImage: string, isPersonal: boolean, updatedAt: string } | null };

export type DeleteProjectMutationVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject?: string | null };

export type PostEditorSubscriptionVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type PostEditorSubscription = { __typename?: 'Subscription', postEditor?: { __typename?: 'Save', saveId: string, editor: string, object: string } | null };

export type CreateSaveMutationVariables = Exact<{
  input: CreateSaveInput;
}>;


export type CreateSaveMutation = { __typename?: 'Mutation', createSave?: string | null };

export type GetSaveQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type GetSaveQuery = { __typename?: 'Query', save?: { __typename?: 'Save', saveId: string, editor: string, object: string } | null };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', userId: string, email: string, name: string } | null };

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', userId: string, email: string, name: string } | null };

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', userId: string, email: string, name: string } | null };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', userId: string, email: string, name: string } | null };


export const CreateInviteLinkDocument = gql`
    mutation CreateInviteLink($projectId: ID!, $authority: Auth!) {
  createInviteLink(projectId: $projectId, authority: $authority)
}
    `;
export type CreateInviteLinkMutationFn = Apollo.MutationFunction<CreateInviteLinkMutation, CreateInviteLinkMutationVariables>;

/**
 * __useCreateInviteLinkMutation__
 *
 * To run a mutation, you first call `useCreateInviteLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInviteLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInviteLinkMutation, { data, loading, error }] = useCreateInviteLinkMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      authority: // value for 'authority'
 *   },
 * });
 */
export function useCreateInviteLinkMutation(baseOptions?: Apollo.MutationHookOptions<CreateInviteLinkMutation, CreateInviteLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInviteLinkMutation, CreateInviteLinkMutationVariables>(CreateInviteLinkDocument, options);
      }
export type CreateInviteLinkMutationHookResult = ReturnType<typeof useCreateInviteLinkMutation>;
export type CreateInviteLinkMutationResult = Apollo.MutationResult<CreateInviteLinkMutation>;
export type CreateInviteLinkMutationOptions = Apollo.BaseMutationOptions<CreateInviteLinkMutation, CreateInviteLinkMutationVariables>;
export const GetProjectMembersDocument = gql`
    query GetProjectMembers($projectId: ID!) {
  projectMembers(projectId: $projectId) {
    projectId
    userId
    authority
  }
}
    `;

/**
 * __useGetProjectMembersQuery__
 *
 * To run a query within a React component, call `useGetProjectMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectMembersQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetProjectMembersQuery(baseOptions: Apollo.QueryHookOptions<GetProjectMembersQuery, GetProjectMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectMembersQuery, GetProjectMembersQueryVariables>(GetProjectMembersDocument, options);
      }
export function useGetProjectMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectMembersQuery, GetProjectMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectMembersQuery, GetProjectMembersQueryVariables>(GetProjectMembersDocument, options);
        }
export function useGetProjectMembersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProjectMembersQuery, GetProjectMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProjectMembersQuery, GetProjectMembersQueryVariables>(GetProjectMembersDocument, options);
        }
export type GetProjectMembersQueryHookResult = ReturnType<typeof useGetProjectMembersQuery>;
export type GetProjectMembersLazyQueryHookResult = ReturnType<typeof useGetProjectMembersLazyQuery>;
export type GetProjectMembersSuspenseQueryHookResult = ReturnType<typeof useGetProjectMembersSuspenseQuery>;
export type GetProjectMembersQueryResult = Apollo.QueryResult<GetProjectMembersQuery, GetProjectMembersQueryVariables>;
export const CreateProjectMemberDocument = gql`
    mutation CreateProjectMember($token: String!) {
  createProjectMember(token: $token) {
    projectId
    userId
    authority
  }
}
    `;
export type CreateProjectMemberMutationFn = Apollo.MutationFunction<CreateProjectMemberMutation, CreateProjectMemberMutationVariables>;

/**
 * __useCreateProjectMemberMutation__
 *
 * To run a mutation, you first call `useCreateProjectMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMemberMutation, { data, loading, error }] = useCreateProjectMemberMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCreateProjectMemberMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMemberMutation, CreateProjectMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMemberMutation, CreateProjectMemberMutationVariables>(CreateProjectMemberDocument, options);
      }
export type CreateProjectMemberMutationHookResult = ReturnType<typeof useCreateProjectMemberMutation>;
export type CreateProjectMemberMutationResult = Apollo.MutationResult<CreateProjectMemberMutation>;
export type CreateProjectMemberMutationOptions = Apollo.BaseMutationOptions<CreateProjectMemberMutation, CreateProjectMemberMutationVariables>;
export const UpdateProjectMemberDocument = gql`
    mutation UpdateProjectMember($projectId: ID!, $userId: ID!, $authority: Auth) {
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
export type UpdateProjectMemberMutationFn = Apollo.MutationFunction<UpdateProjectMemberMutation, UpdateProjectMemberMutationVariables>;

/**
 * __useUpdateProjectMemberMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMemberMutation, { data, loading, error }] = useUpdateProjectMemberMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      userId: // value for 'userId'
 *      authority: // value for 'authority'
 *   },
 * });
 */
export function useUpdateProjectMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectMemberMutation, UpdateProjectMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectMemberMutation, UpdateProjectMemberMutationVariables>(UpdateProjectMemberDocument, options);
      }
export type UpdateProjectMemberMutationHookResult = ReturnType<typeof useUpdateProjectMemberMutation>;
export type UpdateProjectMemberMutationResult = Apollo.MutationResult<UpdateProjectMemberMutation>;
export type UpdateProjectMemberMutationOptions = Apollo.BaseMutationOptions<UpdateProjectMemberMutation, UpdateProjectMemberMutationVariables>;
export const DeleteProjectMemberDocument = gql`
    mutation DeleteProjectMember($projectId: ID!, $userId: ID!) {
  deleteProjectMember(projectId: $projectId, userId: $userId)
}
    `;
export type DeleteProjectMemberMutationFn = Apollo.MutationFunction<DeleteProjectMemberMutation, DeleteProjectMemberMutationVariables>;

/**
 * __useDeleteProjectMemberMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMemberMutation, { data, loading, error }] = useDeleteProjectMemberMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteProjectMemberMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProjectMemberMutation, DeleteProjectMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProjectMemberMutation, DeleteProjectMemberMutationVariables>(DeleteProjectMemberDocument, options);
      }
export type DeleteProjectMemberMutationHookResult = ReturnType<typeof useDeleteProjectMemberMutation>;
export type DeleteProjectMemberMutationResult = Apollo.MutationResult<DeleteProjectMemberMutation>;
export type DeleteProjectMemberMutationOptions = Apollo.BaseMutationOptions<DeleteProjectMemberMutation, DeleteProjectMemberMutationVariables>;
export const GetProjectDocument = gql`
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

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetProjectQuery(baseOptions: Apollo.QueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
      }
export function useGetProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
        }
export function useGetProjectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
        }
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<typeof useGetProjectLazyQuery>;
export type GetProjectSuspenseQueryHookResult = ReturnType<typeof useGetProjectSuspenseQuery>;
export type GetProjectQueryResult = Apollo.QueryResult<GetProjectQuery, GetProjectQueryVariables>;
export const GetUserProjectsDocument = gql`
    query GetUserProjects($userId: ID!) {
  projects(userId: $userId) {
    projectId
    title
    lastImage
    isPersonal
    updatedAt
  }
}
    `;

/**
 * __useGetUserProjectsQuery__
 *
 * To run a query within a React component, call `useGetUserProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProjectsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserProjectsQuery(baseOptions: Apollo.QueryHookOptions<GetUserProjectsQuery, GetUserProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserProjectsQuery, GetUserProjectsQueryVariables>(GetUserProjectsDocument, options);
      }
export function useGetUserProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserProjectsQuery, GetUserProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserProjectsQuery, GetUserProjectsQueryVariables>(GetUserProjectsDocument, options);
        }
export function useGetUserProjectsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserProjectsQuery, GetUserProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserProjectsQuery, GetUserProjectsQueryVariables>(GetUserProjectsDocument, options);
        }
export type GetUserProjectsQueryHookResult = ReturnType<typeof useGetUserProjectsQuery>;
export type GetUserProjectsLazyQueryHookResult = ReturnType<typeof useGetUserProjectsLazyQuery>;
export type GetUserProjectsSuspenseQueryHookResult = ReturnType<typeof useGetUserProjectsSuspenseQuery>;
export type GetUserProjectsQueryResult = Apollo.QueryResult<GetUserProjectsQuery, GetUserProjectsQueryVariables>;
export const CreateProjectDocument = gql`
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
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const UpdateProjectDocument = gql`
    mutation UpdateProject($projectId: ID!, $title: String, $lastImage: Upload) {
  updateProject(projectId: $projectId, title: $title, lastImage: $lastImage) {
    projectId
    title
    lastImage
    isPersonal
    updatedAt
  }
}
    `;
export type UpdateProjectMutationFn = Apollo.MutationFunction<UpdateProjectMutation, UpdateProjectMutationVariables>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      title: // value for 'title'
 *      lastImage: // value for 'lastImage'
 *   },
 * });
 */
export function useUpdateProjectMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectMutation, UpdateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectMutation, UpdateProjectMutationVariables>(UpdateProjectDocument, options);
      }
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationResult = Apollo.MutationResult<UpdateProjectMutation>;
export type UpdateProjectMutationOptions = Apollo.BaseMutationOptions<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const DeleteProjectDocument = gql`
    mutation DeleteProject($projectId: ID!) {
  deleteProject(projectId: $projectId)
}
    `;
export type DeleteProjectMutationFn = Apollo.MutationFunction<DeleteProjectMutation, DeleteProjectMutationVariables>;

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useDeleteProjectMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProjectMutation, DeleteProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProjectMutation, DeleteProjectMutationVariables>(DeleteProjectDocument, options);
      }
export type DeleteProjectMutationHookResult = ReturnType<typeof useDeleteProjectMutation>;
export type DeleteProjectMutationResult = Apollo.MutationResult<DeleteProjectMutation>;
export type DeleteProjectMutationOptions = Apollo.BaseMutationOptions<DeleteProjectMutation, DeleteProjectMutationVariables>;
export const PostEditorDocument = gql`
    subscription PostEditor($userId: ID!) {
  postEditor(userId: $userId) {
    saveId
    editor
    object
  }
}
    `;

/**
 * __usePostEditorSubscription__
 *
 * To run a query within a React component, call `usePostEditorSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePostEditorSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostEditorSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function usePostEditorSubscription(baseOptions: Apollo.SubscriptionHookOptions<PostEditorSubscription, PostEditorSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<PostEditorSubscription, PostEditorSubscriptionVariables>(PostEditorDocument, options);
      }
export type PostEditorSubscriptionHookResult = ReturnType<typeof usePostEditorSubscription>;
export type PostEditorSubscriptionResult = Apollo.SubscriptionResult<PostEditorSubscription>;
export const CreateSaveDocument = gql`
    mutation CreateSave($input: CreateSaveInput!) {
  createSave(input: $input)
}
    `;
export type CreateSaveMutationFn = Apollo.MutationFunction<CreateSaveMutation, CreateSaveMutationVariables>;

/**
 * __useCreateSaveMutation__
 *
 * To run a mutation, you first call `useCreateSaveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSaveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSaveMutation, { data, loading, error }] = useCreateSaveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSaveMutation(baseOptions?: Apollo.MutationHookOptions<CreateSaveMutation, CreateSaveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSaveMutation, CreateSaveMutationVariables>(CreateSaveDocument, options);
      }
export type CreateSaveMutationHookResult = ReturnType<typeof useCreateSaveMutation>;
export type CreateSaveMutationResult = Apollo.MutationResult<CreateSaveMutation>;
export type CreateSaveMutationOptions = Apollo.BaseMutationOptions<CreateSaveMutation, CreateSaveMutationVariables>;
export const GetSaveDocument = gql`
    query GetSave($projectId: ID!) {
  save(projectId: $projectId) {
    saveId
    editor
    object
  }
}
    `;

/**
 * __useGetSaveQuery__
 *
 * To run a query within a React component, call `useGetSaveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSaveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSaveQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetSaveQuery(baseOptions: Apollo.QueryHookOptions<GetSaveQuery, GetSaveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSaveQuery, GetSaveQueryVariables>(GetSaveDocument, options);
      }
export function useGetSaveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSaveQuery, GetSaveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSaveQuery, GetSaveQueryVariables>(GetSaveDocument, options);
        }
export function useGetSaveSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSaveQuery, GetSaveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSaveQuery, GetSaveQueryVariables>(GetSaveDocument, options);
        }
export type GetSaveQueryHookResult = ReturnType<typeof useGetSaveQuery>;
export type GetSaveLazyQueryHookResult = ReturnType<typeof useGetSaveLazyQuery>;
export type GetSaveSuspenseQueryHookResult = ReturnType<typeof useGetSaveSuspenseQuery>;
export type GetSaveQueryResult = Apollo.QueryResult<GetSaveQuery, GetSaveQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($userId: ID!) {
  user(userId: $userId) {
    userId
    email
    name
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($name: String!) {
  createUser(name: $name) {
    userId
    email
    name
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($userId: ID!, $name: String) {
  updateUser(userId: $userId, name: $name) {
    userId
    email
    name
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($userId: ID!) {
  deleteUser(userId: $userId) {
    userId
    email
    name
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;