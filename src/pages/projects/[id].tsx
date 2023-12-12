import Header from "@/components/EditorHeader/Header";
import { Box } from "@mui/material";
import React from "react";
import Canvas from "@/components/objects/Canvas";
import Editor from "@/components/editor/Editor";
import useTransition from "@/hooks/useTransition";
import { useEditorSubscriptionService } from "@/service/useSaveService";
import DataFormat from "@/components/objects/DataFormat";
import { useGetProject } from "@/service/useProjectService";
const Id = () => {
  const { getPagePath } = useTransition();
  const projectId = getPagePath().split("/")[2];
  const { data: projectData } = useGetProject(projectId!);

  const { data, loading, error } = useEditorSubscriptionService(projectId!);

  const editorData = data?.postEditor?.editor;
  const objData = data?.postEditor?.object;
  const { TableNodeData, ColumnNodeData, EdgeData } = DataFormat(objData);
  console.log(data);
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
          <Editor data={editorData} />
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
            loading={loading}
            error={error}
            projectId={projectId!}
            title={projectData?.project?.title!}
          />
        </Box>
      </Box>
    </>
  );
};

export default Id;
