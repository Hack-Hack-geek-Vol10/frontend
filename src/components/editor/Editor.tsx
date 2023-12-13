import React, { useContext, useEffect, useState } from "react";
import { Box } from "@/lib/mui/muiRendering";
import ReactAce from "react-ace/lib/ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import { useEditorSubscriptionService } from "@/service/useSaveService";
import { AuthContext } from "@/store/AuthContext";

const Editor: React.FC = (props: any) => {
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState<string>("");
  const { data } = props;

  // サブスクリプションのデータが更新されたら、エディタの状態を更新
  useEffect(() => {
    if (data && data.postEditor) {
      setText(data.postEditor?.editor); // `someField`は受け取ったデータの適切なフィールド
    }
  }, [data]);

  const handleChangeText = (newValue: string) => {
    setText(newValue);
    // ここでnewValueをサーバーに送信するミューテーションを呼び出す
  };

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
