import Header from "@/components/EditorHeader/Header";
import { Box } from "@mui/material";
import React from "react";
import Canvas from "@/components/objects/Canvas";
const id = () => {
  return (
    <>
      <Header />

      <Box>{/* <Editor /> */}</Box>
      <Box>
        <Canvas />
      </Box>
    </>
  );
};

export default id;
