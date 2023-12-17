import {
  TableNodeInterface,
  ColumnNodeInterface,
  EdgeInterface,
  CustomTableNode,
  CustomColumnNode,
} from "@/types/ReactFlowInterface";

function convertToVisualizationData(
  tables: any,
  relations: any
): {
  TableNodeData: TableNodeInterface[];
  ColumnNodeData: ColumnNodeInterface[];
  EdgeData: EdgeInterface[];
} {
  const TableNodeData: TableNodeInterface[] = tables.map(
    (table: any, index: any) => {
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

  const ColumnNodeData: ColumnNodeInterface[] = tables
    .map((table: any) => {
      return table.columns.map((column: any, index: any) => {
        const ColumnNodePositionY = index * 23 + 22;
        console.log("id" + `${table.name}.${column.name}`);
        return {
          id: `${table.name}.${column.name}`,
          type: "ColumnNode",
          position: { x: 0, y: ColumnNodePositionY },
          data: { name: column.name, type: column.type },
          style: { border: "0.5px solid #fff", padding: "4px" },
          parentNode: table.name,
          extent: "parent",
          draggable: false,
        };
      });
    })
    .flat();

  const EdgeData: EdgeInterface[] = relations.map((relation: any) => {
    console.log("relation" + relation);
    console.log("relation" + relation.id);
    console.log("relation" + relation.from);
    console.log("relation" + relation.to);
    return {
      id: relation.id,
      source: relation.from,
      target: relation.to,
      style: { stroke: "#fff" },
    };
  });

  return { TableNodeData, ColumnNodeData, EdgeData };
}

export default convertToVisualizationData;
