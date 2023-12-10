export interface Table {
  name: string;
  columns: Column[];
}
export interface Column {
  name: string;
  type: string;
  options: string[] | null;
}
