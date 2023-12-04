import { CardContent, CardMedia, Grid, Typography, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { AuthContext } from "@/store/AuthContext";
import { useContext } from "react";
import { useGetUserProjects } from "@/service/useProjectService";

const ProjectCardList = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid;
  const { data, loading } = useGetUserProjects(userId!);

  useEffect(() => {
    console.log(data);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

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
        {Array.isArray(data) &&
          data.map((item: any) => (
            <Grid item xs={3} key={item.id}>
              <Paper
                elevation={5}
                style={{ borderRadius: "8px", backgroundColor: "white" }}
              >
                <CardContent>
                  <Typography variant='h6' gutterBottom>
                    Card Title {item.title}
                  </Typography>
                </CardContent>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default ProjectCardList;
