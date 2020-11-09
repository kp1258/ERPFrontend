import React from "react";
import { CardDivider } from "../Dividers";
import { FileItem } from "../Buttons";
const SolutionDetails = ({ product }) => {
  return (
    <>
      <CardDivider content="Szczegóły rozwiązania" />
      <span>{product.solutionDescription}</span>
      {[...product.fileList]
        .filter((file) => {
          return file.type === "Solution";
        })
        .map((file) => (
          <FileItem key={file.blobName} file={file} />
        ))}
    </>
  );
};

export default SolutionDetails;
