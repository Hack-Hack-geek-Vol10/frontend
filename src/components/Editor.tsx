import React from "react";
import { Box } from "@/lib/mui/muiRendering";
import ReactAce from "react-ace/lib/ace";
import useEditor from "@/hooks/useEditor";
const Editor = () => {
  const { text, setText } = useEditor();
  return (
    <Box
      sx={{
        width: "40%",
        borderRight: "1px solid #ccc",
      }}
    >
      <ReactAce
        theme='monokai'
        onChange={setText}
        value={text}
        name='UNIQUE_ID_OF_DIV'
        width='100%'
        editorProps={{ $blockScrolling: true }}
        height=' calc(100vh - 40px)'
      />
    </Box>
  );
};

export default Editor;
