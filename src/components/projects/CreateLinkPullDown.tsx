import React, { use, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useCreateInviteLink } from "@/service/useLinkServices";
import useLink from "@/hooks/useLink";
import { Auth } from "@/generated/graphql";
import { useState } from "react";
import Menu from "@mui/material/Menu";

const CreateLinkPullDown = () => {
  const {
    handleCreateLink,
    data,
    handleMenuItemClick,
    handleClick,
    handleClose,
    anchorEl,
    open,
    pullValue,
    setPullValue,
  } = useLink();
  const router = useRouter();
  const pageId = router.query.id as string;

  useEffect(() => {
    handleCreateLink(pageId, pullValue);
  }, [pullValue]);

  return (
    <div>
      <Button
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        onClick={handleClick}
      >
        Select Option
      </Button>
      <Menu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuItemClick(Auth.Owner)}>
          Owner
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick(Auth.ReadOnly)}>
          ReadOnly
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick(Auth.ReadWrite)}>
          ReadWrite
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CreateLinkPullDown;
