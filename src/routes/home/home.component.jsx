import { Outlet } from "react-router-dom";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="homepage-container">
      <h1>This is the Home Page</h1>
      <Outlet />
    </div>
  );
};

export default Home;
