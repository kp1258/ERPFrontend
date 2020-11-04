import React from "react";
import { Button, Card } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { OrderDetails } from "../Others";
import { FileItem, CancelButton } from "../Buttons";
const CustomOrderItem = ({ item, handleCancel, handleEdit }) => {
  const { customProduct } = item;
  return (
    <div>
      <Card
        hoverable
        style={{ border: "2px solid gray", marginInline: "50px" }}
        title={item.customProduct.name}
        extra={[<CancelButton item={item} handleCancel={handleCancel} />]}
        actions={[
          <Button onClick={() => handleEdit(item.id)} type="primary">
            Edytuj
          </Button>,
        ]}
      >
        <span>{customProduct.orderDescription}</span>
        {[...customProduct.fileList].map((file) => (
          <FileItem key={file.blobName} file={file} />
        ))}
      </Card>
    </div>
  );
};

export default CustomOrderItem;
