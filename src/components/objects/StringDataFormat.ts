import React from "react";
interface Column {
  name: string;
  type: string;
  options: string[];
}

interface Table {
  name: string;
  position: { x: number; y: number };
  columns: Column[];
}

interface Relation {
  id: string;
  from: string;
  to: string;
}

interface TablesData {
  tables: Table[];
  relations: Relation[];
}

function parseTableDefinition(definition: string): TablesData {
  const tables: Table[] = [];
  const relations: Relation[] = []; // この部分は関連性の定義に基づいて拡張する必要がある

  definition.split("\n\n").forEach((tableDef) => {
    const lines = tableDef.split("\n");
    const tableName = lines[0].split(" ")[1];
    const columns: Column[] = lines.slice(1, -1).map((line) => {
      const [name, type] = line.split(" ");
      const options = type.match(/\[(.*?)\]/)?.[1].split(",") || [];
      return {
        name: name.trim(),
        type: type.replace(/\[.*?\]/, "").trim(),
        options: options.map((opt) => opt.trim()),
      };
    });

    tables.push({
      name: tableName,
      position: { x: 0, y: 0 },
      columns: columns,
    });
  });

  return { tables, relations };
}

export default parseTableDefinition;
