import { useState } from "react";

import Menu from "../../components/menu/menu.component";
import Footer from "../../components/footer/footer.component";

import "./projects.styles.scss";

const Projects = () => {
  return (
    <div className="projects-page-container">
      <h1>Projects</h1>
      <Menu />
    </div>
  );
};

export default Projects;
