import React from "react";
import {
  Button,
  TextField,
  AddIcon,
  Box,
  Typography,
} from "@/lib/mui/muiRendering";
import { useUpdateProject } from "@/service/useProjectService";
import GeneralModal from "@/components/commons/GeneralModal";
import { useForm, Controller } from "react-hook-form";

interface Props {
  projectId: string;
}

const CreateProject = (props: Props) => {
  const { projectId } = props;
  const { updateProject, data } = useUpdateProject();

  const { handleSubmit, control } = useForm();
  const handleCreateProject = async (formData: any) => {
    const { title, image } = formData;
    await updateProject({ variables: { projectId, title, image } });
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
        <form onSubmit={handleSubmit(handleCreateProject)}>
          <Controller
            name='title'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                label='プロジェクト名'
                variant='outlined'
                fullWidth
              />
            )}
          />
          <Controller
            name='image'
            control={control}
            defaultValue=''
            render={({ field }) => <input {...field} type='file' />}
          />
          <Box
            sx={{
              textAlign: "right",
              mt: 2,
            }}
          >
            <Button type='submit' variant='outlined'>
              Update
            </Button>
          </Box>
        </form>
      </Box>
    </GeneralModal>
  );
};

export default CreateProject;
