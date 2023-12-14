import React, { createContext, useState, ReactNode } from "react";

interface EditorContextProps {
  text: string;
  setText: (value: string) => void;
}

const EditorContext = createContext<EditorContextProps>({
  text: "",
  setText: () => {},
});

const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [text, setText] = useState<string>("");
  console.log("text", text);

  return (
    <EditorContext.Provider value={{ text, setText }}>
      {children}
    </EditorContext.Provider>
  );
};

export { EditorContext, EditorProvider };
