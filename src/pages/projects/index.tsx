import React from "react";
import Header from "@/components/commons/CommonsHeader";
import ProjectCardList from "@/components/projects/ProjectCardList";
import CreateProjectModal from "@/components/projects/CreateProjectModal";
import { Box } from "@/lib/mui/muiRendering";

const Index = () => {
  return (
    <>
      <Header />
      <ProjectCardList />

      <Box
        sx={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
        }}
      >
        <CreateProjectModal />
      </Box>
    </>
  );
};

export default Index;
