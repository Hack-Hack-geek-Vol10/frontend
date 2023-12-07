import React from "react";
import { useRouter } from "next/router";
const useTransition = () => {
  const router = useRouter();

  const transitionPage = (path: string) => {
    router.push(path);
  };

  return { transitionPage };
};

export default useTransition;
