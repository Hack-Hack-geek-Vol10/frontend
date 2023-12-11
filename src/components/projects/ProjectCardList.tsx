import {
  Grid,
  Typography,
  Paper,
  Button,
  Box,
  Avatar,
} from "@/lib/mui/muiRendering";
import { AuthContext } from "@/store/AuthContext";
import { useContext } from "react";
import { useGetUserProjects } from "@/service/useProjectService";
import useTransition from "@/hooks/useTransition";
import DeleteProjectButton from "@/components/projects/DeleteProjectButton";
import CardTitle from "./CardTitle";
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

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Adjust the position of title and buttons
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "80px",
                    overflow: "hidden",
                    borderRadius: "8px 8px 0 0",
                  }}
                >
                  <Avatar
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    variant='square'
                    src={item?.lastImage}
                    alt='thumbnail'
                  />
                </Box>

                <CardTitle
                  projectId={item.projectId}
                  title={item.title}
                  lastImage={item.lastImage}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 1,
                  }}
                >
                  <Button
                    onClick={handleGoToProject(item.projectId)}
                    sx={{
                      color: "black",
                    }}
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
