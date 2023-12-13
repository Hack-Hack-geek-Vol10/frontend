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
      const positionY = index * 200;
      const positionX = index * 50;
      return {
        id: table.name,
        type: "TableNode",
        position: { x: positionX, y: positionY },
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
        const ColumnNodePositionY = index * 23 + 22;
        return {
          id: `${table.name}.${column.name}`.toString(),
          type: "ColumnNode",
          position: { x: 0, y: ColumnNodePositionY },
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
      source: relation.from,
      target: relation.to,
      style: { stroke: "#fff" },
    };
  });
  return { TableNodeData, ColumnNodeData, EdgeData };
};

export default DataFormat;
