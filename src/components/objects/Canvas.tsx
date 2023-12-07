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

import CustomNode from "./CustomNode";

const initBgColor: string = "#666";

const connectionLineStyle: React.CSSProperties = { stroke: "#fff" };
const nodeTypes: ReactFlowProps["nodeTypes"] = {
  selectorNode: CustomNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState<string>(initBgColor);

  useEffect(() => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNodes((nds: Node[]) =>
        nds.map((node) => {
          if (node.id !== "2") {
            return node;
          }

          const color: string = event.target.value;

          setBgColor(color);

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        })
      );
    };

    setNodes([
      {
        id: "1",
        type: "input",
        data: { label: "An input node" },
        position: { x: 0, y: 50 },
        sourcePosition: "right",
      },
      {
        id: "2",
        type: "selectorNode",
        data: { onChange: onChange, color: initBgColor },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 300, y: 50 },
      },
      {
        id: "3",
        type: "output",
        data: { label: "Output A" },
        position: { x: 650, y: 25 },
        targetPosition: "left",
      },
      {
        id: "4",
        type: "output",
        data: { label: "Output B" },
        position: { x: 650, y: 100 },
        targetPosition: "left",
      },
    ]);

    setEdges([
      {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        style: { stroke: "#fff" },
      },
      {
        id: "e2a-3",
        source: "2",
        target: "3",
        sourceHandle: "a",
        animated: true,
        style: { stroke: "#fff" },
      },
      {
        id: "e2b-4",
        source: "2",
        target: "4",
        sourceHandle: "b",
        animated: true,
        style: { stroke: "#fff" },
      },
    ]);
  }, []);

  const onConnect = useCallback(
    (params: Connection | Edge) =>
      setEdges((eds: Edge[]) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );

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
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: bgColor }}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        defaultViewport={defaultViewport}
        fitView
        attributionPosition='bottom-left'
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </Box>
  );
};

export default CustomNodeFlow;
