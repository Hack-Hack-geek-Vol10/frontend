import { CardContent, CardMedia, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import { useQuery } from "@apollo/client";
import {
  GetProjectQuery,
  GetProjectQueryVariables,
  GetProjectDocument,
} from "@/generated/graphql";
const ProjectCard = () => {
  const { data, loading, error } = useQuery<
    GetProjectQuery,
    GetProjectQueryVariables
  >(GetProjectDocument);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;
  console.log(data);
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
        {data.map((item) => (
          <Grid item xs={3} key={index}>
            <Paper
              elevation={5}
              style={{ borderRadius: "8px", backgroundColor: "white" }}
            >
              <CardMedia
                component='img'
                height='150'
                src='./00.png'
                alt={`Card Image ${item}`}
                style={{
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Card Title {item}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  detail:{item}
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProjectCard;
