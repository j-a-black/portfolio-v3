import "./link-button.styles.scss";

const LinkButton = ({ styleClassName, href, ...otherProps }) => {
  return (
    <>
      <a className={styleClassName} href={href} {...otherProps}>
        View Demo
      </a>
    </>
  );
};

export default LinkButton;
