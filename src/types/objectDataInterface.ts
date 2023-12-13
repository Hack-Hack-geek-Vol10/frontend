export interface TableInterface {
  name: string;
  columns: ColumnInterface[];
}
export interface ColumnInterface {
  name: string;
  type: string;
  options: string[] | null;
}
