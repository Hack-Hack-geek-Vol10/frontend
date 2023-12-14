import React from "react";

const useEditor = () => {
  const [text, setText] = React.useState("");

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const EventText = e.target.value;
    if (!e.target) {
      console.error("Event object is not as expected");
      return;
    }

    setText(EventText.toString());
  };
  const handleSave = () => {
    console.log(text);
  };
  return { text, setText, handleChangeText };
};

export default useEditor;
