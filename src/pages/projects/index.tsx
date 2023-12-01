import React, { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import Editor from "@/components/Editor";
import Header from "@/components/EditorHeader/Header";

const Index = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <h1>projects</h1>

      <Editor />
    </div>
  );
};

export default Index;
