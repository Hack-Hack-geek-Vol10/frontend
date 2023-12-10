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
import DownloadObjPng from "./DownloadObjPng";
import { initialElements } from "./DataFormat";
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
    setNodes(initialElements);

    setEdges([
      {
        id: "e1-2",
        source: "1",
        target: "2",
        style: { stroke: "#fff" },
      },
    ]);
  }, []);

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
        <DownloadObjPng />
      </ReactFlow>
    </Box>
  );
};

export default CustomNodeFlow;
