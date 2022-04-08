import { useState } from "react";

import MenuList from "../../components/menu-list/menu-list.component";
import Footer from "../../components/footer/footer.component";

import { projectsQuicklookData } from "../../data/data";
import "./projects.styles.scss";

const Projects = () => {
  const [menuItemSelected, setMenuItemSelected] = useState("Recipe Search App");

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
    </div>
  );
};

export default Projects;
