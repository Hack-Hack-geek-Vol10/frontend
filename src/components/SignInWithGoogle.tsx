import React, { useContext } from "react";
import useAuth from "@/hooks/useFirebase";
import { AuthContext } from "@/store/AuthContext";

const SignInWithGoogle = () => {
  const { currentUser } = useContext(AuthContext);
  const signInWithGoogle = useAuth().signInWithGoogle;

  return (
    <div>
      {currentUser ? (
        <div>
          <p>ログイン中</p>
          <p>{currentUser.displayName}</p>
          <p>{currentUser.email}</p>
          <p>{currentUser.photoURL}</p>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Googleでログイン</button>
      )}
    </div>
  );
};

export default SignInWithGoogle;
