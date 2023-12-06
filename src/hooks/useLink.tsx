import React from "react";
import { useCreateInviteLink } from "@/service/useLinkServices";
import { Auth } from "@/generated/graphql";
import { useState } from "react";
const useLink = () => {
  const { createInviteLink, data } = useCreateInviteLink();
  const [anchorEl, setAnchorEl] = useState(null);
  const [pullValue, setPullValue] = useState<Auth>(Auth.Owner);
  const open = Boolean(anchorEl);
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
  const handleMenuItemClick = (value: Auth) => {
    setPullValue(value);
    handleClose();
  };
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    data,
    handleCreateLink,
    handleMenuItemClick,
    handleClick,
    handleClose,
    anchorEl,
    open,
    pullValue,
    setPullValue,
  };
};
export default useLink;
