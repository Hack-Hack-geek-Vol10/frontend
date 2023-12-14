import React from "react";

const useEditor = () => {
  const [text, setText] = React.useState("");

  const handleSave = () => {
    console.log(text);
  };
  return { text, setText };
};

export default useEditor;
