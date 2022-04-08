import { useState } from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./menu-list.styles.scss";

const MenuList = ({ projectsQuicklookData, menuItemSelected, onMenuClick }) => {
  const renderedMenuList = projectsQuicklookData.map((item) => {
    return (
      <MenuItem
        key={item.id}
        header={item.header}
        onMenuClick={onMenuClick}
        menuItemSelected={menuItemSelected}
      />
    );
  });

  return (
    <section className="menu-container">
      <menu className="menu">{renderedMenuList}</menu>
    </section>
  );
};

export default MenuList;
