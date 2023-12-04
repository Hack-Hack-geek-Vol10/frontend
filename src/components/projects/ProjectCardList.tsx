import { CardContent, CardMedia, Grid, Typography, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { AuthContext } from "@/store/AuthContext";
import { useContext } from "react";
import { useUserProjects } from "@/service/useUserServices";

const ProjectCardList = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid;

  const { data, loading, error } = useUserProjects(userId!);
  if (loading) return <p>loading...</p>;

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
        {data &&
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
