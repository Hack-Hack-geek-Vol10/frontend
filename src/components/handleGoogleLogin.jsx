import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  getIdToken,
} from "firebase/auth";

import { app } from "../lib/firebase/client";
const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  // ログイン状態の永続化を設定
  try {
    // Googleでのログイン処理
    await signInWithPopup(auth, provider);
    // ログイン後のユーザー情報を取得
    if (!auth.currentUser) throw new Error("No current user");
    // ユーザー情報の取得
    const token = await getIdToken(auth.currentUser);
    console.log("Token: ", token);
    console.log("Google login successful");
  } catch (error) {
    console.error("Google login failed:", error);
  }
};

export default handleGoogleLogin;
