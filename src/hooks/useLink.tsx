import React from "react";
import { useCreateInviteLink } from "@/service/useLinkServices";
import { Auth } from "@/generated/graphql";

const useLink = () => {
  const { createInviteLink, data } = useCreateInviteLink();
  const [pullValue, setPullValue] = React.useState<Auth>(Auth.ReadOnly);

  const handlePullDownChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setPullValue(event.target.value as Auth);
  };

  const handleCreateLink = (id: string, authority: Auth) => {
    if (id && authority) {
      createInviteLink({
        variables: {
          projectId: id,
          authority: authority,
        },
      });
    }
  };
  return {
    data,
    pullValue,
    setPullValue,
    handleCreateLink,
    handlePullDownChange,
  };
};
export default useLink;
