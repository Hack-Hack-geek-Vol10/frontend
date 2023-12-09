import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { Box, Typography } from "@/lib/mui/muiRendering";
import { TableNode } from "@/types/objectDataInterface";
interface TableNodeProps {
  data: TableNode;
}

const TableNode: React.FC<TableNodeProps> = ({ data }) => {
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
          {data.data.name}
        </Typography>
      </Box>
    </>
  );
};

export default memo(TableNode);
