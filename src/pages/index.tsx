import Image from "next/image";
import { Box } from "@/lib/mui/muiRendering";
import Header from "@/components/EditorHeader/Header";
import { AuthContext } from "@/store/AuthContext";
import { useContext } from "react";
import Typography from "@mui/material/Typography";
export default function Home() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Typography variant='body1' color='initial'>
        {currentUser?.displayName}
      </Typography>{" "}
    </>
  );
}
