import React, { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import { Box, Button } from "@/lib/mui/muiRendering";
import { LoginButton } from "@/components/commons/LoginButton";
import LogoutButton from "@/components/commons/LogoutButton";
import useTransition from "@/hooks/useTransition";

const Header = () => {
  const { signInCheck } = useContext(AuthContext);
  const { transitionPage } = useTransition();

  return (
    <Box
      sx={{ position: "sticky", height: "62px", top: 0 }}
      display='flex'
      alignItems='center'
      justifyContent='center'
      padding={2}
      bgcolor='#123456'
    >
      <Box>{signInCheck ? <LogoutButton /> : <LoginButton />}</Box>
      <Box>
        <Button
          variant='outlined'
          color='primary'
          onClick={() => transitionPage("/projects")}
        >
          projectList
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
