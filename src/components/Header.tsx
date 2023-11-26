import React, { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import { Box, Button, IconButton } from "@/lib/mui/muiRendering";
import { useRouter } from "next/router";
import LoginButton from "@/components/commons/LoginButton";
import LogoutButton from "@/components/commons/LogoutButton";
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
      {/* Left: Logo and Text */}

      <Box display='flex' alignItems='center' gap={2}>
        {currentUser !== null ? <LogoutButton /> : <LoginButton />}
        <Button
          variant='outlined'
          sx={{
            width: "100px",
            height: "35px",
            fontSize: "10px",

            zIndex: 100,
          }}
        ></Button>
      </Box>
    </Box>
  );
};

export default Header;
