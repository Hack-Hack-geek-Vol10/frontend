import { useState, useEffect } from "react";
import "firebase/auth";
import firebase from "firebase/app";
import { auth } from "@/lib/firebase/client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

type AuthState = {
  user: firebase.User | null;
  loading: boolean;
  error: firebase.auth.Error | null;
};

const useFirebase = (): AuthState & {
  signInWithGoogle: () => Promise<void>;
} => {
  const [state, setState] = useState<any>({
    user: null,
    loading: true,
    error: null,
  });

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      setState({ ...state, user: res.user, loading: false });

      console.log(res.user);
    } catch (err) {
      setState({ ...state, error: err });
    }
  };

  return {
    ...state,
    signInWithGoogle,
  };
};

export default useFirebase;
