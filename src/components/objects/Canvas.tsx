import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Controls,
  ReactFlowProps,
  Node,
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

const Canvas: any = ({ ...props }: CustomNodeFlowProps) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<EdgeInterface[]>([]);
  const { TableNodeData, ColumnNodeData, EdgeData } = props;

  useEffect(() => {
    const NodeData: any = [
      ...TableNodeData.map((data) => ({ ...data, type: "TableNode" })),
      ...ColumnNodeData.map((data) => ({ ...data, type: "ColumnNode" })),
    ];
    setNodes(NodeData);
    setEdges(EdgeData);
  }, [TableNodeData, ColumnNodeData, EdgeData, setNodes, setEdges]);

  const nodeTypes: any = {
    ColumnNode: ColumnNode,
    TableNode: TableNode,
  };

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
