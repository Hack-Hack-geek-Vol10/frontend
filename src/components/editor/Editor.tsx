import React, { useContext, useEffect, useState } from "react";
import { Box } from "@/lib/mui/muiRendering";
import ReactAce from "react-ace/lib/ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import { useEditorSubscriptionService } from "@/service/useSubscriptionService";
import { AuthContext } from "@/store/AuthContext";

interface EditorProps {
  // ここにpropsの型定義を追加する
}

const Editor: React.FC<EditorProps> = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState<string>("");
  const userId = currentUser?.uid;

  // サブスクリプションからデータを受け取る
  const { data, loading, error } = useEditorSubscriptionService(userId!);

  // サブスクリプションのデータが更新されたら、エディタの状態を更新
  useEffect(() => {
    if (data && data.postEditor && !loading && !error) {
      setText(data.postEditor?.editor); // `someField`は受け取ったデータの適切なフィールド
    }
  }, [data, loading, error]);

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setText(newValue);
    // ここでnewValueをサーバーに送信するミューテーションを呼び出す
  };

  // エラーハンドリング
  if (error) {
    return <div>エラーが発生しました: {error.message}</div>;
  }

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
