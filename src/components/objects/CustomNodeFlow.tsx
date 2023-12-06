import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
  Edge,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";

type NodeType = Node & {
  className?: string;
  parentNode?: string;
  extent?: "parent";
  style?: React.CSSProperties;
};

type EdgeType = Edge & {
  animated?: boolean;
};

const initialNodes: NodeType[] = [
  {
    id: "2",
    data: { label: "Group A" },
    position: { x: 100, y: 100 },
    className: "light",
    style: { backgroundColor: "rgba(255, 0, 0, 0.2)", width: 200, height: 200 },
  },
  {
    id: "2a",
    data: { label: "Node A.1" },
    position: { x: 10, y: 50 },
    parentNode: "2",
  },
  {
    id: "3",
    data: { label: "Node 1" },
    position: { x: 320, y: 100 },
    className: "light",
  },
  {
    id: "4",
    data: { label: "Group B" },
    position: { x: 320, y: 200 },
    className: "light",
    style: { backgroundColor: "rgba(255, 0, 0, 0.2)", width: 300, height: 300 },
    type: "group",
  },
];

const initialEdges: EdgeType[] = [{ id: "e1-3", source: "1", target: "3" }];
const NestedFlow: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      className='react-flow-subflows-example'
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default NestedFlow;
