export interface Table {
  name: string;
  columns: Column[];
}
export interface Column {
  name: string;
  type: string;
  options: string[] | null;
}

export interface TableNode {
  id: string;
  type: string;
  position: { x: number; y: number };
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
