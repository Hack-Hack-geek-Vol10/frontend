import React, { useEffect, useState } from "react";
import { Button, TextField, AddIcon } from "@/lib/mui/muiRendering";
import { useCreateProject } from "@/service/useProjectService";
import GeneralModal from "@/components/commons/GeneralModal";
import useTransition from "@/hooks/useTransition";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const { createProject, data } = useCreateProject();
  const { transitionPage } = useTransition();

  const handleCreateProject = async () => {
    await createProject({ variables: { title } });
    return data;
  };

  useEffect(() => {
    if (data) {
      transitionPage(`/projects/${data.createProject!.projectId}`);
    }
  }, [data]);

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
