import React from "react";
import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";

const index = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div>
      <h1>projects</h1>
      <p>currentUser: {currentUser?.i}</p>
    </div>
  );
};

export default index;
