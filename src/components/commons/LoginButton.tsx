import { useContext } from "react";
import { auth } from "@/lib/firebase/client";
import "firebase/auth";
import { Button } from "@mui/material";
import { AuthContext } from "@/store/AuthContext";

const LoginButton = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error(error);
    }
  };

  return <Button onClick={handleLogin}>GoogleLogin</Button>;
};
export default LoginButton;
