import React from "react";
import CardDivider from "./CardDivider";
import { FileItem } from "../Buttons";
const OrderDetails = ({ product }) => {
  return (
    <>
      <CardDivider content="Szczegóły zamówienia" />
      <span>{product.orderDescription}</span>
      {[...product.fileList]
        .filter((file) => {
          return file.type === "order";
        })
        .map((file) => (
          <FileItem key={file.blobName} file={file} />
        ))}
    </>
  );
};

export default OrderDetails;