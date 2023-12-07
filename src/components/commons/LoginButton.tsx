import { useContext } from "react";
import { Button } from "@mui/material";
import { AuthContext } from "@/store/AuthContext";
import { useCreateUser, useGetUser } from "@/service/useUserServices";

export const LoginButton = () => {
  const { login, currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid;
  const { data: userData } = useGetUser(userId!);
  const { createUser } = useCreateUser();
  const userName = currentUser?.displayName;

  const handleLogin = async () => {
    try {
      await login();
      if (userData && userName && userData.user!.name !== userName) {
        await createUser({
          variables: { name: userName },
        });
      } else {
        console.log("登録済み");
      }
      return userData;
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
      onClick={handleLogin}
    >
      GoogleLogin
    </Button>
  );
};
