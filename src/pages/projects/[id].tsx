import Header from "@/components/editor/EditorHeader/Header";
import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Canvas from "@/components/objects/Canvas";
import Editor from "@/components/editor/Editor";
import useTransition from "@/hooks/useTransition";
import {
  useEditorSubscriptionService,
  useCreateSaveService,
} from "@/service/useSaveService";
import DataFormat from "@/components/objects/DataFormat";
import { tablesData } from "@/components/objects/dummy";
import { EditorProvider, EditorContext } from "@/store/EditorContext";
const Id = () => {
  const { getPagePath } = useTransition();
  const { createSave } = useCreateSaveService();
  const { text } = useContext(EditorContext);
  const projectId = getPagePath().split("/")[2];

  const { data: SubscriptionData } = useEditorSubscriptionService(projectId!);

  const objData = SubscriptionData?.postEditor?.object;
  const editorData = SubscriptionData?.postEditor?.editor;

  const { TableNodeData, ColumnNodeData, EdgeData } = DataFormat(tablesData);
  const Post = [
    ...TableNodeData,
    ...ColumnNodeData,
    ...EdgeData,
  ] as unknown as string;

  useEffect(() => {
    if (text && Post) {
      createSave({
        variables: {
          input: {
            projectId: projectId!,
            editor: text,
            object: Post,
          },
        },
      });
    }

    // console.log(SubscriptionData?.postEditor!.object);
    // console.log(SubscriptionData?.postEditor!.editor);
    console.log();
  }, [text]);
  return (
    <EditorProvider>
      <Header />

      <Box display={"flex"}>
        <Box
          sx={{
            width: "40%",
            height: "100%",
          }}
        >
          <Editor data={editorData!} />
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
    </EditorProvider>
  );
};

export default Id;
