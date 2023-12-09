import React, { useState, useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Edge,
  Node,
  Connection,
  ReactFlowProps,
} from "reactflow";
import "reactflow/dist/style.css";

import ColumnNode from "./ColumnNode";
import TableNode from "./TableNode";
const nodeTypes: ReactFlowProps["nodeTypes"] = {
  ColumnNode: ColumnNode,
  TableNode: TableNode,
};

const initBgColor: string = "#fff";

const connectionLineStyle: React.CSSProperties = { stroke: "#fff" };

const defaultViewport = { x: 0, y: 0, zoom: 1 };

const CustomNodeFlow: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  useEffect(() => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNodes((nds: Node[]) =>
        nds.map((node) => {
          return {
            ...node,
          };
        })
      );
    };

    setNodes([
      {
        id: "1",
        type: "TableNode",
        data: { color: initBgColor },
        style: { border: "0.5px solid #fff", padding: "4px" },
        position: { x: 300, y: 100 },
      },
      {
        id: "a",
        type: "ColumnNode",
        position: { x: 0, y: 20 },
        data: { color: initBgColor },
        style: { border: "0.5px solid #fff", padding: "4px" },
        parentNode: "1",
        extent: "parent",
        draggable: false,
      },
    ]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 62px)",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        style={{ background: "#333" }}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        defaultViewport={defaultViewport}
        fitView
        attributionPosition='bottom-left'
      >
        <Controls />
      </ReactFlow>
    </Box>
  );
};

export default CustomNodeFlow;
