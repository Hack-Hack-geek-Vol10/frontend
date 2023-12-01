import React, { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import { Box, Button, IconButton } from "@/lib/mui/muiRendering";
import { useRouter } from "next/router";
import LoginButton from "@/components/commons/LoginButton";
import LogoutButton from "@/components/commons/LogoutButton";

import DropDownMenu from "@/components/commons/InportDropDownMenu";
const Header = () => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  return (
    <Box
      sx={{ position: "sticky", height: "62px", top: 0 }}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      padding={2}
      bgcolor='#123456'
    >
      <Box>
        <DropDownMenu />
      </Box>
    </Box>
  );
};

export default Header;
