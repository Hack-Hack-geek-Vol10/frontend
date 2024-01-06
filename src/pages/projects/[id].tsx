import Header from "@/components/editor/EditorHeader/Header";
import { Box } from "@/lib/mui/muiRendering";
import React, { use, useContext, useEffect } from "react";
import Canvas from "@/components/objects/Canvas";
import Editor from "@/components/editor/Editor";
import {
  useEditorSubscriptionService,
  useCreateSaveService,
} from "@/apis/useSaveService";
import { useRouter } from "next/router";
import DataFormat from "@/components/objects/DataFormat";

import { EditorContext } from "@/store/EditorContext";
import StringDataFormat from "@/components/objects/StringDataFormat";
import {
  ColumnNodeInterface,
  EdgeInterface,
  TableNodeInterface,
} from "@/types/ReactFlowInterface";
const Id = () => {
  const { createSave } = useCreateSaveService();
  const { text, setText } = useContext(EditorContext);
  const router = useRouter();
  const { id } = router.query;
  const projectId = id as string;

  const { data: SubscriptionData, loading } = useEditorSubscriptionService(
    projectId!
  );
  if (!loading) {
    console.log(SubscriptionData);
  }
  useEffect(() => {
    if (SubscriptionData && !loading && SubscriptionData?.postEditor?.editor) {
      setText(SubscriptionData?.postEditor.editor);
    }
  }, [SubscriptionData]);

  //受け取ったデータ
  const editorData = SubscriptionData?.postEditor?.editor;

  let TableNodeData: TableNodeInterface[] = [];
  let ColumnNodeData: ColumnNodeInterface[] = [];
  let EdgeData: EdgeInterface[] = [];

  if (editorData) {
    const { tables, relations } = StringDataFormat(editorData);
    console.log(tables);

    const dataFormatResult = DataFormat(tables, relations);
    if (dataFormatResult.TableNodeData && dataFormatResult.ColumnNodeData) {
      TableNodeData = dataFormatResult.TableNodeData;
      ColumnNodeData = dataFormatResult.ColumnNodeData;
    }
  }
  const post = { ...TableNodeData, ...ColumnNodeData, ...EdgeData };

  useEffect(() => {
    if (text) {
      createSave({
        variables: {
          input: {
            projectId: projectId!,
            editor: text,
            object: JSON.stringify(post),
          },
        },
      });
    }
  }, [text]);

  //送信するデータをバイトに変換

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
