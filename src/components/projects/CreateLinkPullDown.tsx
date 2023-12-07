import React, { useEffect } from "react";
import { Button, MenuItem } from "@mui/material";
import useLink from "@/hooks/useLink";
import { Auth } from "@/generated/graphql";
import Menu from "@mui/material/Menu";
const CreateLinkPullDown = () => {
  const { MenuItemClick, handleClick, handleClose, anchorEl, open } = useLink();

  return (
    <div>
      <Button
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='outlined'
        onClick={handleClick}
      >
        CreateLink
      </Button>
      <Menu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => MenuItemClick(Auth.Owner)}>Owner</MenuItem>
        <MenuItem onClick={() => MenuItemClick(Auth.ReadOnly)}>
          ReadOnly
        </MenuItem>
        <MenuItem onClick={() => MenuItemClick(Auth.ReadWrite)}>
          ReadWrite
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CreateLinkPullDown;
