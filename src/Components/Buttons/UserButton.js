import React from "react";
import { Button } from "antd";
import { UserIcon } from "../Icons";
const UserButton = () => {
  return (
    <Button
      shape="circle"
      icon={<UserIcon />}
      style={{
        backgroundColor: "#111B44",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

export default UserButton;
