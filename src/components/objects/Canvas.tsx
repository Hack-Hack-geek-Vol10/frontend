import React, { useState, useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Controls,
  ReactFlowProps,
} from "reactflow";
import "reactflow/dist/style.css";
import ColumnNode from "./ColumnNode";
import TableNode from "./TableNode";
import DownloadObjPng from "./DownloadObjPng";
import { TableInterface, ColumnInterface } from "@/types/objectDataInterface";
import { EdgeInterface } from "@/types/ReactFlowInterface";
const connectionLineStyle: React.CSSProperties = { stroke: "#fff" };

const defaultViewport = { x: 0, y: 0, zoom: 1 };

interface CustomNodeFlowProps {
  TableNodeData: TableInterface[];
  ColumnNodeData: ColumnInterface[];
  EdgeData: EdgeInterface[];
}
type NodeData = TableInterface & ColumnInterface;

const Canvas: any = ({ ...props }: CustomNodeFlowProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>([]);
  const [edges, setEdges] = useEdgesState([]);
  const { TableNodeData, ColumnNodeData, EdgeData } = props;

  const NodeData: any = [...TableNodeData, ...ColumnNodeData];
  const nodeTypes: any = {
    ColumnNode: ColumnNode,
    TableNode: TableNode,
  };

  useEffect(() => {
    setNodes(NodeData);
    setEdges(EdgeData);
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

export default Canvas;
