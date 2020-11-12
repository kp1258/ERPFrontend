import React from "react";
const CustomOrderItemStatus = ({ status }) => {
  const color = status === "Zrealizowany" ? "green" : "red";
  const style = {
    color: `${color}`,
    border: `1px solid ${color}`,
    padding: "2px",
    borderRadius: "10px",
    minWidth: "100px",
    textAlign: "center",
  };
  return <div style={style}>{status}</div>;
};

export default CustomOrderItemStatus;
