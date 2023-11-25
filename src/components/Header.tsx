import React, { useEffect, useState } from "react";
import { Box, Button, IconButton } from "@/lib/mui/muiRendering";
import { useRouter } from "next/router";
import { linkWithPopup } from "firebase/auth";

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null); // ユーザー情報を保持するstate

  const currentPage = router.pathname.replace(/\//g, "");

  return (
    <Box
      sx={{ position: "sticky", height: "40px", top: 0 }}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      padding={2}
      bgcolor='#123456'
    >
      {/* Left: Logo and Text */}
      <Box display='flex' alignItems='center' gap={2}>
        <img src='/path/to/your/logo.png' alt='Logo' width={50} />
        <span style={{ color: "white", fontWeight: "bold" }}>
          SchemaCreator
        </span>
      </Box>

      <Box display='flex' alignItems='center' gap={2}>
        {user ? (
          <IconButton aria-label='notifications'>
            <LogoutButton />
          </IconButton>
        ) : (
          <IconButton>
            <LoginButton />
          </IconButton>
        )}
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
