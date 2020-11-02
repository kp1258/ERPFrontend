import React from "react";
const FileItem = (props) => {
  const { file } = props;
  return (
    <div>
      <a href={file.filePath} target="_blank" rel="noopener noreferrer">
        {file.fileName}
      </a>
    </div>
  );
};

export default FileItem;
