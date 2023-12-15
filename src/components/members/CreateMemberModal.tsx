import React from "react";
import GeneralModal from "../commons/GeneralModal";
import { Button, TextField, Typography } from "@mui/material";
import { useCreateProjectMemberService } from "@/service/useProjectMemberService";
import { useState } from "react";
import { AuthContext } from "@/store/AuthContext";
import { useContext } from "react";
import { GroupsIcon } from "@/lib/mui/muiRendering";
import useTransition from "@/hooks/useTransition";
const CreateMemberModal = () => {
  const { createProjectMember, data, loading, error } =
    useCreateProjectMemberService();
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid;
  const [link, setLink] = useState("");
  const { transitionPage } = useTransition();

  const handleCreateProjectMember = (link: string) => {
    createProjectMember({
      variables: {
        token: link,
      },
    });
  };
  return (
    <GeneralModal buttonContent={<GroupsIcon />}>
      <Typography>メンバー追加</Typography>

      <TextField
        label='招待ID'
        variant='outlined'
        fullWidth
        onChange={(e) => setLink(e.target.value)}
      />
      <Button
        disabled={link === null}
        onClick={async () => {
          await handleCreateProjectMember(link);
          transitionPage("/projects/");
        }}
      >
        Join
      </Button>
    </GeneralModal>
  );
};

export default CreateMemberModal;
