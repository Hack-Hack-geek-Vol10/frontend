import React, { useContext, useEffect, useState } from "react";
import { Box } from "@/lib/mui/muiRendering";
import ReactAce from "react-ace/lib/ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import { useCreateSaveService } from "@/service/useSaveService";
import { AuthContext } from "@/store/AuthContext";
import { EditorContext } from "@/store/EditorContext";
interface Props {
  data: string | null;
}
const Editor = (props: Props) => {
  const { text, setText } = useContext(EditorContext);
  const { data } = props;
  // サブスクリプションのデータが更新されたら、エディタの状態を更新
  useEffect(() => {
    if (data) {
      setText(data);
    }
  }, [data, setText]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 65px)",
        borderRight: "1px solid #ccc",
      }}
    >
      <ReactAce
        theme='monokai'
        value={text}
        onChange={(value) => {
          if (!value) {
            console.error("Event object is not as expected");
            return;
          }
          setText(value.toString());
          console.log(data);
        }}
        name='UNIQUE_ID_OF_DIV'
        width='100%'
        height='100%'
        editorProps={{ $blockScrolling: true }}
      />
    </Box>
  );
};

export default Editor;
