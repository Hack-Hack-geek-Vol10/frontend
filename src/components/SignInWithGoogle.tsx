import { useContext } from "react";
import useAuth from "@/hooks/useFirebase";
import { AuthContext } from "@/store/AuthContext";
import { Box, Typography, Button } from "@/lib/mui/muiRendering";

const SignInWithGoogle = () => {
  const { currentUser } = useContext(AuthContext);
  const signInWithGoogle = useAuth().signInWithGoogle;

  return (
    <>
      {currentUser ? (
        <Box>
          <Typography>ログイン中</Typography>

          <Typography>{currentUser.uid}</Typography>
        </Box>
      ) : (
        <Button onClick={signInWithGoogle}>Googleでログイン</Button>
      )}
    </>
  );
};

export default SignInWithGoogle;
