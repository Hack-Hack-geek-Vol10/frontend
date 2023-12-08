import { Avatar, Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import useTransition from "@/hooks/useTransition";
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
    <Button
      sx={{
        color: "#fff",
        "&:hover": {
          backgroundColor: "transparent",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      onClick={handleLogout}
    >
      <Avatar
        alt={currentUser?.displayName || ""}
        src={currentUser?.photoURL || ""}
      />
    </Button>
  );
};
export default LogoutButton;
