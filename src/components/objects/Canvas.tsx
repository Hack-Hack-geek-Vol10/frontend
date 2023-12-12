import React, { useState, useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Controls,
  ReactFlowProps,
} from "reactflow";
import "reactflow/dist/style.css";
import { useGetProject } from "@/service/useProjectService";
import ColumnNode from "./ColumnNode";
import TableNode from "./TableNode";
import DownloadObjPng from "./DownloadObjPng";
import useTransition from "@/hooks/useTransition";

const connectionLineStyle: React.CSSProperties = { stroke: "#fff" };

const defaultViewport = { x: 0, y: 0, zoom: 1 };

const CustomNodeFlow: React.FC = (props: any) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);
  const { TableNodeData, ColumnNodeData, EdgeData } = props.data;
  const NodeData = TableNodeData.concat(ColumnNodeData);
  const nodeTypes: ReactFlowProps["nodeTypes"] = {
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
        <DownloadObjPng
          projectId={data?.project?.projectId}
          title={data?.project?.title}
        />
      </ReactFlow>
    </Box>
  );
};

export default CustomNodeFlow;
