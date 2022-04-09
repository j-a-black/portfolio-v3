import "./gallery-item.styles.scss";
import LinkButton from "../link-button/link-button.component";

const GalleryItem = ({ header, description, imgSrc, imgAlt, href }) => {
  return (
    <div className="gallery-item">
      <img src={imgSrc} alt={imgAlt} />
      <div className="content-container">
        <div className="text-box">
          <h3>{header}</h3>
          <p>{description}</p>
        </div>
        <LinkButton
          styleClassName="link-button"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        />
        {/* <a
          className="link-button"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Demo
        </a> */}
      </div>
    </div>
  );
};

export default GalleryItem;
