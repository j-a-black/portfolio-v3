import { Link } from "react-router-dom";

import "./gallery.styles.scss";

import Mealify from "../../assets/images/mealify.png";
import Brochure from "../../assets/images/brochure.png";
import Shoppe from "../../assets/images/shoppe.png";

const Gallery = () => {
  return (
    <section className="gallery-container">
      <h2 className="section-title">Projects: Quicklook</h2>
      <div className="gallery-grid-wrapper">
        <div className="gallery-item">
          <img src={Mealify} alt="Recipe Search App" />
          <div className="content-container">
            <div className="text-box">
              <h3>Recipe Search App</h3>
              <p>Search for recipes based on a single ingredient (React)</p>
            </div>
            <a
              className="link-button"
              href="https://cupboard.jasonanthonblack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          </div>
        </div>
        <div className="gallery-item">
          <img src={Mealify} alt="Recipe Search App" />
          <div className="content-container">
            <div className="text-box">
              <h3>Recipe Search App</h3>
              <p>Search for recipes based on a single ingredient (React)</p>
            </div>
            <a
              className="link-button"
              href="https://cupboard.jasonanthonblack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          </div>
        </div>
        <div className="gallery-item">
          <img src={Mealify} alt="Recipe Search App" />
          <div className="content-container">
            <div className="text-box">
              <h3>Recipe Search App</h3>
              <p>Search for recipes based on a single ingredient (React)</p>
            </div>
            <a
              className="link-button"
              href="https://cupboard.jasonanthonblack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
