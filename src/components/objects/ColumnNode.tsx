import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { Box, Typography } from "@/lib/mui/muiRendering";
import { ColumnNode } from "@/types/ReactFlowInterface";

const ColumnNode: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    data: ColumnNode;
  }
> = ({ data }) => {
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
          style={{
            background: "#555",
            width: "5px",
            height: "5px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
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
              {data.name}
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
              {data.type}
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
          style={{
            background: "#555",
            top: "50%",
            transform: "translateY(-50%)",
            width: "5px",
            height: "5px",
          }}
        />
      </Box>
    </>
  );
};

export default memo(ColumnNode);
