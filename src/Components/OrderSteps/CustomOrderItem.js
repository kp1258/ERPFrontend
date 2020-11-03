import React from "react";
import { Button, Card } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { OrderDetails } from "../Others";
const CustomOrderItem = ({ item, handleCancel, handleEdit }) => {
  return (
    <div>
      <Card title={item.name}>
        <Button
          style={{ backgroundColor: "gray" }}
          shape="circle-outline"
          icon={<CloseOutlined />}
          onClick={() => handleCancel(item.id)}
        />
        <OrderDetails product={item.customProduct} />
        <Button onClick={() => handleEdit(item.id)} type="primary">
          Edytuj
        </Button>
      </Card>
    </div>
  );
};

export default CustomOrderItem;
