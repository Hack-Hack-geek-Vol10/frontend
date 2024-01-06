import { useMutation } from "@apollo/client";
import {
  CreateInviteLinkDocument,
  CreateInviteLinkMutation,
  CreateInviteLinkMutationVariables,
} from "../generated/graphql";

export const useCreateInviteLink = () => {
  const [createInviteLink, { data, loading, error }] = useMutation<
    CreateInviteLinkMutation,
    CreateInviteLinkMutationVariables
  >(CreateInviteLinkDocument);

  return { createInviteLink, data, loading, error };
};
