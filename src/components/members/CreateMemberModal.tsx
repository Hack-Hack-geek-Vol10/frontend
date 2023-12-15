import React from "react";
import GeneralModal from "../commons/GeneralModal";
import { Button, TextField, Typography } from "@mui/material";
import { useCreateProjectMemberService } from "@/service/useProjectMemberService";
import { useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/store/AuthContext";
import { useContext } from "react";
import { GroupsIcon } from "@/lib/mui/muiRendering";
const CreateMemberModal = () => {
  const { createProjectMember, data, loading, error } =
    useCreateProjectMemberService();
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid;
  const [link, setLink] = useState("");

  const router = useRouter();

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
        onClick={() => {
          handleCreateProjectMember(link);
        }}
      >
        Join
      </Button>
    </GeneralModal>
  );
};

export default CreateMemberModal;
