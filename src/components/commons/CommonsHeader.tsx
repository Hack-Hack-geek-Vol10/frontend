import React, { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import { Box, Button, IconButton } from "@/lib/mui/muiRendering";
import { LoginButton } from "@/components/commons/LoginButton";
import LogoutButton from "@/components/commons/LogoutButton";
import useTransition from "@/hooks/useTransition";
import "next/image";

const Header = () => {
  const { signInCheck } = useContext(AuthContext);
  const { transitionPage, getPagePath } = useTransition();

  const handleTransition = () => {
    if (getPagePath() === "/") {
      transitionPage("/");
    } else if (getPagePath() === "/docs") {
      transitionPage("/");
    } else {
      transitionPage("/projects");
    }
  };
  return (
    <Box
      sx={{
        position: "sticky",
        height: "52px",
        top: 0,
        bgcolor: "#FFA560",
        pr: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <IconButton
        sx={{
          pl: 1,
          width: "300px",
          height: "100%",
          "&:hover": {
            backgroundColor: "transparent",
            opacity: 0.6,
          },
        }}
        onClick={handleTransition}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            cursor: "pointer",
          }}
          src='/antibg.png'
          alt=''
        />
      </IconButton>
      <Box>{signInCheck ? <LogoutButton /> : <LoginButton />}</Box>
    </Box>
  );
};

export default Header;
