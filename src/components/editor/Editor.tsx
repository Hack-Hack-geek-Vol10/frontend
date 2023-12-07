import React from "react";
import { Box } from "@/lib/mui/muiRendering";
import ReactAce from "react-ace/lib/ace";
import useEditor from "@/hooks/useEditor";
const Editor = () => {
  const { text, setText } = useEditor();
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
        onChange={setText}
        value={text}
        name='UNIQUE_ID_OF_DIV'
        width='100%'
        height='100%'
        editorProps={{ $blockScrolling: true }}
      />
    </Box>
  );
};

export default Editor;
