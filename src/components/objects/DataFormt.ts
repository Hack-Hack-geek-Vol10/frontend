import { TableNode, ColumnNode, Edge } from "@/types/objectDataInterface";
import { tablesData } from "@/components/objects/dummy";

export const TableNodeData: TableNode[] = tablesData.tables.map((table) => {
  return {
    id: table.name,
    type: "TableNode",
    position: { x: 0, y: 0 },
    data: { name: table.name },
    style: { border: "0.5px solid #fff", padding: "4px" },
  };
});

//TODO type enumの追加
export const ColumnNodeData: ColumnNode[] = tablesData.tables
  .map((table, index) => {
    return table.columns.map((column) => {
      return {
        id: `${table.name}.${column.name}`.toString(),
        type: "ColumnNode",
        position: { x: 0, y: index + 20 },
        data: { name: column.name, type: column.type },
        style: { border: "0.5px solid #fff", padding: "4px" },
        parentNode: table.name.toString(),
        extent: "parent",
        draggable: false,
      };
    });
  })
  .flat();

export const EdgeData: Edge[] = tablesData.relations.map((relation) => {
  return {
    id: relation.id,
    source: relation.from_col,
    target: relation.to_col,
    style: { stroke: "#fff" },
  };
});
