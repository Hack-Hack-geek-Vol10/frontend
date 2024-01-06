import React from "react";
import { useCreateInviteLink } from "@/apis/useLinkServices";
import { Auth } from "@/generated/graphql";
import { useState } from "react";
import clipboardCopy from "clipboard-copy";
import { useRouter } from "next/router";

const useLink = () => {
  const { createInviteLink, data } = useCreateInviteLink();
  const [anchorEl, setAnchorEl] = useState(null);
  const [pullValue, setPullValue] = useState<Auth>(Auth.Owner);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const pageId = router.query.id as string;

  const CreateLink = async (id: string, authority: Auth) => {
    if (id && authority) {
      await createInviteLink({
        variables: {
          projectId: id,
          authority: authority,
        },
      });
    }
  };

  const CopyLink = (link: string) => {
    clipboardCopy(`${link}`);
  };

  const MenuItemClick = async (value: Auth) => {
    setPullValue(value);
    await CreateLink(pageId, pullValue);
    const link = data?.createInviteLink;
    if (link) {
      await CopyLink(link);
      alert(`${pullValue} Link is created!`);
    } else {
      alert("Link is not created!");
    }
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
    CreateLink,
    MenuItemClick,
    handleClick,
    handleClose,
    anchorEl,
    open,
    pullValue,
  };
};

export default useLink;
