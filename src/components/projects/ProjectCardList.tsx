import { Grid, Typography, Paper, Button } from "@/lib/mui/muiRendering";
import { useMemo, useEffect, memo, useCallback } from "react";
import { AuthContext } from "@/store/AuthContext";
import { useContext } from "react";
import { useGetUserProjects } from "@/service/useProjectService";
import { useRouter } from "next/router";
import CardMedia from "@mui/material/CardMedia";
import DeleteProjectButton from "@/components/projects/DeleteProjectButton";

const ProjectCardList = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid;
  const router = useRouter();
  const { data, loading } = useGetUserProjects(userId!);

  const handleGoToProject = (projectId: string) => () => {
    router.push(`/projects/${projectId}`);
  };

  const projects = data?.projects;
  console.log(projects);
  return (
    <>
      <Typography variant='h3' sx={{ ml: 2 }}>
        Team
      </Typography>

      <Grid
        container
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
                }}
              >
                <CardMedia title='eeeee' image={`${item.lastImage}`} />
                <Typography variant='h6' gutterBottom>
                  Card Title {item.title}
                </Typography>

                <Button
                  onClick={handleGoToProject(item.projectId)}
                  variant='outlined'
                >
                  Go to Project
                </Button>
                <DeleteProjectButton projectId={item.projectId} />
              </Paper>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default ProjectCardList;
