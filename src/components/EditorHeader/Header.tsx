import React, { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import { Box, Button, IconButton } from "@/lib/mui/muiRendering";
import { useRouter } from "next/router";
import ImportDropDownMenu from "@/components/EditorHeader/DropDown/ImportDropDownMenu";
import ExportDropDownMenu from "@/components/EditorHeader/DropDown/ExportDropDownMenu";
import { LoginButton } from "../commons/LoginButton";
const Header = () => {
  return (
    <Box
      sx={{ position: "sticky", height: "62px", top: 0 }}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      padding={2}
      bgcolor='#123456'
    >
      <Box>
        <LoginButton />
      </Box>
    </Box>
  );
};

export default Header;
