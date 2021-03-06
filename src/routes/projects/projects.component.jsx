import { useState } from "react";

import MenuList from "../../components/menu-list/menu-list.component";
import ProjectDescription from "../../components/project-description/project-description.components";

import { projectsQuicklookData } from "../../data/data";
import "./projects.styles.scss";

const Projects = () => {
  const [menuItemSelected, setMenuItemSelected] = useState(
    "Covid-19 Statistic Dashboard"
  );

  const onMenuClick = (event) => {
    setMenuItemSelected(event.target.innerText);
  };

  return (
    <div className="projects-page-container">
      <h1>Projects</h1>
      <MenuList
        projectsQuicklookData={projectsQuicklookData}
        menuItemSelected={menuItemSelected}
        onMenuClick={onMenuClick}
      />
      <ProjectDescription
        projectsQuicklookData={projectsQuicklookData}
        menuItemSelected={menuItemSelected}
      />
    </div>
  );
};

export default Projects;
