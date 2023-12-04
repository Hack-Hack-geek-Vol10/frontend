import { CardContent, CardMedia, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import { useQuery } from "@apollo/client";
import {
  GetUserProjectsDocument,
  GetUserProjectsQuery,
  GetUserProjectsQueryVariables,
} from "@/generated/graphql";
import { AuthContext } from "@/store/AuthContext";
import { useContext } from "react";

const ProjectCardList = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid;
  const getData = async () => {
    if (userId) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data, loading, error } = useQuery<
        GetUserProjectsQuery,
        GetUserProjectsQueryVariables
      >(GetUserProjectsDocument, {
        variables: { userId: userId },
        skip: !userId,
      });

      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error! {error.message}</div>;
      console.log(data);
      return data;
    }

    const data = getData();
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
              <Grid item xs={3} key={item.projectId}>
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
};
export default ProjectCardList;
