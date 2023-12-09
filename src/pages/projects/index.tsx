import React from "react";
import Header from "@/components/commons/Header";
import ProjectCardList from "@/components/projects/ProjectCardList";
import CreateProjectModal from "@/components/projects/CreateProjectModal";
import { Box, Typography } from "@/lib/mui/muiRendering";

const Index = () => {
  return (
    <>
      <Box>
        <Header />
        <Typography variant='h3' sx={{ ml: 2, mt: 2 }}>
          Team
        </Typography>
        <Box>
          <ProjectCardList />
        </Box>

        <Box
          sx={{
            bgcolor: "#FFA560",
            borderRadius: "50%",
            position: "absolute",
            bottom: "20px",
            right: "30px",
          }}
        >
          <CreateProjectModal />
        </Box>
      </Box>
    </>
  );
};

export default Index;
