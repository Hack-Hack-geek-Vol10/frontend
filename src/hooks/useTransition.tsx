import React from "react";
import { useRouter } from "next/router";
const useTransition = () => {
  const router = useRouter();

  const getPagePath = () => {
    return router.pathname;
  };
  const transitionPage = (path: string) => {
    router.push(path);
  };
  const Reload = () => {
    router.reload();
  };

  return { transitionPage, getPagePath, Reload };
};

export default useTransition;
