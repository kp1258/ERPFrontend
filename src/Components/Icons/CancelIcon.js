import React from "react";
import { CloseOutlined } from "@ant-design/icons";
const CancelIcon = () => {
  return (
    <div style={{ height: "40px" }}>
      <div style={{ marign: "auto" }}>
        <CloseOutlined style={{ fontSize: "20px", color: "white" }} />
      </div>
    </div>
  );
};

export default CancelIcon;
