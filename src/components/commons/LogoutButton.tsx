import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import useTransition from "@/hooks/useTransition";
const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const { transitionPage } = useTransition();
  const handleLogout = async () => {
    try {
      await logout();
      transitionPage("/");
    } catch (err) {
      console.log(err);
    }
  };
  return <Button onClick={handleLogout}>logout</Button>;
};
export default LogoutButton;
