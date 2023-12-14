import Header from "@/components/editor/EditorHeader/Header";
import { Box } from "@/lib/mui/muiRendering";
import React, { useContext, useEffect } from "react";
import Canvas from "@/components/objects/Canvas";
import Editor from "@/components/editor/Editor";
import {
  useEditorSubscriptionService,
  useCreateSaveService,
} from "@/service/useSaveService";
import { useRouter } from "next/router";
import DataFormat from "@/components/objects/DataFormat";
import { tablesData } from "@/components/objects/dummy";
import { EditorProvider, EditorContext } from "@/store/EditorContext";
const Id = () => {
  const { createSave } = useCreateSaveService();
  const { text } = useContext(EditorContext);
  const router = useRouter();
  const { id } = router.query;
  const projectId = id as string;

  const { data: SubscriptionData } = useEditorSubscriptionService(projectId!);

  const objData = SubscriptionData?.postEditor?.object; //byte
  const editorData = SubscriptionData?.postEditor?.editor; //string
  //stringに変換
  const objDataString = new TextDecoder().decode(objData);
  //送信するデータの整形
  const { TableNodeData, ColumnNodeData, EdgeData } = DataFormat(tablesData);

  const Post = [
    ...TableNodeData,
    ...ColumnNodeData,
    ...EdgeData,
  ] as unknown as string;
  const PostByte = new TextEncoder().encode(Post); //送信するデータをバイトに変換
  useEffect(() => {
    createSave({
      variables: {
        input: {
          projectId: projectId!,
          editor: text,
          object: PostByte,
        },
      },
    });
  }, [text]);
  console.log("text", text);
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
