import Header from "@/components/EditorHeader/Header";
import { Box } from "@mui/material";
import React from "react";
import Canvas from "@/components/objects/Canvas";
import Editor from "@/components/editor/Editor";
import useTransition from "@/hooks/useTransition";
import { useEditorSubscriptionService } from "@/service/useSaveService";
import DataFormat from "@/components/objects/DataFormat";
import { tablesData } from "@/components/objects/dummy";
const Id = () => {
  const { getPagePath } = useTransition();
  const projectId = getPagePath().split("/")[2];
  // const { data: projectData } = useGetProject(projectId!);

  // const { data, loading, error } = useEditorSubscriptionService(projectId!);

  // const editorData = data?.postEditor?.editor;
  // const objData = data?.postEditor?.object;
  // const { TableNodeData, ColumnNodeData, EdgeData } = DataFormat(objData);
  const { TableNodeData, ColumnNodeData, EdgeData } = DataFormat(tablesData);

  return (
    <>
      <Header />

      <Box display={"flex"}>
        <Box
          sx={{
            width: "40%",
            height: "100%",
          }}
        >
          <Editor />
          {/* <Editor data={editorData} /> */}
        </Box>

        <Box
          sx={{
            width: "60%",
            height: "100%",
          }}
        >
          <Canvas
            TableNodeData={TableNodeData}
            ColumnNodeData={ColumnNodeData}
            EdgeData={EdgeData}
          />
        </Box>
      </Box>
    </>
  );
};

export default Id;
