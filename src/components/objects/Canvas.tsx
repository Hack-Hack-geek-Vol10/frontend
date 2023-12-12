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
import { initialElements } from "./DataFormat";
import useTransition from "@/hooks/useTransition";
const nodeTypes: ReactFlowProps[] = {
  ColumnNode: ColumnNode,
  TableNode: TableNode,
};

const initBgColor: string = "#fff";

const connectionLineStyle: React.CSSProperties = { stroke: "#fff" };

const defaultViewport = { x: 0, y: 0, zoom: 1 };

const CustomNodeFlow: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);
  const { data } = useGetProject("projectId");
  const { getPagePath } = useTransition();
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
        <DownloadObjPng
          projectId={data?.project?.projectId}
          title={data?.project?.title}
        />
      </ReactFlow>
    </Box>
  );
};

export default CustomNodeFlow;
