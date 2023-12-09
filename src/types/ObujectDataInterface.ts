import { tablesData } from "../components/objects/data";

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
  style: string | null;
}
export interface ColumnNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  style: string | null;
  parentNode: string;
  extent: string;
  draggable: boolean;
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  type: string;
}
