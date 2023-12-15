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
import { EditorContext } from "@/store/EditorContext";
const Id = () => {
  const { createSave } = useCreateSaveService();
  const { text } = useContext(EditorContext);
  const router = useRouter();
  const { id } = router.query;
  const projectId = id as string;

  const { data: SubscriptionData } = useEditorSubscriptionService(projectId!);
  console.log(SubscriptionData);
  //受け取ったデータ
  const objData = SubscriptionData?.postEditor?.object; //byte
  const editorData = SubscriptionData?.postEditor?.editor; //string
  //obj stringに変換
  const objDataString = new TextDecoder().decode(objData);

  //送信するデータの整形

  const { TableNodeData, ColumnNodeData, EdgeData } = DataFormat(tablesData);

  const PostObj = [
    ...TableNodeData,
    ...ColumnNodeData,
    ...EdgeData,
  ] as unknown as string;
  //送信するデータをバイトに変換
  const PostObjByte = new TextEncoder().encode(PostObj);

  // Uint8Array を通常の文字列に変換
  const PostObjString = Array.from(PostObjByte)
    .map((byte) => String.fromCharCode(byte))
    .join(""); //string

  // 文字列をBase64に変換
  const base64Data = btoa(PostObjString);
  useEffect(() => {
    if (text) {
      createSave({
        variables: {
          input: {
            projectId: projectId!,
            editor: text,
            object: base64Data,
          },
        },
      });
    }
  }, [text]);

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
    </>
  );
};

export default Id;
