import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import React from "react";
const CancelButton = ({ item, handleCancel }) => {
  return (
    <Button
      style={{
        backgroundColor: "#1890FF",
        border: "2px solid white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      shape="circle-outline"
      icon={<CloseOutlined style={{ fontSize: "20px", color: "white" }} />}
      onClick={() => handleCancel(item.id)}
    />
  );
};

export default CancelButton;
