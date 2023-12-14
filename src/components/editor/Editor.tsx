import React, { useContext, useEffect, useState } from "react";
import { Box } from "@/lib/mui/muiRendering";
import ReactAce from "react-ace/lib/ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import { useCreateSaveService } from "@/service/useSaveService";
import { EditorContext } from "@/store/EditorContext";
interface Props {
  data: string;
}
const Editor = (props: Props) => {
  const { text, setText } = useContext(EditorContext);
  const { data } = props;
  useEffect(() => {
    setText(data);
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
        value={text}
        onChange={(value) => {
          setText(value);
        }}
        width='100%'
        height='100%'
        editorProps={{ $blockScrolling: true }}
      />
    </Box>
  );
};

export default Editor;
