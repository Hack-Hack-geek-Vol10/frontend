import React from "react";
import { useState } from "react";
const useTitle = () => {
  const [open, setOpen] = useState(false);
  const [titleState, setTitle] = useState();
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };
  return { open, setOpen, titleState, setTitle, handleOpen, handleTitle };
};
export default useTitle;
