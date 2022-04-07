import { useState } from "react";
import "./menu.styles.scss";

const Menu = () => {
  return (
    <section className="menu-container">
      <h1>Projects</h1>
      <menu className="menu">
        <li className="menu-item">Recipe Search App</li>
        <li className="menu-item">Shopping Cart</li>
        <li className="menu-item">Brochure Landing Page</li>
      </menu>
    </section>
  );
};

export default Menu;
