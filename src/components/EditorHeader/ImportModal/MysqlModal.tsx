import React from "react";
import GeneralModal from "@/components/commons/GeneralModal";
import { Button } from "@mui/material";

const MysqlModal = () => {
  return (
    <GeneralModal buttonContent={<Button>mysql</Button>}>
      ;<div>mysql</div>
    </GeneralModal>
  );
};

export default MysqlModal;
