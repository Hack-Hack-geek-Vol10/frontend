import {
  Avatar,
  Box,
  Button,
  CloseIcon,
  IconButton,
  Typography,
} from "@/lib/mui/muiRendering";
import { useContext, useState } from "react";
import { AuthContext } from "@/store/AuthContext";
import useTransition from "@/hooks/useTransition";
import GeneralModal from "../commons/GeneralModal";
import { useModal } from "@/hooks/useModal";

const LogoutButton = () => {
  const { logout, currentUser } = useContext(AuthContext);
  const { transitionPage } = useTransition();

  const handleLogout = async () => {
    try {
      await logout();
      transitionPage("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <GeneralModal
        buttonContent={
          <Avatar
            alt={currentUser?.displayName || ""}
            src={currentUser?.photoURL || ""}
          />
        }
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography>
            {currentUser?.displayName}からログアウトしますか？
          </Typography>
          <Button
            onClick={handleLogout}
            sx={{
              mt: 2,
              color: "red",
              "&:hover": {
                backgroundColor: "transparent",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            autoFocus
          >
            ログアウト
          </Button>
        </Box>
      </GeneralModal>
    </>
  );
};

export default LogoutButton;
