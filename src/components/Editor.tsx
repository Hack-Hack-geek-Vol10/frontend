import React from "react";
import ReactAce from "react-ace/lib/ace";
import { text } from "stream/consumers";
import useEditor from "@/hooks/useEditor";
const Editor = () => {
  const { text, setText, width } = useEditor();
  return (
    <ReactAce
      theme='monokai'
      onChange={setText}
      value={text}
      name='UNIQUE_ID_OF_DIV'
      width={width}
      editorProps={{ $blockScrolling: true }}
      height=' calc(100vh - 40px)'
    />
  );
};

export default Editor;
