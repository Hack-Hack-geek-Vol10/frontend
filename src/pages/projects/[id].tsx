import Editor from "@/components/Editor";
import Header from "@/components/EditorHeader/Header";
import { Box } from "@mui/material";
import React from "react";
const id = () => {
  return (
    <>
      <Header />
      <Box>
        <Editor />
      </Box>
    </>
  );
};

export default id;
