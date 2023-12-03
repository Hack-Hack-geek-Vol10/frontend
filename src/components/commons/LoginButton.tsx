import { useContext } from "react";
import { Button } from "@mui/material";
import { AuthContext } from "@/store/AuthContext";
import { useCreateUser } from "@/service/useUserServices";

export const LoginButton = () => {
  const { login, currentUser } = useContext(AuthContext);
  const { createUserMutation } = useCreateUser();

  const handleLogin = async () => {
    try {
      await login();

      if (currentUser) {
        createUserMutation(currentUser!.displayName);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return <Button onClick={handleLogin}>GoogleLogin</Button>;
};
