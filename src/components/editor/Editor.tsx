import React, { useContext, useEffect, useState } from "react";
import { Box } from "@/lib/mui/muiRendering";
import ReactAce from "react-ace/lib/ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import { useCreateSaveService } from "@/service/useSaveService";
import { AuthContext } from "@/store/AuthContext";
import useEditor from "@/hooks/useEditor";

const Editor: React.FC = (props: any) => {
  const { currentUser } = useContext(AuthContext);
  const { data, loading } = props;
  const { text, setText, handleChangeText } = useEditor();
  // サブスクリプションのデータが更新されたら、エディタの状態を更新
  useEffect(() => {
    if (!loading && data) {
      setText(data);
    }
  }, [data]);

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
        onChange={handleChangeText}
        name='UNIQUE_ID_OF_DIV'
        width='100%'
        height='100%'
        editorProps={{ $blockScrolling: true }}
      />
    </Box>
  );
};

export default Editor;
