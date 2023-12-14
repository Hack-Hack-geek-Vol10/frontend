import React, { createContext, useState, ReactNode } from "react";

interface EditorContextProps {
  text: string;
  setText: (value: string) => void;
  handleCreateSave: () => void;
}

const EditorContext = createContext<EditorContextProps>({
  text: "",
  setText: () => {},
  handleCreateSave: () => {},
});

const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [text, setText] = useState<string>("");
  const handleCreateSave = () => {
    setText(text);
  };

  return (
    <EditorContext.Provider value={{ text, setText, handleCreateSave }}>
      {children}
    </EditorContext.Provider>
  );
};

export { EditorContext, EditorProvider };
