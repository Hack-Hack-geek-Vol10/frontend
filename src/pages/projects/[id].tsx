import Header from "@/components/EditorHeader/Header";
import { Box } from "@mui/material";
import React from "react";
import CustomNodeFlow from "@/components/objects/Canvas";
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
