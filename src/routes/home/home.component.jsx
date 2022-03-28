import { Outlet } from "react-router-dom";

import Hero from "../../components/hero/hero.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="homepage-container">
      <Hero />
      <Outlet />
    </div>
  );
};

export default Home;
