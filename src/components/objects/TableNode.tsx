import React, { memo } from "react";
import { Box, Typography } from "@/lib/mui/muiRendering";
import { CustomTableNode } from "@/types/ReactFlowInterface";

const TableNode: React.FC<CustomTableNode> = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          width: "100px",
          height: "100px",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.6rem",
            color: "#fff",
            textAlign: "left",
          }}
        >
          {data.name}
        </Typography>
      </Box>
    </>
  );
};

export default memo(TableNode);
