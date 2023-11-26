import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const router = useRouter();

  const { logout } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return <Button onClick={handleLogout}>logout</Button>;
};
export default LogoutButton;
