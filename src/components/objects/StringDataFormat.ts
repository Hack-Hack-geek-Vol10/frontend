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
  const relations: Relation[] = [];

  definition.split("\n\n").forEach((tableDef) => {
    //
    if (!tableDef.includes("table ")) {
      //
      // This handles the relations
      const relationMatch = tableDef.match(/(\w+)\.(\w+) > (\w+)\.(\w+)/); //
      console.log("relationMatch" + relationMatch);
      if (relationMatch) {
        const [_, fromTable, fromColumn, toTable, toColumn] = relationMatch;
        relations.push({
          id: fromTable + "To" + toTable,
          from: fromTable + "." + fromColumn,
          to: toTable + "." + toColumn,
        });
        console.log("relations" + relations);
      }
      return;
    }

    // Below is the existing logic to parse tables and columns
    const lines = tableDef.split("\n");
    const tableName = lines[0].split(" ")[1]; //ここでtable名を取得している
    console.log(lines);
    const columns: Column[] = lines.slice(1, -1).map((line) => {
      console.log("lines.split" + line.slice(1, -1));
      const name = line.match(/`.*?`/)?.[0] || ""; //ここで`で囲まれた文字列を取得している
      const type = line.match(/-\s.*?$/)?.[0] || "";
      // -の後の文字列を取得している
      const options = line.match(/\[.*?\]/g) || []; //ここで[]で囲まれた文字列を取得している

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
