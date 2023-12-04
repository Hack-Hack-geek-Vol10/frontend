import React from "react";
import Header from "@/components/commons/CommonsHeader";
import ProjectCardList from "@/components/projects/ProjectCardList";
import CreateProjectModal from "@/components/projects/CreateProjectModal";

const Index = () => {
  return (
    <>
      <Header />
      <ProjectCardList />
      <CreateProjectModal />
    </>
  );
};

export default Index;
