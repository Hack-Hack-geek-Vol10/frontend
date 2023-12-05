import Editor from "@/components/Editor";
import Header from "@/components/EditorHeader/Header";
import { Box } from "@mui/material";
import React from "react";
import CustomNodeFlow from "@/components/objects/CustomNodeFlow";
const id = () => {
  return (
    <>
      <Header />

      <Box>
        {/* <Editor /> */}

        <CustomNodeFlow />
      </Box>
    </>
  );
};

export default id;
