import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  AddIcon,
  Box,
  Typography,
} from "@/lib/mui/muiRendering";
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
    <GeneralModal
      buttonContent={
        <AddIcon
          sx={{
            color: "black",
          }}
        />
      }
    >
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            mb: 2,
          }}
        >
          Create Project
        </Typography>
        <TextField
          label='Project Name'
          variant='outlined'
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Box
          sx={{
            textAlign: "right",
          }}
        >
          <Button
            variant='outlined'
            onClick={handleCreateProject}
            disabled={title === ""}
          >
            Create
          </Button>
        </Box>
      </Box>
    </GeneralModal>
  );
};

export default CreateProject;
