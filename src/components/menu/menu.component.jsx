import { useState } from "react";

import MenuList from "../menu-item/menu-item.component";
import { projectsQuicklookData } from "../../data/data";
import "./menu.styles.scss";

const Menu = () => {
  const [menuItemSelected, setMenuItemSelected] = useState("Recipe Search App");

  const onMenuClick = (event) => {
    setMenuItemSelected(event.target.innerText);
  };

  return (
    <section className="menu-container">
      <menu className="menu">
        {projectsQuicklookData.map((item) => (
          <MenuList
            key={item.id}
            header={item.header}
            onMenuClick={onMenuClick}
            menuItemSelected={menuItemSelected}
          />
        ))}
      </menu>
    </section>
  );
};

export default Menu;
