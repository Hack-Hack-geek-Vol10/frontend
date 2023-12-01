import Image from "next/image";
import { Box } from "@/lib/mui/muiRendering";
import DocsSideBar from "@/components/commons/DocsSideBar";
import { LocalActivitySharp } from "@mui/icons-material";
import LoginButton from "@/components/commons/LoginButton";
import LogoutButton from "@/components/commons/LogoutButton";
import EditorHeader from "@/components/commons/EditorHeader";

export default function Home() {
  return (
    <Box>
      <EditorHeader />
    </Box>
  );
}
