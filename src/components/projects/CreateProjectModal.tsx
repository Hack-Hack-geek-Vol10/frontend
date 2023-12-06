import React, { use, useState } from "react";
import { Button, TextField, AddIcon } from "@/lib/mui/muiRendering";
import { useCreateProject } from "@/service/useProjectService";
import GeneralModal from "@/components/commons/GeneralModal";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const { createProject, data } = useCreateProject();
  const router = useRouter();

  const handleCreateProject = async () => {
    await createProject({ variables: { title } });
    return data;
  };

  useEffect(() => {
    if (data) {
      router.push(`/projects/${data.createProject!.projectId}`);
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
