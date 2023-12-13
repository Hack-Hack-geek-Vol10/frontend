import { from } from "@apollo/client";
import {
  TableNodeInterface,
  ColumnNodeInterface,
  EdgeInterface,
} from "@/types/ReactFlowInterface";

const DataFormat = (objData: any) => {
  const TableNodeData: TableNodeInterface[] = objData.tables.map(
    (table: any, index: number) => {
      const tableHeight = table.columns.length * 23;
      return {
        id: table.name,
        type: "TableNode",
        position: { x: 0, y: index * 200 },
        data: { name: table.name },
        style: {
          border: "0.5px solid #fff",
          padding: "4px",
          height: `${tableHeight}px`,
        },
      };
    }
  );

  const ColumnNodeData: ColumnNodeInterface[] = objData.tables
    .map((table: any) => {
      return table.columns.map((column: any, index: number) => {
        const positionY = index * 23 + 22;
        return {
          id: `${table.name}.${column.name}`.toString(),
          type: "ColumnNode",
          position: { x: 0, y: positionY },
          data: { name: column.name, type: column.type },
          style: { border: "0.5px solid #fff", padding: "4px" },
          parentNode: table.name.toString(),
          extent: "parent",
          draggable: false,
        };
      });
    })
    .flat();

  const EdgeData: EdgeInterface[] = objData.relations.map((relation: any) => {
    return {
      id: relation.id,
      source: relation.from_col,
      target: relation.to_col,
      style: { stroke: "#fff" },
    };
  });
  return { TableNodeData, ColumnNodeData, EdgeData };
};

export default DataFormat;
