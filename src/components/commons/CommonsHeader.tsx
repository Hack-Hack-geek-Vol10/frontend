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
      sx={{ position: "sticky", height: "62px", top: 0, bgcolor: "#123456" }}
    >
      <Box display='flex' alignItems='center' width={"50%"} padding={2}>
        <Box>{signInCheck ? <LogoutButton /> : <LoginButton />}</Box>
        <Box>
          <Button
            sx={{
              color: "#fff",
              "&:hover": {
                backgroundColor: "transparent",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onClick={() => transitionPage("/projects")}
          >
            projectList
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
