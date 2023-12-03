import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { useModal } from "@/hooks/useModal";
import { IconButton, Modal } from "@/lib/mui/muiRendering";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 20,
  p: 4,
};
export default function GeneralModal({
  children,
  buttonContent = <></>, //Reactのコンポーネントを受け取る
}) {
  const { open, handleOpen, handleClose } = useModal();
  return (
    <>
      <IconButton onClick={handleOpen}>{buttonContent}</IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </>
  );
}
