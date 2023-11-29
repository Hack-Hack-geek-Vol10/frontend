import React, { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import Editor from "@/components/Editor";

const Index = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h1>projects</h1>
      <p>currentUser: {currentUser?.uid}</p>
      <Editor />
    </div>
  );
};

export default Index;
