import {
  IconButton,
  TextField,
  Typography,
  BorderColorSharpIcon,
  Box,
} from "@/lib/mui/muiRendering";
import useTitle from "@/hooks/useTitle";
import { useUpdateProject } from "@/service/useProjectService";

interface Props {
  projectId: string;
  title: string;
  lastImage: File;
}

const CardTitle = (props: Props) => {
  const { projectId, title, lastImage } = props;
  const { updateProject } = useUpdateProject();
  const { open, titleState, handleOpen, handleTitle } = useTitle();

  const handleUpdateProject = async () => {
    await updateProject({
      variables: {
        projectId: projectId,
        title: titleState,
        lastImage: lastImage,
      },
    });
  };

  return (
    <>
      {!open ? (
        <IconButton onClick={handleOpen}>
          <Typography variant='h6' sx={{ ml: 1 }}>
            {title}
          </Typography>
        </IconButton>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              sx={{
                width: "80%",
                mx: 1,
              }}
              label={`${title}`}
              variant='standard'
              value={titleState}
              onChange={handleTitle}
            ></TextField>
            <BorderColorSharpIcon onClick={handleUpdateProject} />
          </Box>
        </>
      )}
    </>
  );
};

export default CardTitle;
