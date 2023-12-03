import React, { useState } from "react";
import { Box, Button, Grid, TextField, AddIcon } from "@/lib/mui/muiRendering";
import { useMutation } from "@apollo/client";
import {
  CreateProjectMutation,
  CreateProjectMutationVariables,
  CreateProjectDocument,
} from "@/generated/graphql";
import GeneralModal from "@/components/commons/GeneralModal";

import { useRouter } from "next/router";

const CreateProject = () => {
  const [title, setTitle] = useState("");

  const router = useRouter();

  const [createProject, { data, loading, error }] = useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument);

  const handleCreateProject = async () => {
    await createProject({
      variables: {
        title: title,
      },
    });
  };

  return (
    <GeneralModal buttonContent={<AddIcon />}>
      <TextField
        label='プロジェクト名'
        variant='outlined'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant='outlined' onClick={handleCreateProject}>
        Create Project
      </Button>
    </GeneralModal>
  );
};

export default CreateProject;
