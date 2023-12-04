import React, { useState } from "react";
import { Button, TextField, AddIcon } from "@/lib/mui/muiRendering";
import { useCreateProject } from "@/service/useProjectService";
import GeneralModal from "@/components/commons/GeneralModal";
import { useRouter } from "next/router";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const { createProject, data } = useCreateProject();
  const router = useRouter();

  const handleCreateProject = async () => {
    await createProject({ variables: { title } });
    return data;
  };

  if (data) {
    router.push(`/projects/${data.createProject!.projectId}`);
  }
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
