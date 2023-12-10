export interface TableNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: {
    name: string;
  };
  style: {
    border: string;
    padding: string;
  } | null;
}
export interface ColumnNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  style: {
    border: string;
    padding: string;
  };
  data: {
    name: string;
    type: string;
  };

  parentNode: string;
  extent: string;
  draggable: boolean;
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  style: {
    stroke: string;
  };
}

export interface CustomTableNode {
  data: {
    name: string;
  };
}
export interface CustomColumnNode {
  column: string;
  type: string;
  option?: string;
}
