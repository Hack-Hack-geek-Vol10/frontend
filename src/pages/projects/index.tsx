import React from "react";
import Header from "@/components/commons/Header";
import ProjectCardList from "@/components/projects/ProjectCardList";
import CreateProjectModal from "@/components/projects/CreateProjectModal";
import { Box } from "@/lib/mui/muiRendering";

const Index = () => {
  return (
    <>
      <Box>
        <Header />
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
