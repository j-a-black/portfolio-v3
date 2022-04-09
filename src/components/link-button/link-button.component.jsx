import "./link-button.styles.scss";

const LinkButton = ({
  styleClassName,
  href,
  linkButtonText,
  ...otherProps
}) => {
  return (
    <>
      <a className={styleClassName} href={href} {...otherProps}>
        {linkButtonText}
      </a>
    </>
  );
};

export default LinkButton;
