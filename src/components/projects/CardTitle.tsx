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
        <IconButton
          onClick={handleOpen}
          sx={{
            textAlign: "left",
            justifyContent: "left",
            p: 0,
            ml: 1,
          }}
        >
          <Typography variant='h6' sx={{ ml: 1, textAlign: "left" }}>
            {title}
          </Typography>
        </IconButton>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",

              textAlign: "left",
              justifyContent: "space-between",
              px: 1,
            }}
          >
            <TextField
              sx={{
                width: "50%",
                mx: 1,
                textAlign: "left",
              }}
              label={`${title}`}
              variant='standard'
              value={titleState}
              onChange={handleTitle}
            />
            <BorderColorSharpIcon
              sx={{
                position: "relative",
                top: "50%",
                ml: 1,
              }}
              onClick={handleUpdateProject}
            />
          </Box>
        </>
      )}
    </>
  );
};

export default CardTitle;
