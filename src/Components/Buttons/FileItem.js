import React from "react";
const FileItem = (props) => {
  const { file } = props;
  return (
    <div>
      <a href={file.href} target="_blank" rel="noopener noreferrer">
        {file.name}
      </a>
    </div>
  );
};

export default FileItem;
