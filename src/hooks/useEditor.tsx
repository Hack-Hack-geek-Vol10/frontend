import React from "react";

const useEditor = () => {
  const [text, setText] = React.useState("");

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!e.target) {
      console.error("Event object is not as expected");
      return;
    }
    const EventText = e.target.value;
    setText(EventText.toString());
  };
  const handleSave = () => {
    console.log(text);
  };
  return { text, setText, handleChangeText };
};

export default useEditor;
