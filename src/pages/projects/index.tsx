import React, { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";
import Header from "@/components/commons/CommonsHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import CreateProjectModal from "@/components/projects/CreateProjectModal";
const Index = () => {
  return (
    <>
      <Header />
      <ProjectCard />
      <CreateProjectModal />
    </>
  );
};

export default Index;
