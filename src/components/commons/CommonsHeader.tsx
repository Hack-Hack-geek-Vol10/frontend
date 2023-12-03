import React, { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import { Box, Button, IconButton } from "@/lib/mui/muiRendering";
import { useRouter } from "next/router";
import { LoginButton } from "@/components/commons/LoginButton";
import LogoutButton from "@/components/commons/LogoutButton";
const Header = () => {
  const router = useRouter();

  return (
    <Box
      sx={{ position: "sticky", height: "62px", top: 0 }}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      padding={2}
      bgcolor='#123456'
    >
      <LoginButton />
    </Box>
  );
};

export default Header;
