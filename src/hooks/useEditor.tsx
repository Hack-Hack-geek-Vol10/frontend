import React from "react";

const useEditor = () => {
  const [text, setText] = React.useState("");

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return { text, setText };
};

export default useEditor;
