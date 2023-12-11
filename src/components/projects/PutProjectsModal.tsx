import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  AddIcon,
  Box,
  Typography,
} from "@/lib/mui/muiRendering";
import { useUpdateProject } from "@/service/useProjectService";
import GeneralModal from "@/components/commons/GeneralModal";
import useTransition from "@/hooks/useTransition";

interface Props {
  projectId: string;
}

const CreateProject = (props: Props) => {
  const { projectId } = props;
  const [title, setTitle] = useState("");
  const { updateProject, data } = useUpdateProject();
  const { transitionPage } = useTransition();

  const handleCreateProject = async () => {
    await updateProject({ variables: { projectId, title, lastImage } });
    return data;
  };

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
          プロジェクト内容を更新
        </Typography>
        <TextField
          label='プロジェクト名'
          variant='outlined'
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type='file' />

        <Box
          sx={{
            textAlign: "right",
          }}
        >
          <Button
            variant='outlined'
            onClick={handleCreateProject}
            disabled={title === ""}
            sx={{
              mt: 2,
            }}
          >
            Update
          </Button>
        </Box>
      </Box>
    </GeneralModal>
  );
};

export default CreateProject;
