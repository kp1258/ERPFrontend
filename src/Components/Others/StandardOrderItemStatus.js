import React from "react";
const StandardOrderItemStatus = ({ status }) => {
  const color = status === "dostępny" ? "green" : "red";
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

export default StandardOrderItemStatus;
