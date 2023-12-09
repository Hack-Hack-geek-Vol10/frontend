import { Grid, Typography, Paper, Button, Box } from "@/lib/mui/muiRendering";
import { AuthContext } from "@/store/AuthContext";
import { useContext } from "react";
import { useGetUserProjects } from "@/service/useProjectService";
import useTransition from "@/hooks/useTransition";
import DeleteProjectButton from "@/components/projects/DeleteProjectButton";
import CardMedia from "@mui/material/CardMedia";

const ProjectCardList = () => {
  const { currentUser } = useContext(AuthContext);
  const { transitionPage } = useTransition();
  const userId = currentUser?.uid;

  const { data } = useGetUserProjects(userId!);

  const handleGoToProject = (projectId: string) => () => {
    transitionPage(`/projects/${projectId}`);
  };

  const projects = data?.projects;

  return (
    <>
      <Typography variant='h3' sx={{ ml: 2 }}>
        Team
      </Typography>

      <Grid
        container
        xs={12}
        spacing={2}
        sx={{
          padding: "20px",
        }}
      >
        {Array.isArray(projects) &&
          projects.map((item: any) => (
            <Grid item xs={3} key={item.projectId}>
              <Paper
                elevation={5}
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "white",
                  height: "100px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Adjust the position of title and buttons
                }}
              >
                <CardMedia title='thumbnail' image={item.imageUrl} />

                <Typography variant='h6' sx={{ ml: 1 }}>
                  {item.title}
                </Typography>

                <Box>
                  <Button
                    onClick={handleGoToProject(item.projectId)}
                    variant='outlined'
                  >
                    Go to Project
                  </Button>
                  <DeleteProjectButton projectId={item.projectId} />
                </Box>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default ProjectCardList;
