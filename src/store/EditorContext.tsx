import React, { createContext, useState, ReactNode } from "react";

interface EditorContextProps {
  text: string;
  setText: (value: string) => void;
  createSave: () => void;
}

const EditorContext = createContext<EditorContextProps>({
  text: "",
  setText: () => {},
  createSave: () => {},
});

const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [text, setText] = useState<string>("");
  const handleCreateSave = () => {
    setText(text);
  };

  return (
    <EditorContext.Provider value={{ text, setText }}>
      {children}
    </EditorContext.Provider>
  );
};

export { EditorContext, EditorProvider };
