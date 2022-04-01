import { Link } from "react-router-dom";

import GalleryItem from "../gallery-item/gallery-item.component";

import { projectsQuicklookData } from "../../data/data";
import "./gallery.styles.scss";

const Gallery = () => {
  return (
    <section className="gallery-container">
      <h2 className="section-title">Projects: Quicklook</h2>
      <div className="gallery-grid-wrapper">
        {projectsQuicklookData.map((item) => {
          return (
            <GalleryItem
              key={item.id}
              header={item.header}
              description={item.description}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              href={item.href}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
