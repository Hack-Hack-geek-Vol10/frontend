import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { Box, Typography } from "@/lib/mui/muiRendering";

interface CustomNodeProps {
  data: any;
  isConnectable: boolean;
}

const TableNode: React.FC<CustomNodeProps> = ({ data, isConnectable }) => {
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
          TableName
        </Typography>
      </Box>
    </>
  );
};

export default memo(TableNode);
