import "./gallery-item.styles.scss";

const GalleryItem = ({ header, description, imgSrc, imgAlt, href }) => {
  return (
    <div className="gallery-item">
      <img src={imgSrc} alt={imgAlt} />
      <div className="content-container">
        <div className="text-box">
          <h3>{header}</h3>
          <p>{description}</p>
        </div>
        <a
          className="link-button"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Demo
        </a>
      </div>
    </div>
  );
};

export default GalleryItem;
