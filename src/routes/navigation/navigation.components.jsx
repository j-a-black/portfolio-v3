import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="nav-container">
          <Link className="logo-container" to="/" aria-label="home"></Link>
          <nav className="nav-links-container">
            <Link className="nav-link" to="/">
              HOME
            </Link>
            <Link className="nav-link" to="/projects">
              PROJECTS
            </Link>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
