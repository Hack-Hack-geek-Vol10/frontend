import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { Box, Typography } from "@/lib/mui/muiRendering";
import { ColumnNode } from "@/types/objectDataInterface";

interface CustomNodeProps {
  data: ColumnNode;
}

const ColumnNode: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          width: "100px",
          height: "15px",
        }}
      >
        <Handle
          type='target'
          position={Position.Left}
          style={{ background: "#555" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "50%",
              mt: "2px",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textAlign: "left",
                fontSize: "0.6rem",
                alignItems: "center",
              }}
            >
              {data.data.name}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "25%",
            }}
          >
            <Typography
              sx={{
                color: "#fff",

                textAlign: "center",
                fontSize: "0.5rem",
              }}
            >
              {data.data.type}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "25%",
            }}
          >
            <Typography
              sx={{
                color: "#fff",

                textAlign: "center",
                fontSize: "0.5rem",
              }}
            ></Typography>
          </Box>
        </Box>

        <Handle
          type='source'
          position={Position.Right}
          id='a'
          isConnectable={isConnectable}
        />
      </Box>
    </>
  );
};

export default memo(ColumnNode);
