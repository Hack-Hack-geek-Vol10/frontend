import React, { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";

const Index = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h1>projects</h1>
      <p>currentUser: {currentUser?.uid}</p>
    </div>
  );
};

export default Index;
