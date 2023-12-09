import React from "react";
import "next/image";
import { Avatar, Box, Button, IconButton } from "@/lib/mui/muiRendering";
import CreateLinkPullDown from "@/components/projects/CreateLinkPullDown";
const Header = () => {
  return (
    <Box
      sx={{ position: "sticky", height: "62px", top: 0 }}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      padding={2}
      bgcolor='#FFA560'
    >
      <Box
        sx={{
          width: "50px",
          overflow: "hidden",
          "&:hover": {
            backgroundColor: "transparent",
            opacity: 0.6,
          },
        }}
      >
        <Avatar
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            cursor: "pointer",
          }}
          variant='square'
          src='/icon.png'
          alt='logo'
        />
      </Box>
      <Box>
        <CreateLinkPullDown />
      </Box>
    </Box>
  );
};

export default Header;
