import "./gallery-item.styles.scss";
import LinkButton from "../link-button/link-button.component";

const GalleryItem = ({
  header,
  description,
  imgSrc,
  imgAlt,
  href,
  github,
  tech,
}) => {
  return (
    <div className="content">
      <div className="content-text">
        <h3>{header}</h3>
        <p className="skill-tag-color">&#62;&#62; {tech}</p>
        <p>{description}</p>
        <LinkButton
          styleClassName="project-link-button"
          href={href}
          linkButtonText="View Project"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>

      <div className="content-picture">
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};

export default GalleryItem;
