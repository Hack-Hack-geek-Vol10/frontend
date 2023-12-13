import Header from "@/components/EditorHeader/Header";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Canvas from "@/components/objects/Canvas";
import Editor from "@/components/editor/Editor";
import useTransition from "@/hooks/useTransition";
import {
  useEditorSubscriptionService,
  useCreateSaveService,
} from "@/service/useSaveService";
import DataFormat from "@/components/objects/DataFormat";
import { tablesData } from "@/components/objects/dummy";
const Id = () => {
  const { getPagePath } = useTransition();
  const { createSave } = useCreateSaveService();
  const projectId = getPagePath().split("/")[2];

  const { data: SubscriptionData } = useEditorSubscriptionService(projectId!);

  const editorData = SubscriptionData?.postEditor?.editor;

  const { TableNodeData, ColumnNodeData, EdgeData } = DataFormat(tablesData);
  const Post = [
    ...TableNodeData,
    ...ColumnNodeData,
    ...EdgeData,
  ] as unknown as string;

  console.log(SubscriptionData);
  useEffect(() => {
    if (editorData && Post) {
      createSave({
        variables: {
          input: {
            projectId: projectId!,
            editor: editorData,
            object: Post,
          },
        },
      });
    }
  }, [SubscriptionData]);
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
          />
        </Box>
      </Box>
    </>
  );
};

export default Id;
