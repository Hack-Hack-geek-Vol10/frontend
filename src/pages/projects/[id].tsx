import Header from "@/components/EditorHeader/Header";
import { Box } from "@mui/material";
import React from "react";
import Canvas from "@/components/objects/Canvas";
import Editor from "@/components/editor/Editor";
const id = () => {
  return (
    <>
      <Header />

      <Box display={"flex"}>
        <Box
          sx={{
            width: "40%",
            height: "100%",
          }}
        >
          <Editor />
        </Box>

        <Box
          sx={{
            width: "60%",
            height: "100%",
          }}
        >
          <Canvas />
        </Box>
      </Box>
    </>
  );
};

export default id;
