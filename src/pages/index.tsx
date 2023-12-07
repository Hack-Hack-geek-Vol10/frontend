import Header from "@/components/commons/CommonsHeader";
import { AuthContext } from "@/store/AuthContext";
import { useContext } from "react";
import Typography from "@mui/material/Typography";
import { useGetUser } from "@/service/useUserServices";
export default function Home() {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid;
  const { data: userData } = useGetUser(userId!);

  return (
    <>
      <Header />
      <Typography variant='body1' color='initial'>
        {userData?.user?.name}さん、ようこそ！
      </Typography>
    </>
  );
}
