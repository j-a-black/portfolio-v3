import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <div className="nav-container">
          <Link className="logo-container" to="/"></Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/">
              HOME
            </Link>
            <Link className="nav-link" to="/projects">
              PROJECTS
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
