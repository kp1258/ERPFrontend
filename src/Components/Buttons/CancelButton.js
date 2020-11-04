import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import React from "react";
const CancelButton = ({ item, handleCancel }) => {
  return (
    <Button
      style={{ backgroundColor: "red", border: "2px solid white" }}
      shape="circle-outline"
      icon={
        <div style={{ height: "40px" }}>
          <div style={{ marign: "auto" }}>
            <CloseOutlined style={{ fontSize: "20px", color: "white" }} />
          </div>
        </div>
      }
      onClick={() => handleCancel(item.id)}
    />
  );
};

export default CancelButton;
