import React from "react";
const CustomOrderItemStatus = ({ status }) => {
  const color = status === "wyprodukowany" ? "green" : "red";
  const style = {
    color: `${color}`,
    border: `1px solid ${color}`,
    padding: "2px",
  };
  return <div style={style}>{status}</div>;
};

export default CustomOrderItemStatus;
