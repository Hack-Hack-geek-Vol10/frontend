import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import firebase from "firebase/app";
import "firebase/auth";

// ユーザー情報の型定義
interface User {
  userId: string;
  name: string | null;
  icon: string | null;
}

// Contextの型定義
interface FirebaseContextType {
  user: User | null;
}

export const FirebaseContext = createContext<FirebaseContextType | null>(null);

interface FirebaseProviderProps {
  children: ReactNode;
}

const FirebaseProvider: React.FC<FirebaseProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((currentUser: any) => {
        if (currentUser) {
          const { uid, displayName, photoURL } = currentUser;
          setUser({ userId: uid, name: displayName, icon: photoURL });
        } else {
          setUser(null);
        }
      });

    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider value={{ user }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
