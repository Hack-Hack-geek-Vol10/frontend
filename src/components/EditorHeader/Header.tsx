import React from "react";
import { Box, Button, IconButton } from "@/lib/mui/muiRendering";

const Header = () => {
  return (
    <Box
      sx={{ position: "sticky", height: "62px", top: 0 }}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      padding={2}
      bgcolor='#123456'
    ></Box>
  );
};

export default Header;
