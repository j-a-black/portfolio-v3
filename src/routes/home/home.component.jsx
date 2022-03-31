import { Outlet } from "react-router-dom";

import Hero from "../../components/hero/hero.component";
import Gallery from "../../components/gallery/gallery.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="homepage-container">
      <Hero />
      <Gallery />
      <Outlet />
    </div>
  );
};

export default Home;
