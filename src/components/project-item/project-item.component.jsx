import "./project-item.styles.scss";
import React from "react";

const ProjectItem = ({ projectContent }) => {
  const renderProjectItemData = projectContent.map((item, index) => {
    return <React.Fragment key={index}>{item}</React.Fragment>;
  });

  return <div className="text-box">{renderProjectItemData}</div>;
};

export default ProjectItem;
