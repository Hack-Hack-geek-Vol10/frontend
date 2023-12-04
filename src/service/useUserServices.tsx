import { useQuery } from "@apollo/client";
import {
  GetUserProjectsDocument,
  GetUserProjectsQuery,
  GetUserProjectsQueryVariables,
} from "@/generated/graphql";

export const useUserProjects = (userId: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useQuery<
    GetUserProjectsQuery,
    GetUserProjectsQueryVariables
  >(GetUserProjectsDocument, {
    variables: { userId: userId },
    skip: !userId, //userIdがない場合はskip
  });

  return { data, loading, error };
};
