import { useState } from "react";
import "./menu.styles.scss";

const Menu = () => {
  const [menuItemSelected, setMenuItemSelected] = useState("Recipe Search App");

  const onClick = (event) => {
    setMenuItemSelected(event.target.innerText);
  };

  return (
    <section className="menu-container">
      <h1>Projects</h1>
      <menu className="menu">
        <li
          onClick={onClick}
          className={
            menuItemSelected === "Recipe Search App"
              ? "menu-item active-bottom-border"
              : "menu-item"
          }
        >
          Recipe Search App
        </li>
        <li
          onClick={onClick}
          className={
            menuItemSelected === "Shopping Cart"
              ? "menu-item active-bottom-border"
              : "menu-item"
          }
        >
          Shopping Cart
        </li>
        <li
          onClick={onClick}
          className={
            menuItemSelected === "Brochure Landing Page"
              ? "menu-item active-bottom-border"
              : "menu-item"
          }
        >
          Brochure Landing Page
        </li>
      </menu>
    </section>
  );
};

export default Menu;
